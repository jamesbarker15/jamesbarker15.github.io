"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, CheckCircle, AlertCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  "Microsoft 365 Setup / Migration",
  "Security & Compliance (MFA, Intune)",
  "VPN & Networking",
  "Server & Storage Setup",
  "Email Setup",
  "Ongoing IT Support / Helpdesk",
  "General Enquiry",
];

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+44 7404 793666",
    href: "tel:+447404793666",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hello@jbwebsolutions.co.uk",
    href: "mailto:hello@jbwebsolutions.co.uk",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Uxbridge, West London",
    href: null,
  },
];

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://formspree.io/f/xanqrzkj", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = cn(
    "w-full px-4 py-3 rounded-xl text-sm",
    "bg-white/[0.03] border border-white/[0.08]",
    "text-white/80 placeholder-white/20",
    "focus:outline-none focus:border-indigo-500/50 focus:bg-white/[0.05]",
    "transition-all duration-200"
  );

  return (
    <main className="min-h-screen bg-[#030303] pt-24 md:pt-32 pb-24 md:pb-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="mb-14 md:mb-16"
          >
            <p className="text-sm text-indigo-400/80 tracking-widest uppercase mb-4 font-medium">
              Get in Touch
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                Let&apos;s sort out
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
                your IT.
              </span>
            </h1>
            <p className="text-base text-white/40 leading-relaxed max-w-md">
              Tell us about your IT needs and we&apos;ll get back to you within one
              business day with a free consultation offer.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
              className="lg:col-span-3"
            >
              {status === "success" ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <CheckCircle className="h-12 w-12 text-indigo-400 mb-5" />
                  <h2 className="text-xl font-semibold text-white/90 mb-3">
                    Message sent!
                  </h2>
                  <p className="text-sm text-white/40 max-w-sm">
                    Thanks for reaching out. We&apos;ll be in touch within one
                    business day.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-8 text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="James Brown"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="james@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs text-white/40 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+44 7700 000000"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 mb-2">
                        Service Required
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={cn(inputClass, "appearance-none cursor-pointer")}
                      >
                        <option value="" disabled>
                          Select a service
                        </option>
                        {services.map((s) => (
                          <option key={s} value={s} className="bg-[#0d0d0d]">
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your IT needs, current setup, and any specific requirements..."
                      className={cn(inputClass, "resize-none")}
                    />
                  </div>

                  {status === "error" && (
                    <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-rose-500/[0.08] border border-rose-500/20">
                      <AlertCircle className="h-4 w-4 text-rose-400 shrink-0" />
                      <p className="text-sm text-rose-400/80">
                        Something went wrong. Please try again or call us directly.
                      </p>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="lg:col-span-2 space-y-4"
            >
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                    <div className="p-2.5 rounded-xl bg-indigo-500/[0.08]">
                      <Icon className="h-4 w-4 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-xs text-white/30 mb-1">{item.label}</p>
                      <p className="text-sm text-white/70">{item.value}</p>
                    </div>
                  </div>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block hover:opacity-80 transition-opacity"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}

              <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.07]">
                <p className="text-xs text-white/30 mb-2">Response time</p>
                <p className="text-sm text-white/70">
                  We aim to respond to all enquiries within one business day.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </main>
  );
}
