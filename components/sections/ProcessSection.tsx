"use client";

import { motion } from "framer-motion";
import { Search, Palette, Code2, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "We start by understanding your business, your goals, and who your customers are. No assumptions — just careful listening.",
    icon: Search,
    color: "text-indigo-400",
    bg: "bg-indigo-500/[0.08]",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We craft a design that reflects your brand and delivers a great experience across every device.",
    icon: Palette,
    color: "text-violet-400",
    bg: "bg-violet-500/[0.08]",
  },
  {
    number: "03",
    title: "Build",
    description:
      "Clean code, fast load times, and built-in SEO. We develop your site with performance and longevity in mind.",
    icon: Code2,
    color: "text-rose-400",
    bg: "bg-rose-500/[0.08]",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We handle the go-live and stick around for support. Your success after launch matters just as much to us.",
    icon: Rocket,
    color: "text-amber-400",
    bg: "bg-amber-500/[0.08]",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32 bg-[#030303] relative">
      {/* Subtle gradient blob */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/[0.03] via-transparent to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center max-w-xl mx-auto mb-16 md:mb-20"
        >
          <p className="text-sm text-rose-400/80 tracking-widest uppercase mb-4 font-medium">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Simple process,
            </span>{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-rose-300 to-indigo-300">
              exceptional results.
            </span>
          </h2>
          <p className="text-base text-white/40 leading-relaxed">
            From first conversation to live website, we keep things clear,
            collaborative, and straightforward.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className="relative p-6 md:p-7 rounded-2xl bg-white/[0.02] border border-white/[0.07]"
              >
                {/* Step number */}
                <span className="text-xs font-mono text-white/20 mb-5 block">
                  {step.number}
                </span>

                {/* Icon */}
                <div
                  className={cn(
                    "inline-flex p-2.5 rounded-xl mb-5",
                    step.bg,
                    step.color
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="text-base font-semibold text-white/90 mb-2.5">
                  {step.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {step.description}
                </p>

                {/* Connector line (desktop) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[3.5rem] right-0 w-5 h-px bg-white/[0.08] translate-x-full" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
