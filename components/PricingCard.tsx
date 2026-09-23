export type Tier = {
  name: string;
  price: string;
  unit?: string;
  description: string;
  features: string[];
  highlight?: boolean;
};

export default function PricingCard({ tier }: { tier: Tier }) {
  return (
    <div
      className={`flex flex-col border p-6 md:p-8 bg-raised ${
        tier.highlight ? "border-orange" : "border-line"
      }`}
    >
      <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-orange">
        {tier.name}
      </span>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="font-display font-medium text-4xl text-fg">
          {tier.price}
        </span>
        {tier.unit && (
          <span className="font-mono text-xs text-fg-muted">{tier.unit}</span>
        )}
      </div>
      <p className="mt-3 text-sm text-fg-muted leading-relaxed">
        {tier.description}
      </p>
      <ul className="mt-6 space-y-3 flex-1">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-fg-muted leading-relaxed"
          >
            <span className="text-orange mt-0.5">✶</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
