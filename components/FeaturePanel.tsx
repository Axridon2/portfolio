export type Feature = {
  tag: string;
  title: string;
  blurb: string;
};

export default function FeaturePanel({ feature }: { feature: Feature }) {
  return (
    <div className="border border-line bg-raised p-6 md:p-8">
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">
        {feature.tag}
      </span>
      <h3 className="mt-4 font-display font-medium text-2xl text-fg">
        {feature.title}
      </h3>
      <p className="mt-3 text-sm text-fg-muted leading-relaxed">
        {feature.blurb}
      </p>
    </div>
  );
}
