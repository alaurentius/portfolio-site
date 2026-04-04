import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article
      data-testid="project-card"
      data-testid-slug={`project-card-${project.slug}`}
      className="flex flex-col gap-4 rounded-lg border border-zinc-200 p-6 hover:border-zinc-400 transition-colors"
    >
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold text-zinc-900">{project.title}</h3>
        <p className="text-sm text-zinc-600 leading-relaxed">{project.description}</p>
      </div>

      {project.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="flex gap-4 mt-auto pt-2">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="project-card-repo-link"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 underline underline-offset-2"
          >
            Repositorio
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="project-card-demo-link"
            className="text-sm font-medium text-zinc-700 hover:text-zinc-900 underline underline-offset-2"
          >
            Demo
          </a>
        )}
      </div>
    </article>
  );
}
