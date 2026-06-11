"use client";

import { useState, FormEvent } from "react";

export default function MailingListForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/mailing-list", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setEmail("");
        setTimeout(() => setStatus("idle"), 3000);
      } else {
        console.error("Mailing list subscription error:", data);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      console.error("Mailing list subscription error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-2"
      suppressHydrationWarning
    >
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email address"
        required
        disabled={status === "submitting"}
        className="px-3 py-2 bg-transparent border border-white/25 text-white text-sm placeholder:text-white/50 focus:outline-none focus:border-[#e6ad06] focus:ring-1 focus:ring-[#e6ad06] disabled:opacity-50 sm:min-w-[240px]"
      />
      <button
        type="submit"
        disabled={status === "submitting"}
        className="px-4 py-2 bg-[#e6ad06] text-black text-sm font-semibold hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "submitting"
          ? "Subscribing..."
          : status === "success"
          ? "✓ Subscribed!"
          : "Subscribe"}
      </button>
      {status === "error" && (
        <p className="text-sm text-red-400 sm:self-center">
          Something went wrong. Please try again.
        </p>
      )}
    </form>
  );
}
