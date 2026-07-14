"use client";

import Link from "next/link";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { useTranslations } from "@/lib/language-context";

export default function LegalPage() {
  const t = useTranslations();
  const lp = t.legalPage;

  return (
    <PageShell>
      <section className="section-shell pb-8 pt-14 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <span className="section-kicker">{lp.kicker}</span>
          <h1 className="headline-gradient mt-2 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            {lp.title}
          </h1>
          <p className="mt-5 text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            {lp.intro}
          </p>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="mx-auto grid max-w-3xl gap-5 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="h-full rounded-3xl border border-red-500/20 bg-red-500/[0.04] p-6 sm:p-7">
              <h2 className="mb-4 text-lg font-semibold tracking-[-0.02em] text-white/85">
                {lp.isNotTitle}
              </h2>
              <ul className="space-y-3">
                {lp.isNot.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-white/72"
                  >
                    <span aria-hidden className="mt-0.5 text-red-400/80">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={90} className="h-full">
            <div className="h-full rounded-3xl border border-[var(--gold-soft)]/40 bg-[var(--gold-soft)]/[0.06] p-6 sm:p-7">
              <h2 className="mb-4 text-lg font-semibold tracking-[-0.02em] text-[var(--gold-bright)]">
                {lp.isTitle}
              </h2>
              <ul className="space-y-3">
                {lp.is.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-white/82"
                  >
                    <span aria-hidden className="mt-0.5 text-[var(--gold-bright)]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="mx-auto max-w-3xl">
          <div className="glass-panel rounded-2xl px-6 py-5 text-sm leading-7 text-white/60">
            {lp.notAdvice}
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="text-sm text-white/60 transition hover:text-white"
            >
              ← {lp.backHome}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
