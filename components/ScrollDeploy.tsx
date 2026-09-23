"use client";
import { useEffect, useRef, useState } from "react";

const STEPS = [
  {
    tag: "STEP 01",
    title: "Intake",
    body: "Ticket lands in ServiceNow. Triage severity, reproduce the fault, identify the affected system — endpoint, identity, or network.",
    cmd: "$ servicenow ticket --next --triage",
    out: "INC00412 · P2 · outlook-signin-fail · assigned",
  },
  {
    tag: "STEP 02",
    title: "Diagnose",
    body: "Work the stack: Autopilot enrolment logs, Intune compliance policy, Entra sign-in logs, AD account state. Evidence before fixes.",
    cmd: "$ intune compliance --check --device DLT-4471",
    out: "policy: baseline-v3 · compliant · last check-in 3m ago",
  },
  {
    tag: "STEP 03",
    title: "Fix",
    body: "Apply the fix — device rebuild, policy change, licence or mailbox correction — and verify with the user directly. Same-day resolution is the standard.",
    cmd: "$ entra user --reset-mfa --apply",
    out: "MFA methods re-registered · sign-in restored ✓",
  },
  {
    tag: "STEP 04",
    title: "Document",
    body: "Every fix ends in documentation: root cause, resolution steps, KB article if it recurs. The next engineer inherits a trail, not a mystery.",
    cmd: "$ kb publish --from INC00412",
    out: "KB-118 written · linked to 3 past incidents ✓",
  },
];

export default function ScrollDeploy() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0); // 0..1

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -rect.top / total));
      setProgress(p);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    if (!reduce) window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const activeIndex = Math.min(
    STEPS.length - 1,
    Math.floor(progress * STEPS.length)
  );
  const lines = STEPS.slice(0, activeIndex + 1);

  return (
    <section className="border-y border-line bg-bg" ref={sectionRef} style={{ height: "300vh" }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="mx-auto max-w-6xl w-full px-6 md:px-10 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Terminal panel */}
          <div className="border border-line bg-raised">
            <div className="flex items-center justify-between border-b border-raised-line px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-fg-muted/30"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-fg-muted/30"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-orange"></span>
              </div>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
                SANDBOX — TICKET LIFECYCLE
              </span>
              <span className="font-mono text-[11px] text-orange">✶</span>
            </div>
            <div className="p-6 md:p-8 font-mono text-sm leading-relaxed h-[320px] overflow-hidden">
              <pre className="whitespace-pre-wrap text-fg-muted">
                {lines.map((s) => (
                  <span key={s.tag}>
                    <span className="text-orange">{s.cmd}</span>
                    {"\n"}
                    {s.out}
                    {"\n\n"}
                  </span>
                ))}
                <span className="animate-blink text-fg">▌</span>
              </pre>
              <div className="text-fg-muted">
                [
                <span className="text-orange">
                  {"%".repeat(Math.round(progress * 18))}
                </span>
                {"_".repeat(18 - Math.round(progress * 18))}
                ] {Math.round(progress * 100)}%
              </div>
            </div>
          </div>

          {/* Steps */}
          <div className="space-y-6">
            {STEPS.map((s, i) => (
              <div
                key={s.tag}
                className={`border-l-2 pl-4 py-1 transition-all duration-300 ${
                  i === activeIndex
                    ? "border-orange opacity-100"
                    : "border-line opacity-40"
                }`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-orange">
                  {s.tag}
                </div>
                <h3 className="text-xl font-display font-medium text-fg mt-1">
                  {s.title}
                </h3>
                <p className="text-fg-muted text-sm mt-2 leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
