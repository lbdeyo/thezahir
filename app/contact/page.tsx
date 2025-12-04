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

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("message", formData.message);

      const response = await fetch("https://formspree.io/f/mblvyvny", {
        method: "POST",
        body: formDataToSend,
        redirect: "manual",
      });

      // Formspree redirects on success (status 302), so we treat redirects as success
      if (
        response.ok ||
        response.status === 302 ||
        response.type === "opaqueredirect"
      ) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Try to get error details
        try {
          const errorData = await response.json();
          console.error("Form submission error:", errorData);
        } catch {
          // If we can't parse JSON, just log the status
          console.error(
            "Form submission error:",
            response.status,
            response.statusText
          );
        }
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
    <div className="min-h-screen font-sans bg-attachment-responsive bg-rotated relative">
      {/* Vertical border lines - extend full height of page including footer */}
      <div
        className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none"
        style={{ zIndex: 100 }}
      >
        <div className="max-w-5xl mx-auto h-full relative">
          <div
            className="absolute top-0 left-4 sm:left-8"
            style={{
              width: "1px",
              height: "100vh",
              backgroundColor: "#ada173",
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
              willChange: "transform",
              imageRendering: "crisp-edges",
            }}
          ></div>
          <div
            className="absolute top-0 right-4 sm:right-8"
            style={{
              width: "1px",
              height: "100vh",
              backgroundColor: "#ada173",
              transform: "translateZ(0)",
              WebkitTransform: "translateZ(0)",
              willChange: "transform",
              imageRendering: "crisp-edges",
            }}
          ></div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col min-h-screen">
        <Navigation />

        {/* Main Content */}
        <main className="w-full px-4 sm:px-8 pt-0 flex-1 flex flex-col">
          <div
            className="px-4 sm:px-12 pt-4 pb-12 flex-1 relative"
            style={{
              background: "rgba(173, 161, 115, 0.90)",
            }}
          >
            <h1
              className="text-4xl sm:text-5xl md:text-[3.75rem] text-black mb-6 pt-4 font-['thirsty-rough-two']"
              style={{ fontWeight: 800, fontStyle: "normal" }}
            >
              Contact
            </h1>

            {status === "success" && (
              <div className="mb-6 p-4 bg-black/20 rounded text-black text-2xl font-medium font-['Baskerville']">
                Thank you for your message. We&apos;ll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="mb-6 p-4 bg-black/20 rounded text-black text-2xl font-medium font-['Baskerville']">
                Something went wrong. Please try again or email us directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-black text-xl font-medium font-['Baskerville'] mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-[#eae5ca] text-black text-xl font-medium font-['Baskerville'] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-black text-xl font-medium font-['Baskerville'] mb-2"
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
                  className="w-full px-4 py-3 bg-[#eae5ca] text-black text-xl font-medium font-['Baskerville'] focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-black text-xl font-medium font-['Baskerville'] mb-2"
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
                  className="w-full px-4 py-3 bg-[#eae5ca] text-black text-xl font-medium font-['Baskerville'] focus:outline-none transition-colors resize-vertical"
                />
              </div>

              <button
                type="submit"
                disabled={status === "submitting"}
                className="px-8 py-3 bg-black text-[#ada173] text-xl font-semibold font-['Baskerville'] hover:bg-[#ada173] hover:text-black transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "submitting" ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}
