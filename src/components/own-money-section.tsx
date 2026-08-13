"use client";

import { Reveal } from "@/components/reveal";
import { useTranslations } from "@/lib/language-context";

/**
 * "My own money in the project".
 *
 * The strongest trust signal the project has: the bar was paid for before any
 * money was raised. The amount is always shown in both currencies — 172k reads
 * as dollars out loud, and it is Singapore dollars.
 */
export function OwnMoneySection() {
  const t = useTranslations();

  return (
    <section id="own-money" className="relative py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <Reveal>
          <div className="mx-auto max-w-6xl">
            <span className="section-kicker">{t.ownMoney.kicker}</span>

            <div className="mt-1 grid gap-8 lg:grid-cols-[1.15fr_1fr] lg:items-start lg:gap-12">
              <div className="space-y-5">
                <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">
                  {t.ownMoney.title}
                </h2>
                {t.ownMoney.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="text-base leading-8 text-[var(--muted-foreground)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="grid-card">
                <dl className="divide-y divide-white/10">
                  {t.ownMoney.facts.map((fact) => (
                    <div
                      key={fact.label}
                      className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3.5 first:pt-0 last:pb-0"
                    >
                      <dt className="text-sm text-white/55">{fact.label}</dt>
                      <dd className="font-mono text-base font-semibold text-[var(--gold-bright)] sm:text-lg">
                        {fact.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 border-t border-white/10 pt-4 text-xs leading-5 text-white/45">
                  {t.ownMoney.note}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
