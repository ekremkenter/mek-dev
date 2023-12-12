interface SectionTitleProps {
  title: string;
  subtitle?: string;
}
export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      <p className="mt-2 text-lg leading-8">{subtitle}</p>
    </div>
  );
}
