import { notFound } from "next/navigation";
import { getProject, getProjects } from "@/lib/projects";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-2xl px-6 py-10">
      <h1 className="mb-2 text-3xl font-semibold tracking-tight">
        {project.title}
      </h1>
      <p className="mb-4 text-gray-600">
        {project.location}
      </p>
      <p className="leading-relaxed text-gray-800">{project.description}</p>
    </main>
  );
}
