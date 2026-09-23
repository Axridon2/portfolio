"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const BOOT_LINES = [
  { prompt: "whoami", output: "adnane-serroukh" },
  {
    prompt: "skills --list",
    output: "it-support · m365 · intune · active-directory · proxmox · security",
  },
  { prompt: "uptime", output: "up 4y 0d — posture: nominal" },
];

const BRAILLE_CHARS =
  "⠁⠂⠄⡀⢀⠠⠐⠈⠃⠅⠘⠨⠰⣀⡁⠑⠡⠣⠩⠫⠹⠽⡿⠟⠻".split("");

function randomBraille(cols: number, rows: number) {
  return Array.from({ length: rows }, () =>
    Array.from(
      { length: cols },
      () => BRAILLE_CHARS[Math.floor(Math.random() * BRAILLE_CHARS.length)],
    ).join(""),
  );
}

function formatLine(text: string) {
  const [first, ...rest] = text.split("\n");
  return (
    <>
      <span className="text-orange">{first}</span>
      {rest.length > 0 && "\n" + rest.join("\n")}
    </>
  );
}

export default function TerminalHero() {
  const [typing, setTyping] = useState("$ whoami");
  const [progress, setProgress] = useState(40);
  const [noise, setNoise] = useState<string[]>([]);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const cols = isMobile ? 10 : 18;
    const rows = isMobile ? 3 : 5;

    setNoise(randomBraille(cols, rows));

    if (reducedMotion) {
      const first = BOOT_LINES[0];
      setTyping(`$ ${first.prompt}\n${first.output}`);
      setProgress(100);
      return;
    }

    let cancelled = false;
    let raf = 0;
    let lineIndex = 0;
    let charIndex = 0;
    let phase: "typing" | "pause" = "typing";
    let lastTick = performance.now();

    function tickTyping(now: number) {
      if (cancelled) return;
      const delta = now - lastTick;
      const current = BOOT_LINES[lineIndex];
      const full = `$ ${current.prompt}\n${current.output}`;

      if (phase === "typing" && delta >= 28) {
        lastTick = now;
        charIndex++;
        setTyping(full.slice(0, charIndex));
        if (charIndex >= full.length) phase = "pause";
      } else if (phase === "pause" && delta >= 1000) {
        lastTick = now;
        lineIndex = (lineIndex + 1) % BOOT_LINES.length;
        charIndex = 0;
        phase = "typing";
        setTyping("$ ");
      }
      raf = requestAnimationFrame(tickTyping);
    }
    raf = requestAnimationFrame(tickTyping);

    let noiseLast = performance.now();
    const noiseInterval = isMobile ? 333 : 166;
    let noiseRaf = 0;
    function tickNoise(now: number) {
      if (cancelled) return;
      if (now - noiseLast >= noiseInterval) {
        noiseLast = now;
        setNoise(randomBraille(cols, rows));
      }
      noiseRaf = requestAnimationFrame(tickNoise);
    }
    noiseRaf = requestAnimationFrame(tickNoise);

    let progLast = performance.now();
    let progRaf = 0;
    let pct = 40;
    function tickProgress(now: number) {
      if (cancelled) return;
      if (now - progLast >= 220) {
        progLast = now;
        pct = (pct + 4) % 104;
        setProgress(Math.min(pct, 100));
      }
      progRaf = requestAnimationFrame(tickProgress);
    }
    progRaf = requestAnimationFrame(tickProgress);

    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      cancelAnimationFrame(noiseRaf);
      cancelAnimationFrame(progRaf);
    };
  }, []);

  const barWidth = 20;
  const filled = Math.round((progress / 100) * barWidth);
  const bar = `[${"%".repeat(filled)}${"_".repeat(barWidth - filled)}] ${String(progress).padStart(3, " ")}%`;

  return (
    <section className="relative border-b border-line bg-dot-grid">
      <div className="mx-auto max-w-6xl px-6 md:px-10 pt-24 pb-24 md:pt-32 md:pb-32">
        <div className="border border-line bg-raised">
          <div className="flex items-center justify-between border-b border-raised-line px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-fg-muted/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-fg-muted/30" />
              <span className="w-2.5 h-2.5 rounded-full bg-orange" />
            </div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-fg-muted">
              ADNANE.SERROUKH — SANDBOX
            </span>
            <span className="font-mono text-[11px] text-orange">✶</span>
          </div>

          <div className="p-6 md:p-10 font-mono text-sm leading-relaxed h-[300px] md:h-[320px]">
            <pre className="whitespace-pre-wrap mb-6 text-fg-muted">
              {formatLine(typing)}
              <span className="animate-blink text-fg">▌</span>
            </pre>

            <div className="text-fg-muted">{bar}</div>

            <div
              aria-hidden
              className="mt-6 h-[3.4rem] overflow-hidden text-[10px] leading-[1.15] text-fg-muted/50 select-none hidden sm:block" style={{ whiteSpace: "nowrap" }}
            >
              {noise.map((row, i) => (
                <div key={i}>{row}</div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#selected-work"
            className="font-mono text-[11px] uppercase tracking-[0.15em] bg-orange text-fg px-6 py-3 hover:opacity-90 transition-opacity"
          >
            View work
          </Link>
          <Link
            href="/cv"
            className="font-mono text-[11px] uppercase tracking-[0.15em] border border-line text-fg px-6 py-3 hover:border-orange hover:text-orange transition-colors"
          >
            Download CV
          </Link>
        </div>
      </div>
    </section>
  );
}
