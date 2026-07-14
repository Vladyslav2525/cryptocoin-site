"use client";

import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { withBasePath } from "@/lib/asset-path";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SiteFooter } from "@/components/site-footer";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/8 bg-[rgba(6,8,14,0.72)] backdrop-blur-xl">
        <div className="section-shell flex h-16 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/78 transition hover:text-white"
          >
            <Image
              src={withBasePath("/logo.svg")}
              alt="AUREUM LINK logo"
              width={32}
              height={32}
              className="h-8 w-8 shrink-0"
              priority
            />
            <span className="hidden sm:inline">AUREUM LINK</span>
          </Link>
          <LanguageSwitcher />
        </div>
      </header>

      <main className="relative z-10 isolate overflow-hidden">{children}</main>

      <SiteFooter />
    </>
  );
}
