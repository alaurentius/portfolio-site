export interface SkillCategory {
  category: string;
  skills: string[];
}

// TODO: reemplaza con tus habilidades reales en ambos locales
const skillsEs: SkillCategory[] = [
  {
    category: "Testing",
    skills: ["Playwright", "Jest", "Cypress", "Postman", "Selenium"],
  },
  {
    category: "Lenguajes",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Herramientas",
    skills: ["Git", "GitHub", "VS Code", "Jira", "Confluence"],
  },
  {
    category: "DevOps",
    skills: ["GitHub Actions", "Docker", "Linux", "CI/CD"],
  },
];

const skillsEn: SkillCategory[] = [
  {
    category: "Testing",
    skills: ["Playwright", "Jest", "Cypress", "Postman", "Selenium"],
  },
  {
    category: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    category: "Tools",
    skills: ["Git", "GitHub", "VS Code", "Jira", "Confluence"],
  },
  {
    category: "DevOps",
    skills: ["GitHub Actions", "Docker", "Linux", "CI/CD"],
  },
];

export function getSkills(locale: string): SkillCategory[] {
  return locale === "en" ? skillsEn : skillsEs;
}
