import { setRequestLocale } from "next-intl/server";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      <section id="about" data-testid="section-about" className="py-16">
        <h2 className="text-2xl font-bold mb-4">Sobre mí</h2>
        <p className="text-zinc-600">Próximamente — Fase 3.</p>
      </section>
      <section id="experience" data-testid="section-experience" className="py-16">
        <h2 className="text-2xl font-bold mb-4">Experiencia</h2>
        <p className="text-zinc-600">Próximamente — Fase 3.</p>
      </section>
      <section id="projects" data-testid="section-projects" className="py-16">
        <h2 className="text-2xl font-bold mb-4">Proyectos</h2>
        <p className="text-zinc-600">Próximamente — Fase 3.</p>
      </section>
      <section id="skills" data-testid="section-skills" className="py-16">
        <h2 className="text-2xl font-bold mb-4">Habilidades</h2>
        <p className="text-zinc-600">Próximamente — Fase 3.</p>
      </section>
      <section id="contact" data-testid="section-contact" className="py-16">
        <h2 className="text-2xl font-bold mb-4">Contacto</h2>
        <p className="text-zinc-600">Próximamente — Fase 5.</p>
      </section>
    </div>
  );
}
