import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = [
  {
    code: "en" as const,
    name: "English",
    flag: "🇬🇧",
    abbreviation: "EN",
  },
  {
    code: "es" as const,
    name: "Español",
    flag: "🇪🇸",
    abbreviation: "ES",
  },
  {
    code: "th" as const,
    name: "ไทย",
    flag: "🇹🇭",
    abbreviation: "TH",
  },
  {
    code: "de" as const,
    name: "Deutsch",
    flag: "🇩🇪",
    abbreviation: "DE",
  },
];

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage();
  const currentLang = languages.find((lang) => lang.code === language) || languages[0];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="text-[hsl(180_30%_98%)]/80 hover:text-[hsl(180_70%_45%)] hover:bg-[hsl(220_25%_15%)] border border-transparent hover:border-[hsl(220_25%_20%)]"
        >
          <span>{currentLang.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-[hsl(220_25%_12%)] border border-[hsl(220_25%_20%)] w-48"
      >
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center justify-between gap-3 px-4 py-3 cursor-pointer text-[hsl(180_30%_98%)] hover:bg-[hsl(220_25%_15%)] hover:text-[hsl(180_70%_45%)] transition-colors ${
              language === lang.code ? "bg-[hsl(220_25%_15%)]" : ""
            }`}
          >
            <span className="font-medium">{lang.name}</span>
            {language === lang.code && (
              <Check className="h-4 w-4 text-[hsl(180_70%_45%)]" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;

