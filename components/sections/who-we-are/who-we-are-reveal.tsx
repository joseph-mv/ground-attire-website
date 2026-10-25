"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import type { HomeContent } from "@/types/home";

type WhoWeAreRevealProps = {
  content: HomeContent["whoWeAre"];
};

const revealBase =
  "motion-reduce:translate-y-0 motion-reduce:opacity-100 motion-reduce:transition-none transition-[opacity,transform] duration-600 ease-out";
const hidden = "translate-y-5 opacity-0";
const visible = "translate-y-0 opacity-100";

function revealClass(inView: boolean, delayMs: number): string {
  return [
    revealBase,
    inView ? visible : hidden,
    delayMs === 0 ? "delay-0" : delayMs === 100 ? "delay-100" : delayMs === 200 ? "delay-200" : "delay-300",
  ].join(" ");
}

export function WhoWeAreReveal({ content }: WhoWeAreRevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-10% 0px -10% 0px", threshold: 0.15 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className="flex flex-col">
      <div className={revealClass(inView, 0)}>
        <h2
          id="who-we-are-heading"
          className="type-label text-muted-foreground"
        >
          {content.eyebrow}
        </h2>
        <div
          className="mt-3 h-px w-8 bg-primary"
          aria-hidden
        />
      </div>

      <figure className={`mt-8 md:mt-10 ${revealClass(inView, 100)}`}>
        <blockquote className="font-newsreader text-xl! leading-[1.45] text-foreground lg:text-[2.125rem]">
          &ldquo;{content.quote}&rdquo;
        </blockquote>
      </figure>

      <div className={`mt-8 max-w-[26rem] space-y-4 md:mt-10 ${revealClass(inView, 200)}`}>
        {content.paragraphs.map((paragraph) => (
          <p key={paragraph} className="text-body text-muted-foreground md:text-body-lg">
            {paragraph}
          </p>
        ))}
        <p className="text-body text-foreground md:text-body-lg">{content.signOff}</p>
      </div>

      <div className={revealClass(inView, 300)}>
        <hr className="mt-10 border-0 bg-border h-px w-full md:mt-12" />

        {/* <dl className="mt-8 grid grid-cols-3 gap-4 md:mt-10">
          {content.stats.map((stat) => (
            <div key={stat.label}>
              <dd className="text-[1.75rem] font-medium tabular-nums text-foreground lg:text-[2.5rem]">
                {stat.value}
              </dd>
              <dt className="type-label mt-1 text-muted-foreground">{stat.label}</dt>
            </div>
          ))}
        </dl> */}

        <Link
          href={content.teamLink.href}
          className="type-label mt-8 inline-block text-foreground link-underline transition-colors hover:text-primary md:mt-10"
        >
          {content.teamLink.label}
        </Link>
      </div>
    </div>
  );
}
