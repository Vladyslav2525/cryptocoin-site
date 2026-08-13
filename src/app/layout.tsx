import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { DottedSurface } from "@/components/dotted-surface";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// The public address changes with the host (GitHub Pages → Cloudflare Pages → own
// domain), and it is baked into every Open Graph URL at build time. Keeping it in one
// env var means a move is a build setting, not a code edit.
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.trim() || "https://aureum-link.com/";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "AUREUM LINK | A public, verifiable treasury of real assets",
  description:
    "AUREUM LINK is a project with a public, verifiable treasury of real assets, starting with a gold bar on a live stream. Not an investment product — no promises, only what you can verify.",
  openGraph: {
    title: "AUREUM LINK | A public, verifiable treasury of real assets",
    description:
      "A project with a public, verifiable treasury of real assets — radical transparency, a live stream, and documents. The token is not an investment product and promises no profit.",
    type: "website",
    images: ["/logo-512.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)]">
        <div className="bg-aurora" aria-hidden="true" />
        <Providers>
          <DottedSurface className="opacity-65" />
          <div className="pointer-events-none fixed inset-0 z-[-5] bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_26%),linear-gradient(180deg,rgba(4,5,11,0.2),rgba(4,5,11,0.92)_70%,rgba(4,5,11,1))]" />
          {children}
        </Providers>
      </body>
    </html>
  );
}
