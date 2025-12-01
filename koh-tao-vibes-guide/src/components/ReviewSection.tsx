import { useState } from "react";
import { Star, User, Calendar, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { format } from "date-fns";

interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
  verified?: boolean;
}

interface ReviewSectionProps {
  entityId: string;
  entityType: "accommodation" | "business";
  reviews: Review[];
  onAddReview?: (review: Omit<Review, "id" | "date">) => void;
}

const ReviewSection = ({ entityId, entityType, reviews, onAddReview }: ReviewSectionProps) => {
  const [showForm, setShowForm] = useState(false);
  const [userName, setUserName] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();

  const averageRating = reviews.length > 0
    ? (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1)
    : "0.0";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!userName.trim() || !comment.trim()) {
      toast({
        title: t("reviews.error"),
        description: t("reviews.fillAllFields"),
        variant: "destructive",
      });
      return;
    }

    if (onAddReview) {
      onAddReview({
        userName: userName.trim(),
        rating,
        comment: comment.trim(),
      });
    }

    toast({
      title: t("reviews.thankYou"),
      description: t("reviews.reviewSubmitted"),
    });

    setUserName("");
    setComment("");
    setRating(5);
    setShowForm(false);
  };

  const renderStars = (ratingValue: number, interactive = false, onRatingChange?: (rating: number) => void) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => interactive && onRatingChange && onRatingChange(star)}
            className={interactive ? "cursor-pointer hover:scale-110 transition-transform" : ""}
            disabled={!interactive}
          >
            <Star
              className={`h-5 w-5 ${
                star <= ratingValue
                  ? "fill-[hsl(45_85%_55%)] text-[hsl(45_85%_55%)]"
                  : "fill-none text-[hsl(220_25%_20%)]"
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-8 space-y-6">
      {/* Average Rating Summary */}
      <div className="bg-[hsl(220_25%_12%)] rounded-xl p-6 border border-[hsl(220_25%_20%)]">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-[hsl(180_30%_98%)] mb-2">{t("reviews.customerReviews")}</h3>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <span className="text-4xl font-bold bg-gradient-to-r from-[hsl(45_85%_55%)] to-[hsl(180_70%_45%)] bg-clip-text text-transparent">
                  {averageRating}
                </span>
                <div className="flex flex-col">
                  {renderStars(Number(averageRating))}
                  <span className="text-sm text-[hsl(180_30%_98%_/_0.6)] mt-1">
                    {reviews.length} {t("reviews.reviews")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <Button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_20px_hsl(180_70%_45%_/_0.4)]"
          >
            {t("reviews.writeReview")}
          </Button>
        </div>
      </div>

      {/* Review Form */}
      {showForm && (
        <div className="bg-[hsl(220_25%_12%)] rounded-xl p-6 border border-[hsl(220_25%_20%)]">
          <h4 className="text-xl font-bold text-[hsl(180_30%_98%)] mb-4">{t("reviews.writeReview")}</h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label className="text-[hsl(180_30%_98%)] mb-2 block">{t("reviews.yourName")}</Label>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg bg-[hsl(220_25%_15%)] border border-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)] focus:outline-none focus:ring-2 focus:ring-[hsl(180_70%_45%)]"
                placeholder={t("reviews.namePlaceholder")}
              />
            </div>
            <div>
              <Label className="text-[hsl(180_30%_98%)] mb-2 block">{t("reviews.rating")}</Label>
              {renderStars(rating, true, setRating)}
            </div>
            <div>
              <Label className="text-[hsl(180_30%_98%)] mb-2 block">{t("reviews.comment")}</Label>
              <Textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="min-h-[120px] bg-[hsl(220_25%_15%)] border-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)] focus:ring-[hsl(180_70%_45%)]"
                placeholder={t("reviews.commentPlaceholder")}
              />
            </div>
            <div className="flex gap-3">
              <Button
                type="submit"
                className="bg-gradient-to-r from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] text-[hsl(220_20%_8%)] hover:shadow-[0_0_20px_hsl(180_70%_45%_/_0.4)]"
              >
                {t("reviews.submitReview")}
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => setShowForm(false)}
                className="border-[hsl(220_25%_20%)] text-[hsl(180_30%_98%)] hover:bg-[hsl(220_25%_15%)]"
              >
                {t("reviews.cancel")}
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <div className="text-center py-8 text-[hsl(180_30%_98%_/_0.6)]">
            {t("reviews.noReviews")}
          </div>
        ) : (
          reviews.map((review) => (
            <div
              key={review.id}
              className="bg-[hsl(220_25%_12%)] rounded-xl p-6 border border-[hsl(220_25%_20%)]"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)] flex items-center justify-center">
                    <User className="h-5 w-5 text-[hsl(220_20%_8%)]" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-[hsl(180_30%_98%)]">{review.userName}</span>
                      {review.verified && (
                        <CheckCircle2 className="h-4 w-4 text-[hsl(180_70%_45%)]" />
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-[hsl(180_30%_98%_/_0.6)]">
                      <Calendar className="h-3 w-3" />
                      <span>{format(new Date(review.date), "MMM dd, yyyy")}</span>
                    </div>
                  </div>
                </div>
                <div>{renderStars(review.rating)}</div>
              </div>
              <p className="text-[hsl(180_30%_98%_/_0.8)] leading-relaxed">{review.comment}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ReviewSection;

