"use client";

import Link from "next/link";
import { useState } from "react";
import { PageShell } from "@/components/page-shell";
import { Reveal } from "@/components/reveal";
import { useTranslations } from "@/lib/language-context";

export default function ManifestoPage() {
  const t = useTranslations();
  const mp = t.manifestoPage;
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(mp.socialText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard unavailable — ignore silently.
    }
  };

  return (
    <PageShell>
      <section className="section-shell pb-8 pt-14 sm:pt-20">
        <div className="mx-auto max-w-3xl">
          <span className="section-kicker">{mp.kicker}</span>
          <h1 className="headline-gradient mt-2 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
            {mp.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-white/85 sm:text-xl sm:leading-9">
            {mp.lead}
          </p>
        </div>
      </section>

      <section className="section-shell py-8">
        <div className="mx-auto max-w-3xl space-y-12">
          {mp.sections.map((block, index) => (
            <Reveal key={block.title} delay={index * 60}>
              <article>
                <h2 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {block.title}
                </h2>
                <div className="space-y-4 text-base leading-8 text-white/76">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="mx-auto max-w-3xl">
          <p className="headline-gradient text-center text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
            «{mp.pullquote}»
          </p>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            {mp.vsTitle}
          </h2>
          <div className="grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl border border-red-500/20 bg-red-500/[0.04] p-6 sm:p-7">
              <h3 className="mb-5 text-lg font-semibold tracking-[-0.02em] text-white/80">
                {mp.them.title}
              </h3>
              <ul className="space-y-4">
                {mp.them.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-white/62"
                  >
                    <span aria-hidden className="mt-0.5 text-red-400/80">
                      ✕
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-[var(--gold-soft)]/40 bg-[var(--gold-soft)]/[0.06] p-6 shadow-[0_20px_80px_rgba(212,177,106,0.12)] sm:p-7">
              <h3 className="mb-5 text-lg font-semibold tracking-[-0.02em] text-[var(--gold-bright)]">
                {mp.us.title}
              </h3>
              <ul className="space-y-4">
                {mp.us.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-6 text-white/86"
                  >
                    <span aria-hidden className="mt-0.5 text-[var(--gold-bright)]">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-8 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            {mp.planTitle}
          </h2>
          <div className="grid gap-5 md:grid-cols-3">
            {mp.plan.map((step, index) => (
              <Reveal key={step.title} delay={index * 90} className="h-full">
                <div className="grid-card h-full">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-bright)]">
                    {step.title}
                  </div>
                  <p className="text-sm leading-7 text-white/74">{step.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell py-10">
        <div className="mx-auto max-w-3xl">
          <div className="glass-panel rounded-3xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-lg font-semibold tracking-[-0.02em] text-white">
                {mp.socialTitle}
              </h2>
              <span className="text-xs text-white/45">{mp.socialHint}</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-white/60">{mp.socialLead}</p>
            <p className="mt-4 rounded-2xl border border-white/10 bg-black/25 p-5 text-sm leading-7 text-white/78">
              {mp.socialText}
            </p>
            <button
              type="button"
              onClick={handleCopy}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-[var(--gold-soft)]/45 bg-[var(--gold-soft)]/[0.1] px-5 py-2.5 text-sm font-semibold text-[var(--gold-bright)] transition hover:bg-[var(--gold-soft)]/[0.18]"
            >
              {copied ? `✓ ${mp.copied}` : mp.copy}
            </button>
          </div>

          <div className="mt-10">
            <Link
              href="/"
              className="text-sm text-white/60 transition hover:text-white"
            >
              ← {mp.backHome}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
