import { useTranslations } from "next-intl";
import SectionWrapper from "@/components/ui/SectionWrapper";

export default function About() {
  const t = useTranslations("sections");
  const ta = useTranslations("about");

  return (
    <SectionWrapper id="about" title={t("about")}>
      <div className="flex flex-col sm:flex-row gap-10 items-start">
        {/* TODO: reemplaza con tu foto real en public/images/avatar.jpg */}
        <div className="w-28 h-28 shrink-0 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-400 text-sm">
          Foto
        </div>

        <div className="flex flex-col gap-4">
          <div>
            {/* TODO: reemplaza "alaurentius" con tu nombre real */}
            <h3 className="text-xl font-semibold text-zinc-900">alaurentius</h3>
            <p className="text-zinc-500">{ta("subtitle")}</p>
          </div>

          {/* TODO: añade tu bio real en messages/es.json > about.bio1, about.bio2 */}
          <p className="text-zinc-600 leading-relaxed">{ta("bio1")}</p>
          <p className="text-zinc-600 leading-relaxed">{ta("bio2")}</p>

          <div className="flex gap-4 mt-2">
            <a
              href="https://github.com/alaurentius"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 underline underline-offset-2"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/alaurentius"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 underline underline-offset-2"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
