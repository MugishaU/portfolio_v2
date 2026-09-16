"use client";

import Header from "@/components/Header";
import { useState, useEffect } from "react";

const MAX_MESSAGE_LENGTH = 500;

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [loadTime, setLoadTime] = useState<number>(0);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    setLoadTime(Date.now());
  }, []);

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidName = (name: string) => name.trim().length >= 2;
  const isValidMessage = (message: string) =>
    message.trim().length >= 10 && message.length <= MAX_MESSAGE_LENGTH;

  const getInputClass = (field: "name" | "email" | "message") => {
    const base =
      "w-full px-4 py-3 bg-[var(--color-background)] border rounded text-[var(--color-foreground)] transition-colors";

    if (!touched[field]) {
      return `${base} border-[var(--color-muted)]/30 focus:border-[var(--color-accent)]`;
    }

    const validators = {
      name: isValidName,
      email: isValidEmail,
      message: isValidMessage,
    };
    const isValid = validators[field](formData[field]);

    return `${base} ${isValid ? "border-green-500" : "border-red-500"}`;
  };

  const handleBlur = (field: "name" | "email" | "message") => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({ name: true, email: true, message: true });

    if (
      !isValidName(formData.name) ||
      !isValidEmail(formData.email) ||
      !isValidMessage(formData.message)
    ) {
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _gotcha: honeypot,
          _timestamp: loadTime,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTouched({ name: false, email: false, message: false });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-dvh flex flex-col">
      <Header />

      <main id="main-content" className="page-content contact-content">
        <h1>Contact.</h1>
        <p className="page-intro">
          Have a question or want to work together? Send me a message.
        </p>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="w-full max-w-md space-y-4">
          {/* Honeypot field - hidden from humans, bots will fill it */}
          <input
            type="text"
            name="company"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            autoComplete="off"
            tabIndex={-1}
            aria-hidden="true"
            className="absolute -left-[9999px] opacity-0 h-0 w-0"
          />
          <div>
            <label
              htmlFor="name"
              className="block text-sm text-[var(--color-muted)] mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              autoComplete="name"
              aria-invalid={touched.name && !isValidName(formData.name)}
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              onBlur={() => handleBlur("name")}
              className={getInputClass("name")}
              placeholder="Your name"
            />
            {touched.name && !isValidName(formData.name) && (
              <p className="field-error text-xs mt-1" role="alert">
                Name must be at least 2 characters
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm text-[var(--color-muted)] mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              aria-invalid={touched.email && !isValidEmail(formData.email)}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              onBlur={() => handleBlur("email")}
              className={getInputClass("email")}
              placeholder="your@email.com"
            />
            {touched.email && !isValidEmail(formData.email) && (
              <p className="field-error text-xs mt-1" role="alert">
                Please enter a valid email address
              </p>
            )}
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <label
                htmlFor="message"
                className="block text-sm text-[var(--color-muted)]"
              >
                Message
              </label>
              <span
                className={`text-xs ${formData.message.length > MAX_MESSAGE_LENGTH ? "text-red-700" : "text-[var(--color-muted)]"}`}
              >
                {formData.message.length}/{MAX_MESSAGE_LENGTH}
              </span>
            </div>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  message: e.target.value.slice(0, MAX_MESSAGE_LENGTH + 50),
                })
              }
              onBlur={() => handleBlur("message")}
              className={`${getInputClass("message")} resize-y`}
              placeholder="Your message..."
            />
            {touched.message && !isValidMessage(formData.message) && (
              <p className="field-error text-xs mt-1" role="alert">
                {formData.message.length > MAX_MESSAGE_LENGTH
                  ? "Message is too long"
                  : "Message must be at least 10 characters"}
              </p>
            )}
          </div>

          <button
            type="submit"
            disabled={
              status === "loading" ||
              !isValidName(formData.name) ||
              !isValidEmail(formData.email) ||
              !isValidMessage(formData.message)
            }
            className={`w-full px-8 py-4 font-semibold rounded transition-all ${
              status === "loading" ||
              !isValidName(formData.name) ||
              !isValidEmail(formData.email) ||
              !isValidMessage(formData.message)
                ? "bg-[var(--color-muted)]/30 text-[var(--color-muted)] cursor-not-allowed"
                : "bg-[var(--color-accent)] text-[var(--color-background)]"
            }`}
          >
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <p role="status">Message sent successfully!</p>
          )}
          {status === "error" && (
            <p role="alert">
              Something went wrong. Please try again or email me directly.
            </p>
          )}
        </form>

        <div className="direct-contact">
          <a href="mailto:me@mugisha.io">me@mugisha.io</a>
          <a
            href="https://linkedin.com/in/mugisha-uwiragiye"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </main>
    </div>
  );
}
