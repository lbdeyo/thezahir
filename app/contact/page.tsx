"use client";

import Navigation from "../components/Navigation";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [status, setStatus] = useState<
    "idle" | "submitting" | "success" | "error"
  >("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [subscribeToMailingList, setSubscribeToMailingList] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subscribeToMailingList: subscribeToMailingList,
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setSubscribeToMailingList(false);
      } else {
        console.error("Form submission error:", data);
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] font-sans text-white">
      <Navigation />

      <main className="max-w-5xl mx-auto px-4 sm:px-8 pt-8 sm:pt-10 pb-20">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8">
          Contact
        </h1>

        {status === "success" && (
          <div className="mb-6 rounded-lg border border-white/15 bg-white/5 px-5 py-4 text-neutral-200">
            Thank you for your message. We&apos;ll get back to you soon.
          </div>
        )}

        {status === "error" && (
          <div className="mb-6 rounded-lg border border-white/15 bg-white/5 px-5 py-4 text-neutral-200">
            Something went wrong. Please try again or email us directly.
          </div>
        )}

        <form onSubmit={handleSubmit} className="max-w-3xl space-y-6">
          <div>
            <label htmlFor="name" className="block text-white font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-[#e6ad06] focus:ring-1 focus:ring-[#e6ad06]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-white font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-transparent border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-[#e6ad06] focus:ring-1 focus:ring-[#e6ad06]"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-white font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-3 bg-transparent border border-white/25 text-white placeholder:text-white/50 focus:outline-none focus:border-[#e6ad06] focus:ring-1 focus:ring-[#e6ad06] resize-vertical"
            />
          </div>

          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={subscribeToMailingList}
                onChange={(e) =>
                  setSubscribeToMailingList(e.target.checked)
                }
                className="w-5 h-5 accent-[#e6ad06] cursor-pointer"
              />
              <span className="text-lg text-neutral-300">
                Add me to The Zahir&apos;s mailing list
              </span>
            </label>
          </div>

          <input
            type="hidden"
            name="newsletter_subscriber"
            value={subscribeToMailingList.toString()}
          />

          <button
            type="submit"
            disabled={status === "submitting"}
            className="bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send"}
          </button>
        </form>
      </main>
    </div>
  );
}
