import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AUREUM LINK | Real-world value in motion",
  description:
    "Premium landing page for a real-world asset crypto concept built around live transparency, physical backing, and a long-term value cycle.",
  openGraph: {
    title: "AUREUM LINK | Real-world value in motion",
    description:
      "A premium crypto landing page concept focused on physical backing, live transparency, and a closed-loop value model.",
    type: "website",
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
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
