"use client";

import { useState } from "react";

const TOPICS = ["Job opportunity", "Freelance work", "Other"];
const EMAIL = "adnaneserroukh@outlook.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState(TOPICS[0]);
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `[${topic}] Message from ${name || "your site"}`;
    const body = `${message}\n\n— ${name}${email ? ` (${email})` : ""}`;
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  const inputClasses =
    "w-full bg-bg border border-line px-4 py-3 text-fg placeholder:text-fg-muted focus:outline-none focus:border-orange transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
      <div>
        <label
          htmlFor="name"
          className="block font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted mb-2"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClasses}
        />
      </div>

      <div>
        <label
          htmlFor="topic"
          className="block font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted mb-2"
        >
          Topic
        </label>
        <select
          id="topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={inputClasses}
        >
          {TOPICS.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block font-mono text-[11px] uppercase tracking-[0.15em] text-fg-muted mb-2"
        >
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={inputClasses}
        />
      </div>

      <button
        type="submit"
        className="font-mono text-[11px] uppercase tracking-[0.15em] bg-orange text-fg px-6 py-3 hover:opacity-90 transition-opacity"
      >
        Send message
      </button>
      <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-fg-muted">
        Opens your email client, addressed to {EMAIL}
      </p>
    </form>
  );
}
