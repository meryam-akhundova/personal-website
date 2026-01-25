"use client";

import { useState } from "react";
import { socialLinks } from "@/lib/data";
import ScrollAnimation from "./ScrollAnimation";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // For now, this will open the user's email client
    // You can later integrate with a service like Formspree, EmailJS, or your own API
    const subject = encodeURIComponent("Contact from Portfolio Website");
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${socialLinks.email.replace("mailto:", "")}?subject=${subject}&body=${body}`;

    // Reset form after a delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
      setSubmitStatus("success");
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-2 sm:px-4 lg:px-6 flex items-center relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/50 section-divider"></div>
      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        <ScrollAnimation>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: '#543618' }}>
            get in touch
          </h2>
          <p className="text-lg mb-12 max-w-2xl mx-auto lowercase leading-relaxed" style={{ color: '#543618' }}>
            i&apos;m always open to discussing new opportunities, interesting
            projects, or just having a conversation about technology. feel free
            to reach out!
          </p>
        </ScrollAnimation>

        <ScrollAnimation delay={100}>
          <div className="glass-card p-8 rounded-2xl max-w-md mx-auto hover:scale-105 transition-transform">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#DB5079] focus:border-transparent transition-all"
                  style={{ color: '#543618', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg glass border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#DB5079] focus:border-transparent transition-all"
                  style={{ color: '#543618', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="your message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg glass border border-white/30 focus:outline-none focus:ring-2 focus:ring-[#DB5079] focus:border-transparent transition-all resize-none"
                  style={{ color: '#543618', backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full p-4 rounded-lg transition-all font-semibold shadow-lg glass btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "sending..." : "send message"}
              </button>

              {submitStatus === "success" && (
                <p className="text-sm" style={{ color: '#543618' }}>
                  opening your email client...
                </p>
              )}
            </form>

            <div className="flex justify-center space-x-6 pt-6 mt-6 border-t border-white/30">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110 transform"
                style={{ color: '#543618' }}
                aria-label="GitHub"
              >
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-all hover:scale-110 transform"
                style={{ color: '#543618' }}
                aria-label="LinkedIn"
              >
                <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={200}>
          <p className="mt-12 lowercase" style={{ color: '#543618' }}>
            looking forward to connecting with you!
          </p>
        </ScrollAnimation>
      </div>
    </section>
  );
}
