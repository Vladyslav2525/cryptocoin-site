"use client";

import { useTranslations } from "@/lib/language-context";

export function ManifestoSection() {
  const t = useTranslations();

  return (
    <section id="manifesto" className="relative py-16 sm:py-20 lg:py-24">
      <div className="section-shell">
        <div className="mx-auto max-w-4xl text-center">
          <span className="section-kicker">{t.manifesto.kicker}</span>

          <p className="headline-gradient mt-4 text-2xl font-semibold tracking-[-0.03em] sm:text-3xl lg:text-4xl">
            {t.manifesto.statement}
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
            {t.manifesto.description}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {t.manifesto.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[var(--gold-soft)]/40 bg-[var(--gold-soft)]/[0.08] px-4 py-2 text-sm font-medium text-[var(--gold-bright)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
