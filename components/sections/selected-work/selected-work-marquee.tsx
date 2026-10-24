"use client";

import { SelectedWorkTile } from "@/components/sections/selected-work/selected-work-tile";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import type { Project } from "@/types/projects";

const TILE_CLASS =
  "w-[78vw] shrink-0 md:w-[26rem] lg:w-[32rem]";

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
      className="flex shrink-0 gap-grid pr-grid pl-gutter"
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

  if (reduceMotion) {
    return (
      <div
        className="overflow-x-auto overscroll-x-contain pb-2"
        tabIndex={0}
        aria-label="Selected work projects"
      >
        <div className="flex w-max gap-grid px-gutter">
          {projects.map((project, index) => (
            <SelectedWorkTile
              key={project.slug}
              project={project}
              index={index + 1}
              aspectClassName="aspect-video w-full"
              className={TILE_CLASS}
            />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="overflow-hidden"
      aria-label="Selected work projects"
    >
      <div
        className="flex w-max animate-marquee hover:[animation-play-state:paused] focus-within:[animation-play-state:paused]"
      >
        <MarqueeGroup projects={projects} />
        <MarqueeGroup projects={projects} duplicate />
      </div>
    </div>
  );
}
