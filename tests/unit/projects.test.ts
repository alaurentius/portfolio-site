import fs from "fs";
import path from "path";
import { getAllProjects } from "@/lib/projects";

const PROJECTS_DIR = path.join(process.cwd(), "content", "projects");

describe("getAllProjects()", () => {
  it("returns an array", () => {
    const projects = getAllProjects();
    expect(Array.isArray(projects)).toBe(true);
  });

  it("returns at least one project", () => {
    const projects = getAllProjects();
    expect(projects.length).toBeGreaterThan(0);
  });

  it("sorts projects by order field ascending", () => {
    const projects = getAllProjects();
    for (let i = 1; i < projects.length; i++) {
      expect(projects[i].order).toBeGreaterThanOrEqual(projects[i - 1].order);
    }
  });

  it("each project has required fields", () => {
    const projects = getAllProjects();
    for (const project of projects) {
      expect(typeof project.slug).toBe("string");
      expect(typeof project.title).toBe("string");
      expect(typeof project.description).toBe("string");
      expect(Array.isArray(project.tags)).toBe(true);
      expect(typeof project.repoUrl).toBe("string");
      expect(typeof project.demoUrl).toBe("string");
      expect(typeof project.featured).toBe("boolean");
      expect(typeof project.order).toBe("number");
    }
  });

  it("returns empty array when directory does not exist", () => {
    const original = fs.existsSync;
    jest.spyOn(fs, "existsSync").mockReturnValueOnce(false);
    const projects = getAllProjects();
    expect(projects).toEqual([]);
    jest.spyOn(fs, "existsSync").mockImplementation(original);
  });
});
