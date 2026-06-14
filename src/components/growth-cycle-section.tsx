import { GROWTH_CYCLE_STEPS } from "@/lib/site-content";

export function GrowthCycleSection() {
  const firstRow = GROWTH_CYCLE_STEPS.slice(0, 2);
  const secondRow = GROWTH_CYCLE_STEPS.slice(2, 4);
  const finalStep = GROWTH_CYCLE_STEPS[4];

  return (
    <section id="growth-cycle" className="relative py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-6xl">
          <span className="section-kicker">Closed-loop value model</span>

          <div className="mb-10 max-w-4xl space-y-5">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Как это работает: Замкнутый цикл роста
            </h2>
            <p className="text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
              Схема ниже показывает, как физическое обеспечение, развитие
              проекта и доход из реального мира формируют цикл, который должен
              укреплять общую стоимость проекта.
            </p>
          </div>

          <div className="hidden lg:block">
            <div className="grid grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] items-stretch gap-6">
              {firstRow.map((step, index) => (
                <div key={step.title} className="contents">
                  <article className="grid-card min-h-[240px] break-words">
                    <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-bright)]">
                      Step {index + 1}
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                      {step.title}
                    </h3>
                    <p className="text-base leading-8 text-white/72">{step.body}</p>
                  </article>
                  {index === 0 ? (
                    <div className="flow-arrow">
                      <span className="flow-arrow-icon">→</span>
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <div className="flex justify-end pr-[calc(50%-3rem)]">
              <div className="snake-turn snake-turn-right mt-3 mb-3 h-20 w-28" />
            </div>

            <div className="grid grid-cols-[minmax(0,1fr)_96px_minmax(0,1fr)] items-stretch gap-6">
              <article className="grid-card order-3 min-h-[240px] break-words">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-bright)]">
                  Step 4
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {secondRow[1]?.title}
                </h3>
                <p className="text-base leading-8 text-white/72">
                  {secondRow[1]?.body}
                </p>
              </article>

              <div className="flow-arrow order-2">
                <span className="flow-arrow-icon flow-arrow-icon-reverse">←</span>
              </div>

              <article className="grid-card order-1 min-h-[240px] break-words">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-bright)]">
                  Step 3
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {secondRow[0]?.title}
                </h3>
                <p className="text-base leading-8 text-white/72">
                  {secondRow[0]?.body}
                </p>
              </article>
            </div>

            <div className="flex justify-start pl-[calc(50%-3rem)]">
              <div className="snake-turn snake-turn-left mt-3 mb-3 h-20 w-28" />
            </div>

            <div className="mx-auto max-w-[calc(50%-1.5rem)]">
              <article className="grid-card min-h-[220px] break-words">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-bright)]">
                  Step 5
                </div>
                <h3 className="mb-4 text-2xl font-semibold tracking-[-0.03em] text-white">
                  {finalStep?.title}
                </h3>
                <p className="text-base leading-8 text-white/72">{finalStep?.body}</p>
              </article>
            </div>
          </div>

          <div className="hidden gap-5 md:grid lg:hidden md:grid-cols-2">
            {GROWTH_CYCLE_STEPS.map((step, index) => (
              <article key={step.title} className="grid-card min-h-[220px] break-words">
                <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-bright)]">
                  Step {index + 1}
                </div>
                <h3 className="mb-4 text-xl font-semibold tracking-[-0.03em] text-white">
                  {step.title}
                </h3>
                <p className="text-sm leading-7 text-white/72 sm:text-base sm:leading-8">
                  {step.body}
                </p>
              </article>
            ))}
          </div>

          <div className="space-y-4 md:hidden">
            {GROWTH_CYCLE_STEPS.map((step, index) => (
              <div key={step.title} className="flex flex-col items-center">
                <article className="grid-card w-full break-words">
                  <div className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-[var(--gold-bright)]">
                    Step {index + 1}
                  </div>
                  <h3 className="mb-4 text-lg font-semibold tracking-[-0.03em] text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/72">{step.body}</p>
                </article>
                {index < GROWTH_CYCLE_STEPS.length - 1 ? (
                  <div className="flow-arrow flow-arrow-vertical h-16">
                    <span className="flow-arrow-icon">↓</span>
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
