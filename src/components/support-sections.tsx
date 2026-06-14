import {
  FAQ_ITEMS,
  FOOTER_LINKS,
  ROADMAP_STEPS,
  SUPPORT_PANELS,
} from "@/lib/site-content";

export function SupportSections() {
  return (
    <>
      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-6xl">
            <span className="section-kicker">Trust architecture</span>
            <div className="mb-10 max-w-4xl space-y-5">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Почему золото, прозрачность и buyback-модель работают вместе
              </h2>
              <p className="text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
                Ниже заложены базовые блоки доверия и объяснения проекта,
                которые будут служить основой для первого публичного релиза.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {SUPPORT_PANELS.map((panel) => (
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
            <span className="section-kicker">Roadmap</span>
            <div className="mb-10 max-w-4xl space-y-5">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Старт с золота. Дальше — расширение в активы реального мира
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-4">
              {ROADMAP_STEPS.map((step, index) => (
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
            <span className="section-kicker">FAQ</span>
            <div className="mb-10 max-w-4xl space-y-5">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                Базовые ответы на ключевые вопросы
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {FAQ_ITEMS.map((item) => (
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

      <footer className="relative border-t border-white/8 py-10">
        <div className="section-shell">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-white/72">
                CryptoCoin
              </div>
              <p className="mt-2 max-w-2xl text-sm leading-7 text-white/52">
                Концепт премиального landing page для проекта, который строится
                вокруг физического обеспечения, прозрачности и реальной экономики.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {FOOTER_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/68 transition hover:bg-white/6 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
