"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import {
  type Locale,
  type Translations,
  RUSSIAN_SPEAKING_COUNTRIES,
  translations,
} from "@/lib/i18n";

const STORAGE_KEY = "aureum-link-site-locale";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue>({
  locale: "en",
  setLocale: () => {},
  t: translations.en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    if (typeof window === "undefined") return "en";
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ru" || saved === "en") return saved;
    return "en";
  });

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "ru" || saved === "en") return;

    fetch("https://ipwho.is/")
      .then((r) => r.json())
      .then((data: { country_code?: string }) => {
        const country = data?.country_code ?? "";
        if (RUSSIAN_SPEAKING_COUNTRIES.has(country)) {
          setLocaleState("ru");
        }
      })
      .catch(() => {
        // Keep default "en" on error
      });
  }, []);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem(STORAGE_KEY, newLocale);
  };

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale, t: translations[locale] }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  return useContext(LanguageContext);
}

export function useTranslations() {
  return useContext(LanguageContext).t;
}
