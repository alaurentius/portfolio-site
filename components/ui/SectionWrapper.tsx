interface SectionWrapperProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ id, title, children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      data-testid={`section-${id}`}
      className="py-20 scroll-mt-16"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-zinc-900 mb-10">{title}</h2>
        {children}
      </div>
    </section>
  );
}
