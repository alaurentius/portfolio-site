import { setRequestLocale } from "next-intl/server";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import { getAllProjects } from "@/lib/projects";
import { getExperience } from "@/lib/experience";
import { getSkills } from "@/lib/skills";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const projects = getAllProjects();
  const experienceItems = getExperience(locale);
  const skillCategories = getSkills(locale);

  return (
    <>
      <About />
      <Experience items={experienceItems} />
      <Projects projects={projects} />
      <Skills categories={skillCategories} />
      <Contact />
    </>
  );
}
