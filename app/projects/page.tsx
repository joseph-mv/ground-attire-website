import Link from "next/link";
import { getProjects } from "@/lib/projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="mb-6 text-3xl font-semibold tracking-tight">Projects</h1>
      <ul className="space-y-3">
        {projects.map((project) => (
          <li key={project.slug}>
            <Link
              href={`/projects/${project.slug}`}
              className="text-lg text-blue-600 underline-offset-2 hover:underline"
            >
              {project.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
