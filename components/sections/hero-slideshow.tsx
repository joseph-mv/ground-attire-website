"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

const INTERVAL_MS = 5000;

type HeroSlide = {
  src: string;
  alt: string;
};

type HeroSlideshowProps = {
  images: HeroSlide[];
};

export function HeroSlideshow({ images }: HeroSlideshowProps) {
  const reduceMotion = usePrefersReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const count = images.length;
  const canAdvance = count > 1 && !reduceMotion;

  const goTo = useCallback(
    (index: number) => {
      setActiveIndex(index % count);
    },
    [count],
  );

  useEffect(() => {
    if (!canAdvance) {
      return;
    }

    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % count);
    }, INTERVAL_MS);

    return () => window.clearInterval(id);
  }, [canAdvance, count]);

  useEffect(() => {
    if (reduceMotion) {
      setActiveIndex(0);
    }
  }, [reduceMotion]);

  return (
    <div className="relative">
      <div
        className="relative h-[90svh] w-full overflow-hidden"
        aria-live={canAdvance ? "polite" : undefined}
        aria-atomic="true"
      >
        {images.map((image, index) => {
          const isActive = index === activeIndex;

          return (
            <Image
              key={image.src}
              src={image.src}
              alt={image.alt}
              fill
              priority={index === 0}
              sizes="100vw"
              aria-hidden={!isActive}
              className={`object-cover ${
                reduceMotion ? "" : "transition-opacity duration-700"
              } pointer-events-none ${isActive ? "z-10 opacity-100" : "z-0 opacity-0"}`}
            />
          );
        })}
      </div>

      {count > 1 ? (
        <div
          className="absolute inset-x-0 bottom-4 z-20 flex justify-center gap-2"
          role="group"
          aria-label="Choose hero image"
        >
          {images.map((image, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={image.src}
                type="button"
                aria-label={`Show image ${index + 1}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => goTo(index)}
                className="size-2.5 rounded-full border border-[var(--ga-linen)]/80 bg-[var(--ga-linen)]/30 transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 data-[active=true]:bg-[var(--ga-linen)]"
                data-active={isActive ? "true" : undefined}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
