import Link from "next/link";

import { SelectedWorkMarquee } from "@/components/sections/selected-work/selected-work-marquee";
import { getSelectedProjects } from "@/lib/projects";

const FILTER_LABELS = ["All", "Residential", "Hospitality"] as const;

export async function SelectedWork() {
  const projects = await getSelectedProjects();
  const countLabel = String(projects.length).padStart(2, "0");

  return (
    <section aria-labelledby="selected-work-heading" className="py-section">
      <div className="container-page space-y-12 md:space-y-16 lg:space-y-20">
        <header className="space-y-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
            <h2
              id="selected-work-heading"
              className="font-heading text-h3 text-foreground text-balance"
            >
              Selected work
            </h2>
            <p className="type-label text-muted-foreground">({countLabel})</p>
          </div>
          <p className="type-label text-muted-foreground" aria-hidden>
            {FILTER_LABELS.map((label, i) => (
              <span key={label}>
                {i > 0 ? " · " : null}
                <span className={label === "All" ? "text-foreground" : undefined}>
                  {label}
                </span>
              </span>
            ))}
          </p>
        </header>
      </div>

      <div className="-mx-gutter mt-8 md:mt-10 lg:mt-12">
        <SelectedWorkMarquee projects={projects} />
      </div>

      <div className="container-page flex justify-end pt-8 md:pt-10">
        <Link href="/projects" className="type-label text-foreground link-underline">
          All projects →
        </Link>
      </div>
    </section>
  );
}
