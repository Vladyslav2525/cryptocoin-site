"use client";

import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "@/lib/language-context";

const phraseDuration = 3800; // how long each phrase is visible
const fadeOutDuration = 700; // ms, must match CSS transition

export function TypewriterHero() {
  const t = useTranslations();
  const phrases = t.hero.phrases as readonly string[];

  const longestPhrase = useMemo(
    () =>
      [...phrases].reduce((longest, phrase) =>
        phrase.length > longest.length ? phrase : longest,
      ),
    [phrases],
  );
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  // Reset index when language changes
  useEffect(() => {
    setPhraseIndex(0);
    setVisible(true);
  }, [phrases]);

  useEffect(() => {
    const showTimer = window.setTimeout(() => {
      setVisible(false);
    }, phraseDuration);

    return () => window.clearTimeout(showTimer);
  }, [phraseIndex, phrases]);

  useEffect(() => {
    if (visible) return;

    const switchTimer = window.setTimeout(() => {
      setPhraseIndex((current) => (current + 1) % phrases.length);
      setVisible(true);
    }, fadeOutDuration);

    return () => window.clearTimeout(switchTimer);
  }, [visible, phrases]);

  return (
    <div className="mx-auto grid w-full max-w-5xl text-center">
      {/* Ghost element to reserve height */}
      <h1
        aria-hidden="true"
        className="pointer-events-none invisible row-start-1 col-start-1 text-3xl font-semibold leading-[1.15] tracking-[-0.045em] sm:text-4xl lg:text-5xl xl:text-6xl"
      >
        {longestPhrase}
      </h1>
      <h1
        className={`headline-gradient row-start-1 col-start-1 text-3xl font-semibold leading-[1.15] tracking-[-0.045em] transition-opacity duration-700 sm:text-4xl lg:text-5xl xl:text-6xl ${
          visible ? "opacity-100" : "opacity-0"
        }`}
      >
        {phrases[phraseIndex]}
      </h1>
    </div>
  );
}

