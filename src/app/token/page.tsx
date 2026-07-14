"use client";

import Link from "next/link";
import { AllocationDonut } from "@/components/allocation-donut";
import { Disclaimer } from "@/components/disclaimer";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { useTranslations } from "@/lib/language-context";

export default function TokenPage() {
  const t = useTranslations();
  const tp = t.tokenPage;

  const slices = tp.allocation.map((item) => ({
    label: item.label,
    percent: item.percent,
    note: item.note,
  }));

  return (
    <PageShell>
      <section className="section-shell pb-10 pt-14 sm:pt-20">
        <div className="mx-auto max-w-5xl">
          <div className="flex flex-wrap items-center gap-3">
            <span className="section-kicker" style={{ marginBottom: 0 }}>
              {tp.kicker}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.8)]" />
              {tp.liveBadge}
            </span>
          </div>
          <h1 className="headline-gradient mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            {tp.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg">
            {tp.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="grid-card">
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                {tp.supplyLabel}
              </div>
              <div className="mt-2 text-2xl font-semibold text-white">
                {tp.supplyValue}
              </div>
            </div>
            <div className="grid-card">
              <div className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                {tp.platformLabel}
              </div>
              <div className="mt-2 flex items-center gap-2 text-2xl font-semibold text-[var(--gold-bright)]">
                {tp.platformValue}
              </div>
              <p className="mt-2 text-xs leading-5 text-white/50">
                {tp.standardNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            {tp.allocationTitle}
          </h2>
          <Reveal>
            <div className="grid-card">
              <AllocationDonut
                slices={slices}
                centerTop="100M"
                centerBottom="AUR"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="mx-auto grid max-w-5xl gap-5 md:grid-cols-2">
          <Reveal className="h-full">
            <div className="grid-card h-full">
              <h3 className="mb-4 text-lg font-semibold tracking-[-0.02em] text-white">
                {tp.purposeTitle}
              </h3>
              <ul className="space-y-3">
                {tp.purpose.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-white/78"
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

          <Reveal delay={90} className="h-full">
            <div className="h-full rounded-3xl border border-red-500/20 bg-red-500/[0.04] p-6 sm:p-7">
              <h3 className="mb-4 text-lg font-semibold tracking-[-0.02em] text-white/85">
                {tp.purposeIsNotTitle}
              </h3>
              <ul className="space-y-3">
                {tp.purposeIsNot.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-white/70"
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
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="mx-auto max-w-5xl space-y-6">
          <div>
            <div className="glass-panel flex flex-col gap-2 rounded-2xl px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                {tp.contractLabel}
              </span>
              <code className="font-mono text-sm text-white/55">
                {tp.contractPlaceholder}
              </code>
            </div>
            <p className="mt-2 px-1 text-xs text-white/45">{tp.explorerNote}</p>
          </div>

          <Disclaimer />

          <div>
            <Link
              href="/"
              className="text-sm text-white/60 transition hover:text-white"
            >
              ← {t.treasuryPage.backHome}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
