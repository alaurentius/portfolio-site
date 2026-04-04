import fs from "fs";
import path from "path";
import matter from "gray-matter";

export interface Project {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  repoUrl: string;
  demoUrl: string;
  featured: boolean;
  order: number;
}

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

export function getAllProjects(): Project[] {
  if (!fs.existsSync(PROJECTS_DIR)) {
    return [];
  }

  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".md"));

  const projects = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(PROJECTS_DIR, filename), "utf-8");
    const { data } = matter(raw);

    return {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      tags: data.tags ?? [],
      repoUrl: data.repoUrl ?? "",
      demoUrl: data.demoUrl ?? "",
      featured: data.featured ?? false,
      order: data.order ?? 99,
    } satisfies Project;
  });

  return projects.sort((a, b) => a.order - b.order);
}
