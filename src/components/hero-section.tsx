"use client";

import Link from "next/link";
import { HeroNavbar } from "@/components/hero-navbar";
import { TypewriterHero } from "@/components/typewriter-hero";
import { useTranslations } from "@/lib/language-context";

const youtubeEmbedUrl = process.env.NEXT_PUBLIC_YOUTUBE_EMBED_URL;

export function HeroSection() {
  const t = useTranslations();

  return (
    <section className="relative min-h-screen overflow-hidden">
      <HeroNavbar />

      <div className="section-shell flex min-h-screen flex-col py-24 sm:py-28 lg:py-32">
        <div className="flex flex-1 flex-col justify-center">
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 text-center sm:gap-10">
              <TypewriterHero />

              <p className="max-w-3xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
                {t.hero.description}
              </p>

              <span className="section-kicker">{t.hero.kicker}</span>

              <div
                id="hero-video"
                className="hero-video-frame glass-panel w-full overflow-hidden rounded-[2rem] p-3 sm:p-4 lg:p-5"
              >
                <div className="mb-3 flex items-center justify-between gap-3 px-2 py-1 text-left text-xs uppercase tracking-[0.24em] text-white/58 sm:px-3">
                  <span>{t.hero.liveLabel}</span>
                  <span className="inline-flex items-center gap-2 text-white/70">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.7)]" />
                    Online window
                  </span>
                </div>

                <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/65">
                  {youtubeEmbedUrl ? (
                    <iframe
                      title="AUREUM LINK live reserve stream"
                      src={youtubeEmbedUrl}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                      <span className="rounded-full border border-[rgba(243,217,161,0.3)] bg-[rgba(243,217,161,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold-bright)]">
                        {t.hero.videoPlaceholderLabel}
                      </span>
                      <div className="space-y-3">
                        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                          {t.hero.videoPlaceholderTitle}
                        </h2>
                        <p className="mx-auto max-w-3xl text-sm leading-7 text-white/64 sm:text-base">
                          {t.hero.videoPlaceholderBody}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <Link
                  href="/treasury"
                  className="rounded-full border border-[var(--gold-soft)]/50 bg-[linear-gradient(135deg,var(--gold-bright),var(--gold-soft))] px-6 py-3 text-sm font-semibold text-black shadow-[0_0_28px_rgba(212,177,106,0.28)] transition hover:shadow-[0_0_40px_rgba(212,177,106,0.45)]"
                >
                  {t.hero.ctaTreasury}
                </Link>
                <Link
                  href="/manifesto"
                  className="rounded-full border border-white/14 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {t.hero.ctaManifesto}
                </Link>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

