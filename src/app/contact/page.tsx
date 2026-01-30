"use client";

import Header from "@/components/Header";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[var(--color-background)] via-[var(--color-background)] to-[#112240] pointer-events-none" />
      <div
        className="fixed inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--color-foreground) 1px, transparent 1px),
                           linear-gradient(90deg, var(--color-foreground) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <Header />

      <main className="relative flex-1 flex flex-col items-center px-6 py-12 md:py-20">
        <h1
          className="text-4xl md:text-6xl font-bold tracking-tight text-[var(--color-foreground)] mb-4"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Contact Me
        </h1>
        <p className="text-[var(--color-muted)] mb-12 text-center max-w-md">
          Have a question or want to work together? Send me a message.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-[var(--color-muted)] mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-muted)]/30 rounded text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-[var(--color-muted)] mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-muted)]/30 rounded text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent)] transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm text-[var(--color-muted)] mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-3 bg-[var(--color-background)] border border-[var(--color-muted)]/30 rounded text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent)] transition-colors resize-none"
              placeholder="Your message..."
            />
          </div>

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full px-8 py-4 bg-[var(--color-accent)] text-[var(--color-background)] font-semibold rounded glow-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p className="text-[var(--color-accent-secondary)] text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-red-400 text-center">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>

        {/* Direct Contact Info */}
        <div className="mt-16 flex flex-col items-center gap-4">
          <p className="text-[var(--color-muted)] text-sm">Or reach out directly:</p>
          <div className="flex gap-6">
            <a
              href="mailto:mugaboroyal@gmail.com"
              className="flex items-center gap-2 text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <span className="text-sm">mugaboroyal@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/mugisha-uwiragiye"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[var(--color-foreground)] hover:text-[var(--color-accent)] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
