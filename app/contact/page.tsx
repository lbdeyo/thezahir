"use client";

import Navigation from "../components/Navigation";
import { executeRecaptcha } from "../lib/recaptcha-client";
import { getHubspotUtk } from "../lib/hubspot-cookie";
import Script from "next/script";
import { useEffect, useState, FormEvent } from "react";

const recaptchaSiteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? "";

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
  const [recaptchaFailed, setRecaptchaFailed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const trimmedFormData = {
    name: formData.name.trim(),
    email: formData.email.trim(),
    message: formData.message.trim(),
  };
  const captchaConfigured = recaptchaSiteKey.length > 0;
  const formAvailable =
    captchaConfigured || process.env.NODE_ENV !== "production";
  const canSubmit =
    trimmedFormData.name.length > 0 &&
    trimmedFormData.email.length > 0 &&
    trimmedFormData.message.length > 0 &&
    formAvailable &&
    !recaptchaFailed;

  useEffect(() => {
    if (!captchaConfigured) return;
    document.documentElement.classList.add("recaptcha-badge-hidden");
    return () => {
      document.documentElement.classList.remove("recaptcha-badge-hidden");
    };
  }, [captchaConfigured]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!canSubmit) {
      if (!formAvailable || recaptchaFailed) {
        setErrorMessage(
          recaptchaFailed
            ? "reCAPTCHA failed to load. Refresh the page and try again."
            : "This form is temporarily unavailable."
        );
        setStatus("error");
      }
      e.currentTarget.reportValidity();
      return;
    }

    setErrorMessage("");
    setStatus("submitting");

    try {
      let recaptchaToken: string | undefined;
      if (captchaConfigured) {
        try {
          recaptchaToken = await executeRecaptcha(recaptchaSiteKey);
        } catch (recaptchaError) {
          console.error("reCAPTCHA execute failed:", recaptchaError);
          setRecaptchaFailed(true);
          setErrorMessage(
            "reCAPTCHA failed to load. Refresh the page and try again."
          );
          setStatus("error");
          return;
        }
      }

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: trimmedFormData.name,
          email: trimmedFormData.email,
          message: trimmedFormData.message,
          subscribeToMailingList,
          hubspotUtk: getHubspotUtk(),
          pageUri:
            typeof window !== "undefined" ? window.location.href : undefined,
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        console.error("Contact form submission error:", data);
        setErrorMessage(
          typeof data?.error === "string" && data.error
            ? data.error
            : "Something went wrong. Please try again or email us directly."
        );
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setSubscribeToMailingList(false);
    } catch (error) {
      console.error("Form submission error:", error);
      setErrorMessage(
        "Something went wrong. Please try again or email us directly."
      );
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
            {errorMessage ||
              "Something went wrong. Please try again or email us directly."}
          </div>
        )}

        <div className="max-w-3xl">
        <form
          onSubmit={handleSubmit}
          id="contact-form"
          data-hs-do-not-collect="true"
          className="space-y-6"
        >
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
              minLength={1}
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

          {captchaConfigured ? (
            <Script
              src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
              strategy="afterInteractive"
              onError={() => setRecaptchaFailed(true)}
            />
          ) : process.env.NODE_ENV === "production" ? (
            <p className="text-sm text-neutral-300">
              This form is temporarily unavailable.
            </p>
          ) : null}

          <button
            type="submit"
            disabled={status === "submitting" || !canSubmit}
            className="bg-[#e6ad06] px-7 py-3 font-bold uppercase tracking-wide text-black hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === "submitting" ? "Sending..." : "Send"}
          </button>
          {captchaConfigured && (
            <p className="text-xs leading-relaxed text-neutral-500">
              This site is protected by reCAPTCHA and the Google{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-300"
              >
                Privacy Policy
              </a>{" "}
              and{" "}
              <a
                href="https://policies.google.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-neutral-300"
              >
                Terms of Service
              </a>{" "}
              apply.
            </p>
          )}
        </form>
        </div>
      </main>
    </div>
  );
}
