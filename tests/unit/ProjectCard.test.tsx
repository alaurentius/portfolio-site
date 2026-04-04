import { render, screen } from "@testing-library/react";
import ProjectCard from "@/components/ui/ProjectCard";
import type { Project } from "@/lib/projects";

const baseProject: Project = {
  slug: "test-project",
  title: "Test Project",
  description: "A test project description.",
  tags: ["TypeScript", "Jest"],
  repoUrl: "https://github.com/alaurentius/test-project",
  demoUrl: "",
  featured: true,
  order: 1,
};

describe("ProjectCard", () => {
  it("renders the project title", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
  });

  it("renders the project description", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText("A test project description.")).toBeInTheDocument();
  });

  it("renders the repo link with correct href", () => {
    render(<ProjectCard project={baseProject} />);
    const link = screen.getByTestId("project-card-repo-link");
    expect(link).toHaveAttribute("href", "https://github.com/alaurentius/test-project");
  });

  it("does not render demo link when demoUrl is empty", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.queryByTestId("project-card-demo-link")).not.toBeInTheDocument();
  });

  it("renders demo link when demoUrl is provided", () => {
    const project = { ...baseProject, demoUrl: "https://demo.example.com" };
    render(<ProjectCard project={project} />);
    const link = screen.getByTestId("project-card-demo-link");
    expect(link).toHaveAttribute("href", "https://demo.example.com");
  });

  it("renders all tags", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
    expect(screen.getByText("Jest")).toBeInTheDocument();
  });

  it("has data-testid attribute", () => {
    render(<ProjectCard project={baseProject} />);
    expect(screen.getByTestId("project-card")).toBeInTheDocument();
  });
});
