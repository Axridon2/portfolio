export default function SectionHeading({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-4">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-orange">
          {number}
        </span>
        <div className="ticked-line flex-1 max-w-16" />
      </div>
      <h2 className="font-display font-medium text-3xl md:text-5xl text-fg">
        {title}
      </h2>
    </div>
  );
}
