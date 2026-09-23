"use client";

import { useState } from "react";

export type FaqItem = {
  question: string;
  answer: string;
};

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;
        return (
          <div key={item.question} className="border-b border-line">
            <h3>
              <button
                id={buttonId}
                type="button"
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenIndex(open ? null : i)}
                className="w-full flex items-center justify-between gap-6 py-6 text-left"
              >
                <span className="font-display font-medium text-lg md:text-xl text-fg">
                  {item.question}
                </span>
                <span
                  aria-hidden
                  className={`font-mono text-orange shrink-0 transition-transform ${
                    open ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              hidden={!open}
              className="pb-6 -mt-2"
            >
              <p className="text-fg-muted leading-relaxed max-w-2xl">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
