"use client";

import Image from "next/image";
import Link from "next/link";
import { withBasePath } from "@/lib/asset-path";
import { useTranslations } from "@/lib/language-context";
import { SocialLinksRow } from "@/components/social-links-row";
import { Disclaimer } from "@/components/disclaimer";

export function SiteFooter() {
  const t = useTranslations();

  const links = [
    { label: t.nav.philosophy, href: "/#philosophy" },
    { label: t.nav.howTreasuryGrows, href: "/#how-treasury-grows" },
    { label: t.nav.treasury, href: "/treasury" },
    { label: t.nav.token, href: "/token" },
    { label: t.nav.manifesto, href: "/manifesto" },
    { label: t.nav.faq, href: "/#faq" },
    { label: t.disclaimer.label, href: "/legal" },
  ];

  return (
    <footer id="site-footer" className="relative border-t border-white/8 py-12">
      <div className="section-shell">
        <div className="mx-auto flex max-w-6xl flex-col gap-8">
          <Disclaimer />

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.24em] text-white/72 transition hover:text-white"
            >
              <Image
                src={withBasePath("/logo.svg")}
                alt="AUREUM LINK logo"
                width={22}
                height={22}
                className="h-[22px] w-[22px] shrink-0"
              />
              AUREUM LINK
            </Link>

            <SocialLinksRow />
          </div>

          <div className="flex flex-wrap gap-2.5 border-t border-white/8 pt-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-white/68 transition hover:bg-white/6 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <p className="text-xs leading-6 text-white/40">
            © 2026 AUREUM LINK · {t.disclaimer.short}
          </p>
        </div>
      </div>
    </footer>
  );
}
