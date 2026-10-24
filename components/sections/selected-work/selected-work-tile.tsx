import Image from "next/image";
import Link from "next/link";

import type { Project, ProjectCategory } from "@/types/projects";

function formatCategory(category: ProjectCategory): string {
  return category === "residential" ? "Residential" : "Hospitality";
}

function projectMeta(project: Project): string {
  const parts = [formatCategory(project.category), project.location];
  if (project.year) {
    parts.push(project.year);
  }
  return parts.join(" · ");
}

type SelectedWorkTileProps = {
  project: Project;
  index: number;
  aspectClassName: string;
  imageClassName?: string;
  className?: string;
};

export function SelectedWorkTile({
  project,
  index,
  aspectClassName,
  imageClassName,
  className,
}: SelectedWorkTileProps) {
  const indexLabel = String(index).padStart(2, "0");

  return (
    <article className={className}>
      <Link
        href={`/projects/${project.slug}`}
        className="group block focus-visible:outline-none"
      >
        <div
          className={`border-border relative overflow-hidden border bg-muted ${aspectClassName} ${imageClassName ?? ""}`}
        >
          <Image
            src={project.image.src}
            alt={project.image.alt}
            fill
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
            sizes="(min-width: 64rem) 32rem, (min-width: 48rem) 26rem, 78vw"
          />
        </div>
        <div className="mt-4 md:mt-5">
          <p className="font-heading text-h4 text-foreground">
            {indexLabel} / {project.title}
          </p>
          <p className="type-label text-muted-foreground mt-2">{projectMeta(project)}</p>
        </div>
      </Link>
    </article>
  );
}
