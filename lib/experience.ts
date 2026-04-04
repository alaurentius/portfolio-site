export interface ExperienceItem {
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

// TODO: reemplaza con tu experiencia laboral real en ambos locales
const experienceEs: ExperienceItem[] = [
  {
    company: "Lorem Ipsum Corp",
    role: "QA Engineer / SDET",
    startDate: "Ene 2023",
    endDate: "Presente",
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
    ],
  },
  {
    company: "Dolor Sit Amet S.L.",
    role: "QA Analyst",
    startDate: "Mar 2021",
    endDate: "Dic 2022",
    bullets: [
      "Excepteur sint occaecat cupidatat non proident.",
      "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    ],
  },
];

const experienceEn: ExperienceItem[] = [
  {
    company: "Lorem Ipsum Corp",
    role: "QA Engineer / SDET",
    startDate: "Jan 2023",
    endDate: "Present",
    bullets: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      "Duis aute irure dolor in reprehenderit in voluptate velit.",
    ],
  },
  {
    company: "Dolor Sit Amet S.L.",
    role: "QA Analyst",
    startDate: "Mar 2021",
    endDate: "Dec 2022",
    bullets: [
      "Excepteur sint occaecat cupidatat non proident.",
      "Sunt in culpa qui officia deserunt mollit anim id est laborum.",
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem.",
    ],
  },
];

export function getExperience(locale: string): ExperienceItem[] {
  return locale === "en" ? experienceEn : experienceEs;
}
