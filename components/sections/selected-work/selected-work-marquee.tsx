"use client";

import { SelectedWorkTile } from "@/components/sections/selected-work/selected-work-tile";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { Project } from "@/types/projects";
import type { CSSProperties } from "react";

const TILE_SIZE =
  "w-[78vw] shrink-0 md:w-[26rem] lg:w-[32rem]";
const TILE_CLASS = `${TILE_SIZE} mr-grid`;

/** Viewport-centered track inset — half-tile subtracted from 50vw */
const TRACK_CENTER_PL =
  "pl-[calc(50vw-39vw)] md:pl-[calc(50vw-13rem)] lg:pl-[calc(50vw-16rem)]";
const TRACK_CENTER_PR =
  "pr-[calc(50vw-39vw)] md:pr-[calc(50vw-13rem)] lg:pr-[calc(50vw-16rem)]";
const TRACK_CENTER_PADDING = `${TRACK_CENTER_PL} ${TRACK_CENTER_PR}`;

/** Hold 1s, slide 0.5s per tile — maps time to marquee progress for `animate-swap`. */
function buildSwapEase(steps: number): string {
  if (steps <= 1) {
    return "linear";
  }

  const holdRatio = 2 / 3;
  const points: { p: number; t: number }[] = [{ p: 0, t: 0 }];

  for (let i = 0; i < steps; i++) {
    const t0 = i / steps;
    const t1 = (i + 1) / steps;
    const tSlide = t0 + holdRatio * (t1 - t0);
    const p0 = i / steps;
    const p1 = (i + 1) / steps;

    points.push({ p: p0, t: tSlide });
    points.push({ p: p1, t: t1 });
  }

  const parts = points.map(
    ({ p, t }) => `${p} ${(t * 100).toFixed(4)}%`,
  );
  return `linear(${parts.join(", ")})`;
}

type SelectedWorkMarqueeProps = {
  projects: Project[];
};

function MarqueeGroup({
  projects,
  duplicate,
}: {
  projects: Project[];
  duplicate?: boolean;
}) {
  return (
    <div
      className="flex shrink-0"
      aria-hidden={duplicate ? true : undefined}
      inert={duplicate ? true : undefined}
    >
      {projects.map((project, index) => (
        <SelectedWorkTile
          key={duplicate ? `dup-${project.slug}` : project.slug}
          project={project}
          index={index + 1}
          aspectClassName="aspect-video w-full"
          className={TILE_CLASS}
        />
      ))}
    </div>
  );
}

export function SelectedWorkMarquee({ projects }: SelectedWorkMarqueeProps) {
  const reduceMotion = usePrefersReducedMotion();
  const canSwap = projects.length >= 2;

  const swapStyle: CSSProperties | undefined = canSwap
    ? {
        "--swap-steps": projects.length,
        "--swap-ease": buildSwapEase(projects.length),
      } as CSSProperties
    : undefined;

  if (reduceMotion || !canSwap) {
    return (
      <div
        className="snap-x snap-mandatory overflow-x-auto overscroll-x-contain pb-2"
        tabIndex={0}
        aria-label="Selected work projects"
      >
        <div className={`flex w-max gap-grid ${TRACK_CENTER_PADDING}`}>
          {projects.map((project, index) => (
            <SelectedWorkTile
              key={project.slug}
              project={project}
              index={index + 1}
              aspectClassName="aspect-video w-full"
              className={`${TILE_SIZE} snap-center`}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="overflow-hidden" aria-label="Selected work projects">
      <div className={TRACK_CENTER_PL}>
        <div
          className="flex w-max animate-swap hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
          style={swapStyle}
        >
          <MarqueeGroup projects={projects} />
          <MarqueeGroup projects={projects} duplicate />
        </div>
      </div>
    </div>
  );
}
