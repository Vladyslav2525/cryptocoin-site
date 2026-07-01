"use client";

import { useTranslations } from "@/lib/language-context";
import { withBasePath } from "@/lib/asset-path";
import Image from "next/image";
import Link from "next/link";

export function SupportSections() {
  const t = useTranslations();

  const footerLinkClassNames = {
    ghost:
      "rounded-full border border-white/10 px-4 py-2 text-sm text-white/68 transition hover:bg-white/6 hover:text-white",
    secondary:
      "rounded-full border border-white/10 bg-[rgba(255,255,255,0.06)] px-4 py-2 text-sm font-medium text-white/78 transition hover:border-white/18 hover:bg-white/10 hover:text-white",
    primary:
      "rounded-full border border-emerald-400/45 bg-[linear-gradient(135deg,rgba(16,185,129,0.22),rgba(52,211,153,0.12))] px-4 py-2 text-sm font-semibold text-emerald-100 shadow-[0_0_20px_rgba(52,211,153,0.22)] transition duration-300 hover:border-emerald-300/65 hover:shadow-[0_0_32px_rgba(52,211,153,0.36)]",
  } as const;

  const navLinks = [
    { label: t.nav.philosophy, href: "#philosophy", variant: "ghost" as const },
    { label: t.nav.growthCycle, href: "#growth-cycle", variant: "ghost" as const },
    { label: t.nav.faq, href: "#faq", variant: "ghost" as const },
  ];

  const ctaLinks = [
    { label: t.nav.contact, href: "/404", variant: "secondary" as const },
    { label: t.nav.buyToken, href: "/404", variant: "primary" as const },
  ];

  const footerLinks = [...navLinks, ...ctaLinks];

  return (
    <>
      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="section-shell">
          <div className="mx-auto max-w-6xl">
            <span className="section-kicker">{t.trust.kicker}</span>
            <div className="mb-10 max-w-4xl space-y-5">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {t.trust.title}
              </h2>
              <p className="text-base leading-7 text-[var(--muted-foreground)] sm:text-lg sm:leading-8">
                {t.trust.description}
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {t.trust.panels.map((panel) => (
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
            <span className="section-kicker">{t.roadmap.kicker}</span>
            <div className="mb-10 max-w-4xl space-y-5">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {t.roadmap.title}
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-4">
              {t.roadmap.steps.map((step, index) => (
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
            <span className="section-kicker">{t.faq.kicker}</span>
            <div className="mb-10 max-w-4xl space-y-5">
              <h2 className="text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">
                {t.faq.title}
              </h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-2">
              {t.faq.items.map((item) => (
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

      <footer id="site-footer" className="relative border-t border-white/8 py-10">
        <div className="section-shell">
          <div className="mx-auto flex max-w-6xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/72">
                <Image
                  src={withBasePath("/logo.svg")}
                  alt="AUREUM LINK logo"
                  width={22}
                  height={22}
                  className="h-[22px] w-[22px] shrink-0"
                />
                AUREUM LINK
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href + link.label}
                  href={link.href}
                  className={footerLinkClassNames[link.variant]}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

