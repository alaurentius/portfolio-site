import { useTranslations } from "next-intl";
import SectionWrapper from "@/components/ui/SectionWrapper";
import type { ExperienceItem } from "@/lib/experience";

export default function Experience({ items }: { items: ExperienceItem[] }) {
  const t = useTranslations("sections");

  return (
    <SectionWrapper id="experience" title={t("experience")}>
      <div className="flex flex-col gap-10">
        {items.map((item, index) => (
          <div key={index} className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <h3 className="font-semibold text-zinc-900">{item.role}</h3>
                <p className="text-sm text-zinc-500">{item.company}</p>
              </div>
              <span className="text-sm text-zinc-400 whitespace-nowrap">
                {item.startDate} — {item.endDate}
              </span>
            </div>
            <ul className="mt-2 flex flex-col gap-1 pl-4">
              {item.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-zinc-600 list-disc">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
