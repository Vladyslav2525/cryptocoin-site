import { PHILOSOPHY_BLOCKS } from "@/lib/site-content";

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto max-w-6xl">
          <span className="section-kicker">Project philosophy</span>

          <div className="mb-10 max-w-4xl space-y-5">
            <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
              Наша философия: Мост между двумя мирами
            </h2>
            <p className="max-w-3xl text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
              Этот блок объясняет не просто продукт, а логику доверия:
              почему токен должен быть связан с физической реальностью, а не
              только с верой рынка.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {PHILOSOPHY_BLOCKS.map((block) => (
              <article key={block.title} className="grid-card">
                <h3 className="mb-4 text-xl font-semibold tracking-[-0.03em] text-white">
                  {block.title}
                </h3>
                <div className="space-y-4 text-sm leading-7 text-white/76 sm:text-base">
                  {block.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
