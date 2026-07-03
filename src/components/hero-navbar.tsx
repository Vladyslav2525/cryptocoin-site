"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { SocialLinksRow } from "@/components/social-links-row";
import { SocialMenu } from "@/components/social-menu";
import { withBasePath } from "@/lib/asset-path";
import { useLocale, useTranslations } from "@/lib/language-context";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export function HeroNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { locale } = useLocale();
  const t = useTranslations();
  const headerShapeClass = isOpen ? "rounded-[1.75rem]" : "rounded-full";

  const ctaClassNames = {
    secondary:
      "rounded-full border border-white/10 bg-[rgba(255,255,255,0.06)] px-3 py-2.5 text-xs font-medium uppercase tracking-[0.1em] text-white/78 whitespace-nowrap transition hover:border-white/18 hover:bg-white/10 hover:text-white",
    primary:
      "rounded-full border border-emerald-400/45 bg-[linear-gradient(135deg,rgba(16,185,129,0.22),rgba(52,211,153,0.12))] px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.1em] text-emerald-100 whitespace-nowrap shadow-[0_0_20px_rgba(52,211,153,0.22)] transition duration-300 hover:border-emerald-300/65 hover:shadow-[0_0_32px_rgba(52,211,153,0.36)]",
  } as const;

  const mobileCtaClassNames = {
    secondary:
      "rounded-full border border-white/10 bg-[rgba(255,255,255,0.06)] px-4 py-3 text-center text-xs font-medium uppercase tracking-[0.14em] text-white/78 transition hover:border-white/18 hover:bg-white/10 hover:text-white",
    primary:
      "rounded-full border border-emerald-400/45 bg-[linear-gradient(135deg,rgba(16,185,129,0.22),rgba(52,211,153,0.12))] px-4 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-emerald-100 shadow-[0_0_20px_rgba(52,211,153,0.22)] transition duration-300 hover:border-emerald-300/65 hover:shadow-[0_0_32px_rgba(52,211,153,0.36)]",
  } as const;

  const navLinks = [
    { label: t.nav.philosophy, href: "#philosophy" },
    { label: t.nav.comparison, href: "#comparison" },
    { label: t.nav.growthCycle, href: "#growth-cycle" },
    { label: t.nav.faq, href: "#faq" },
  ];

  const ctaLinks: { label: string; href: string; variant: "secondary" | "primary" }[] = [
    { label: t.nav.buyToken, href: "/404", variant: "primary" },
  ];

  const logoElement = (
    <Image
      src={withBasePath("/logo.svg")}
      alt="AUREUM LINK logo"
      width={44}
      height={44}
      className="h-11 w-11 shrink-0"
      priority
    />
  );

  return (
    <header
      className={`fixed top-4 left-1/2 z-30 flex w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 flex-col border border-white/10 bg-[rgba(16,18,26,0.58)] px-4 py-3 shadow-[0_24px_70px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-[border-radius] duration-200 ease-in-out sm:w-[calc(100%-2rem)] sm:px-5 ${headerShapeClass}`}
    >
      <div className="flex items-center justify-between gap-x-3">
        <div className="flex shrink-0 items-center gap-3">
          {logoElement}
          <div className="hidden sm:block">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-white/74">
              AUREUM LINK
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.18em] text-white/42">
              premium rwa concept
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-1 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative inline-flex h-7 items-start overflow-hidden rounded-full px-2.5 text-xs font-medium uppercase tracking-[0.1em] whitespace-nowrap text-white/74 transition hover:bg-white/6"
            >
              <span className="flex h-14 flex-col transition-transform duration-300 ease-out group-hover:-translate-y-7">
                <span className="flex h-7 items-center text-white/74">
                  {link.label}
                </span>
                <span className="flex h-7 items-center text-white">
                  {link.label}
                </span>
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-1.5 xl:flex">
          <LanguageSwitcher />
          <SocialMenu triggerClassName={ctaClassNames.secondary} triggerLabel={t.nav.contact} />
          {ctaLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={ctaClassNames[link.variant]}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/74 transition hover:bg-white/6 hover:text-white xl:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          {isOpen ? (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18 18 6M6 6l12 12"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          ) : (
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6h16M4 12h16M4 18h16"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
          )}
        </button>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out xl:hidden ${
          isOpen ? "max-h-96 pt-4 opacity-100" : "pointer-events-none max-h-0 pt-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-4 border-t border-white/8 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-[0.12em] text-white/74 transition hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-1">
            <LanguageSwitcher />
          </div>
          <div className="mt-2 flex flex-col items-center gap-2">
            <SocialLinksRow />
          </div>
          <div className="mt-1 flex w-full flex-col gap-3">
            {ctaLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={mobileCtaClassNames[link.variant]}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}

