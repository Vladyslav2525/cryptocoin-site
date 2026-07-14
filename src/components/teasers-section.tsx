"use client";

import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { useTranslations } from "@/lib/language-context";

export function TeasersSection() {
  const t = useTranslations();

  const cards = [
    { ...t.teasers.treasury, href: "/treasury" },
    { ...t.teasers.token, href: "/token" },
    { ...t.teasers.manifesto, href: "/manifesto" },
  ];

  return (
    <section className="relative py-20 sm:py-24 lg:py-28">
      <div className="section-shell">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.href} delay={index * 90} className="h-full">
              <Link
                href={card.href}
                className="grid-card group flex h-full flex-col justify-between gap-6 transition duration-300 hover:-translate-y-1 hover:border-[var(--gold-soft)]/45 hover:shadow-[0_28px_90px_rgba(212,177,106,0.12)]"
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-white">
                    {card.title}
                  </h3>
                  <p className="text-sm leading-7 text-white/72">{card.body}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--gold-bright)]">
                  {card.cta}
                  <span
                    aria-hidden
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
