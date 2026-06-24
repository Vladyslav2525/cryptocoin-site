"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/lib/language-context";

type ProvidersProps = {
  children: ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  );
}
