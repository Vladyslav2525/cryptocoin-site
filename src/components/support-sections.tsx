"use client";

import { useTranslations } from "@/lib/language-context";
import { SiteFooter } from "@/components/site-footer";

export function SupportSections() {
  const t = useTranslations();

  return (
    <>
      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-6xl">
            <span className="section-kicker">{t.trust.kicker}</span>
            <div className="mb-10 max-w-4xl space-y-5">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {t.trust.title}
              </h2>
              <p className="text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
                {t.trust.description}
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {t.trust.panels.map((panel) => (
                <article key={panel.title} className="grid-card">
                  <h3 className="mb-4 text-xl font-semibold tracking-[-0.03em] text-white">
                    {panel.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/74 sm:text-base">
                    {panel.body}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-6xl">
            <span className="section-kicker">{t.roadmap.kicker}</span>
            <div className="mb-10 max-w-4xl space-y-5">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {t.roadmap.title}
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-4">
              {t.roadmap.steps.map((step, index) => (
                <article key={step.title} className="grid-card">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-bright)]">
                    Phase {index + 1}
                  </div>
                  <h3 className="mb-3 text-lg font-semibold tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/74">{step.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="relative py-20 sm:py-24 lg:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-6xl">
            <span className="section-kicker">{t.faq.kicker}</span>
            <div className="mb-10 max-w-4xl space-y-5">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {t.faq.title}
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {t.faq.items.map((item) => (
                <article key={item.question} className="grid-card">
                  <h3 className="mb-4 text-xl font-semibold tracking-[-0.03em] text-white">
                    {item.question}
                  </h3>
                  <p className="text-sm leading-7 text-white/74 sm:text-base">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
