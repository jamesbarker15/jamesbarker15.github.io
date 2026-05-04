"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 bg-[#030303] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.06] via-transparent to-rose-500/[0.06] blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Ready to sort out
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
              your IT?
            </span>
          </h2>

          <p className="text-base md:text-lg text-white/40 mb-10 leading-relaxed max-w-md mx-auto">
            Book a free 30-minute discovery call. No hard sell — just honest advice on what your business actually needs.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200"
            >
              Book a Free Call
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+447404793666"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/[0.15] text-white/70 text-sm hover:text-white hover:border-white/[0.3] transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              +44 7404 793666
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
