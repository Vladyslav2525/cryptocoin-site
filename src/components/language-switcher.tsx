"use client";

import { useLocale } from "@/lib/language-context";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className="flex items-center rounded-full border border-white/10 bg-black/20 p-0.5"
      role="group"
      aria-label="Language switcher"
    >
      <button
        type="button"
        onClick={() => setLocale("ru")}
        aria-pressed={locale === "ru"}
        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-200 ${
          locale === "ru"
            ? "bg-white/14 text-white"
            : "text-white/42 hover:text-white/70"
        }`}
      >
        RU
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-200 ${
          locale === "en"
            ? "bg-white/14 text-white"
            : "text-white/42 hover:text-white/70"
        }`}
      >
        EN
      </button>
    </div>
  );
}
