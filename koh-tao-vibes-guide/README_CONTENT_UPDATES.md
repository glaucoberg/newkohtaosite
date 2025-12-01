# How to Update Website Content

This guide shows you how to easily update photos, prices, add new businesses, hotels, and other content without touching code.

## 📁 Content Files Location

All content is stored in JSON files located in `src/data/`:

- **`destinations.json`** - Tourist destinations (beaches, viewpoints)
- **`activities.json`** - Activities and experiences
- **`accommodations.json`** - Hotels, resorts, hostels
- **`businesses.json`** - Restaurants, shops, services

---

## 🏨 Adding/Updating Accommodations

Edit `src/data/accommodations.json`:

### Example Entry:
```json
{
  "id": "unique-id",
  "nameKey": "accommodations.yourHotelName.name",
  "descriptionKey": "accommodations.yourHotelName.description",
  "type": "resort",
  "rating": 4.5,
  "price": "$50-80",
  "location": "accommodations.location.saireeBeach",
  "image": "/assets/your-hotel-photo.jpg",
  "amenities": [
    "accommodations.amenity.pool",
    "accommodations.amenity.wifi",
    "accommodations.amenity.ac"
  ],
  "featured": false
}
```

### Fields Explained:
- **`id`**: Unique identifier (use lowercase with hyphens, e.g., "my-hotel-name")
- **`nameKey`**: Translation key - add translations in `LanguageContext.tsx` for each language
- **`type`**: One of: `resort`, `villa`, `bungalow`, `hostel`
- **`rating`**: Number from 1 to 5 (can be decimal like 4.5)
- **`price`**: Price string (e.g., "$50-80", "From $120/night")
- **`location`**: Use existing location keys or create new ones
- **`image`**: Path to image file (place images in `public/assets/`)
- **`amenities`**: Array of amenity translation keys
- **`featured`**: `true` to show in featured section, `false` otherwise

### Adding Photos:
1. Place your image in `public/assets/` folder
2. Update `image` field to point to your image (e.g., `/assets/my-hotel.jpg`)

---

## 🏪 Adding/Updating Businesses

Edit `src/data/businesses.json`:

### Example Entry:
```json
{
  "id": "unique-id",
  "nameKey": "businesses.yourBusiness.name",
  "descriptionKey": "businesses.yourBusiness.description",
  "category": "restaurant",
  "rating": 4.5,
  "openHours": "11:00 AM - 10:00 PM",
  "phone": "+66 77 123 4567",
  "location": "businesses.location.saireeBeach",
  "image": "/assets/your-business-photo.jpg"
}
```

### Categories:
- `restaurant`
- `diveShop`
- `shopping`
- `cafe`
- `spa`

---

## 🎯 Adding/Updating Activities

Edit `src/data/activities.json`:

### Example Entry:
```json
{
  "id": "unique-id",
  "titleKey": "activities.yourActivity.title",
  "descriptionKey": "activities.yourActivity.description",
  "price": "From $50",
  "features": [
    "activities.yourActivity.feature.one",
    "activities.yourActivity.feature.two"
  ],
  "color": "from-[hsl(180_70%_45%)] to-[hsl(45_85%_55%)]"
}
```

### Price Format:
- "From $50"
- "$50-100"
- "Free"
- "Various"

---

## 📍 Adding/Updating Destinations

Edit `src/data/destinations.json`:

### Example Entry:
```json
{
  "id": "unique-id",
  "nameKey": "destinations.yourDestination.name",
  "typeKey": "destinations.type.beach",
  "descriptionKey": "destinations.yourDestination.description",
  "image": "/assets/destination-photo.jpg",
  "activities": [
    "destinations.activity.swimming",
    "destinations.activity.snorkeling"
  ]
}
```

---

## 🌐 Adding Translations

After adding new content, you need to add translations in `src/contexts/LanguageContext.tsx`.

### Example for a new hotel:

**English (en section):**
```typescript
"accommodations.myNewHotel.name": "My New Hotel",
"accommodations.myNewHotel.description": "Beautiful beachfront hotel with amazing views",
```

**Spanish (es section):**
```typescript
"accommodations.myNewHotel.name": "Mi Nuevo Hotel",
"accommodations.myNewHotel.description": "Hermoso hotel frente a la playa con vistas increíbles",
```

**Thai (th section):**
```typescript
"accommodations.myNewHotel.name": "โรงแรมใหม่ของฉัน",
"accommodations.myNewHotel.description": "โรงแรมริมชายหาดที่สวยงามพร้อมทิวทัศน์ที่น่าทึ่ง",
```

---

## 📸 Adding Images

1. **Save your image** to `public/assets/` folder
2. **Name it** something descriptive (e.g., `ocean-view-hotel.jpg`)
3. **Update the JSON** file to reference it: `"/assets/ocean-view-hotel.jpg"`

**Recommended image sizes:**
- Accommodations: 1200x800px (landscape)
- Businesses: 800x600px
- Destinations: 1200x600px

---

## 💡 Quick Tips

1. **Always use unique IDs** - Don't duplicate IDs across entries
2. **Test after changes** - Save files and refresh the browser to see changes
3. **Keep translations consistent** - Add translations for all 3 languages (English, Spanish, Thai)
4. **Use featured wisely** - Only set `"featured": true` for your best/promoted items
5. **Backup before major changes** - Copy JSON files before making big updates

---

## 🔧 Need Help?

- Check existing entries in JSON files as examples
- All translation keys follow a pattern: `section.itemName.property`
- Images must be in `public/assets/` folder to work properly

