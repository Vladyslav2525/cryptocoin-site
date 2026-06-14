import { DottedSurface } from "@/components/dotted-surface";
import { TypewriterHero } from "@/components/typewriter-hero";

const youtubeEmbedUrl = process.env.NEXT_PUBLIC_YOUTUBE_EMBED_URL;

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      <DottedSurface />
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,rgba(4,5,11,0.2),rgba(4,5,11,0.92)_70%,rgba(4,5,11,1))]" />

      <div className="section-shell flex min-h-screen flex-col py-10 sm:py-12 lg:py-14">
          <div className="sticky top-4 z-20 pb-10 sm:pb-12">
            <nav className="glass-panel mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 rounded-[1.75rem] px-4 py-4 sm:px-5 lg:flex-row">
              <div className="text-center lg:text-left">
                <div className="text-sm font-semibold uppercase tracking-[0.28em] text-white/78">
                  CryptoCoin
                </div>
                <div className="mt-1 text-xs uppercase tracking-[0.2em] text-white/45">
                  premium rwa concept
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                <a
                  href="#philosophy"
                  className="rounded-full border border-white/10 bg-white px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-black transition hover:bg-white/90 sm:px-5"
                >
                  Философия
                </a>
                <a
                  href="#growth-cycle"
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10 sm:px-5"
                >
                  Цикл роста
                </a>
                <a
                  href="#faq"
                  className="rounded-full border border-white/10 bg-white/6 px-4 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] text-white transition hover:bg-white/10 sm:px-5"
                >
                  FAQ
                </a>
              </div>
            </nav>
          </div>

          <div className="flex flex-1 flex-col justify-center">
            <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 text-center sm:gap-10">
              <TypewriterHero />

              <p className="max-w-3xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
                Концепция проекта строится вокруг физического обеспечения, прямой
                видимости резервов и экономической модели, которая связывает токен
                с реальными активами и реальным денежным потоком.
              </p>

              <span className="section-kicker">
                Real-world asset concept · Live transparency · 24/7
              </span>

              <div className="hero-video-frame glass-panel w-full overflow-hidden rounded-[2rem] p-3 sm:p-4 lg:p-5">
                <div className="mb-3 flex items-center justify-between gap-3 px-2 py-1 text-left text-xs uppercase tracking-[0.24em] text-white/58 sm:px-3">
                  <span>Live reserve stream</span>
                  <span className="inline-flex items-center gap-2 text-white/70">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-500 shadow-[0_0_18px_rgba(239,68,68,0.7)]" />
                    Online window
                  </span>
                </div>

                <div className="relative aspect-video overflow-hidden rounded-[1.5rem] border border-white/10 bg-black/65">
                  {youtubeEmbedUrl ? (
                    <iframe
                      title="CryptoCoin live reserve stream"
                      src={youtubeEmbedUrl}
                      className="h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center gap-4 px-6 text-center">
                      <span className="rounded-full border border-[rgba(243,217,161,0.3)] bg-[rgba(243,217,161,0.08)] px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--gold-bright)]">
                        YouTube placeholder
                      </span>
                      <div className="space-y-3">
                        <h2 className="text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
                          Здесь будет размещено окно прямой трансляции золота и
                          сопутствующих документов
                        </h2>
                        <p className="mx-auto max-w-3xl text-sm leading-7 text-white/64 sm:text-base">
                          Контейнер уже подготовлен под крупную адаптивную трансляцию
                          практически на всю полезную ширину первого экрана. После
                          добавления YouTube embed URL сюда автоматически встанет
                          живое видео.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <div className="flex flex-col items-center gap-3 sm:flex-row">
                <a
                  href="#philosophy"
                  className="rounded-full border border-white/14 bg-white px-6 py-3 text-sm font-semibold text-black transition hover:bg-white/92"
                >
                  Изучить философию
                </a>
                <a
                  href="#growth-cycle"
                  className="rounded-full border border-white/14 bg-white/6 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Посмотреть цикл роста
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}
