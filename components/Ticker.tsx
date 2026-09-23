const DEFAULT_ITEMS = [
  "IT SUPPORT",
  "M365",
  "INTUNE",
  "ACTIVE DIRECTORY",
  "PROXMOX",
  "SECURITY",
  "SERVICENOW",
  "AUTOPILOT",
  "AZURE AD",
  "LINUX",
];

export default function Ticker({ items = DEFAULT_ITEMS }: { items?: string[] }) {
  return (
    <div className="border-y border-line py-4 overflow-hidden edge-fade">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center shrink-0">
            {items.map((item, i) => (
              <span
                key={`${copy}-${i}`}
                className="flex items-center font-mono text-xs uppercase tracking-[0.2em] text-fg-muted whitespace-nowrap"
              >
                {item}
                <span className="text-orange mx-6">✶</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
