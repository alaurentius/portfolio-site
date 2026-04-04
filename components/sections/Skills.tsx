import { useTranslations } from "next-intl";
import SectionWrapper from "@/components/ui/SectionWrapper";
import SkillBadge from "@/components/ui/SkillBadge";
import type { SkillCategory } from "@/lib/skills";

export default function Skills({ categories }: { categories: SkillCategory[] }) {
  const t = useTranslations("sections");

  return (
    <SectionWrapper id="skills" title={t("skills")}>
      <div className="flex flex-col gap-8">
        {categories.map((group) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-zinc-400">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <SkillBadge key={skill} skill={skill} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
