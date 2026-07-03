"use client";

import { useTranslations } from "@/lib/language-context";

export function ComparisonSection() {
  const t = useTranslations();

  return (
    <section id="comparison" className="relative py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-6xl">
          <span className="section-kicker">{t.comparison.kicker}</span>

          <div className="mb-10 max-w-4xl space-y-5">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              {t.comparison.title}
            </h2>
            <p className="max-w-3xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
              {t.comparison.description}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-red-500/20 bg-red-500/[0.04] p-6 sm:p-7">
              <h3 className="mb-5 text-xl font-semibold tracking-[-0.03em] text-white/80">
                {t.comparison.others.title}
              </h3>
              <ul className="space-y-4">
                {t.comparison.others.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-white/62 sm:text-base"
                  >
                    <span aria-hidden className="mt-1 text-red-400/80">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative rounded-3xl border border-[var(--gold-soft)]/40 bg-[var(--gold-soft)]/[0.06] p-6 shadow-[0_20px_80px_rgba(212,177,106,0.12)] sm:p-7">
              <h3 className="mb-5 text-xl font-semibold tracking-[-0.03em] text-[var(--gold-bright)]">
                {t.comparison.us.title}
              </h3>
              <ul className="space-y-4">
                {t.comparison.us.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-white/86 sm:text-base"
                  >
                    <span aria-hidden className="mt-1 text-[var(--gold-bright)]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
