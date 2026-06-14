"use client";

import { useEffect, useMemo, useState } from "react";
import { HERO_PHRASES } from "@/lib/site-content";

const typingDelay = 108;
const phrasePause = 3600;
const phraseSwitchDelay = 260;

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
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex] ?? "";

    if (displayedText === currentPhrase && !isSwitching) {
      const pauseTimeout = window.setTimeout(() => {
        setIsSwitching(true);
      }, phrasePause);

      return () => window.clearTimeout(pauseTimeout);
    }

    if (isSwitching) {
      const switchTimeout = window.setTimeout(() => {
        setDisplayedText("");
        setPhraseIndex((current) => (current + 1) % phrases.length);
        setIsSwitching(false);
      }, phraseSwitchDelay);

      return () => window.clearTimeout(switchTimeout);
    }

    const timeout = window.setTimeout(
      () => {
        setDisplayedText((current) => currentPhrase.slice(0, current.length + 1));
      },
      typingDelay,
    );

    return () => window.clearTimeout(timeout);
  }, [displayedText, isSwitching, phraseIndex, phrases]);

  return (
    <div className="mx-auto grid w-full max-w-5xl text-center">
      <h1
        aria-hidden="true"
        className="pointer-events-none invisible row-start-1 col-start-1 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-6xl xl:text-7xl"
      >
        {longestPhrase}
        <span className="ml-1 inline-block">|</span>
      </h1>
      <h1
        className={`headline-gradient row-start-1 col-start-1 text-4xl font-semibold leading-[1.05] tracking-[-0.045em] transition-opacity duration-300 sm:text-5xl lg:text-6xl xl:text-7xl ${
          isSwitching ? "opacity-0" : "opacity-100"
        }`}
      >
        {displayedText}
        <span className="ml-1 inline-block animate-pulse text-white/90">|</span>
      </h1>
    </div>
  );
}
