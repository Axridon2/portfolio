export default function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="flex items-baseline gap-4 md:gap-6 mb-12">
      <span className="font-mono text-sm text-brass tracking-[0.2em]">
        {number}
      </span>
      <h2 className="font-serif text-3xl md:text-5xl text-paper">{title}</h2>
      <div className="hidden md:block flex-1 h-px bg-line" />
    </div>
  );
}
