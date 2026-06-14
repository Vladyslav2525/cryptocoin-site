"use client";

import { useEffect, useMemo, useState } from "react";
import { HERO_PHRASES } from "@/lib/site-content";

const typingDelay = 92;
const deletingDelay = 42;
const phrasePause = 2800;

export function TypewriterHero() {
  const phrases = useMemo(() => HERO_PHRASES, []);
  const longestPhrase = useMemo(
    () =>
      phrases.reduce((longest, phrase) =>
        phrase.length > longest.length ? phrase : longest,
      ),
    [phrases],
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex] ?? "";

    if (!isDeleting && displayedText === currentPhrase) {
      const pauseTimeout = window.setTimeout(() => {
        setIsDeleting(true);
      }, phrasePause);

      return () => window.clearTimeout(pauseTimeout);
    }

    if (isDeleting && displayedText.length === 0) {
      const resetTimeout = window.setTimeout(() => {
        setIsDeleting(false);
        setPhraseIndex((current) => (current + 1) % phrases.length);
      }, 0);

      return () => window.clearTimeout(resetTimeout);
    }

    const timeout = window.setTimeout(
      () => {
        setDisplayedText((current) =>
          isDeleting
            ? current.slice(0, -1)
            : currentPhrase.slice(0, current.length + 1),
        );
      },
      isDeleting ? deletingDelay : typingDelay,
    );

    return () => window.clearTimeout(timeout);
  }, [displayedText, isDeleting, phraseIndex, phrases]);

  return (
    <div className="mx-auto grid w-full max-w-5xl text-center">
      <h1
        aria-hidden="true"
        className="pointer-events-none invisible row-start-1 col-start-1 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl"
      >
        {longestPhrase}
        <span className="ml-1 inline-block">|</span>
      </h1>
      <h1 className="headline-gradient row-start-1 col-start-1 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl">
        {displayedText}
        <span className="ml-1 inline-block animate-pulse text-white/90">|</span>
      </h1>
    </div>
  );
}
