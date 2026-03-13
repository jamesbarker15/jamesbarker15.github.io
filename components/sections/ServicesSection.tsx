"use client";

import { motion } from "framer-motion";
import { Palette, Code2, TrendingUp, Cloud, GitBranch, Server } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Palette,
    title: "Web Design",
    description:
      "Bespoke, pixel-perfect designs built around your brand. Every site we create is unique, responsive, and optimised to convert visitors into customers.",
    iconColor: "text-indigo-400",
    glowColor: "group-hover:shadow-indigo-500/10",
    borderHover: "group-hover:border-indigo-500/30",
  },
  {
    icon: Code2,
    title: "Web Applications",
    description:
      "Custom-built web apps tailored to your exact business workflows. From booking systems to client portals, we build tools that solve real problems.",
    iconColor: "text-violet-400",
    glowColor: "group-hover:shadow-violet-500/10",
    borderHover: "group-hover:border-violet-500/30",
  },
  {
    icon: TrendingUp,
    title: "SEO",
    description:
      "Search engine optimisation built in from day one. We help you rank for the right keywords and attract customers who are already looking for you.",
    iconColor: "text-rose-400",
    glowColor: "group-hover:shadow-rose-500/10",
    borderHover: "group-hover:border-rose-500/30",
  },
  {
    icon: Cloud,
    title: "Cloud Migrations",
    description:
      "Seamless migrations to AWS, Azure, or GCP. We plan, execute, and validate your move to the cloud with minimal downtime and zero data loss.",
    iconColor: "text-sky-400",
    glowColor: "group-hover:shadow-sky-500/10",
    borderHover: "group-hover:border-sky-500/30",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description:
      "Automated build, test, and deployment pipelines that ship code faster and more reliably. Less manual work, fewer errors, faster releases.",
    iconColor: "text-amber-400",
    glowColor: "group-hover:shadow-amber-500/10",
    borderHover: "group-hover:border-amber-500/30",
  },
  {
    icon: Server,
    title: "Infrastructure",
    description:
      "Scalable, resilient infrastructure designed for performance. From IaC with Terraform to containerised workloads, we build platforms that last.",
    iconColor: "text-cyan-400",
    glowColor: "group-hover:shadow-cyan-500/10",
    borderHover: "group-hover:border-cyan-500/30",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <p className="text-sm text-indigo-400/80 tracking-widest uppercase mb-4 font-medium">
            What We Do
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Web, cloud, and everything
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
              in between.
            </span>
          </h2>
          <p className="text-base text-white/40 leading-relaxed max-w-lg">
            From a bespoke website to a full cloud migration, we handle the
            technical side of your business end to end.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
                className={cn(
                  "group relative p-6 md:p-7 rounded-2xl",
                  "bg-white/[0.02] border border-white/[0.07]",
                  "hover:bg-white/[0.04] transition-all duration-300",
                  "shadow-xl",
                  service.glowColor,
                  service.borderHover
                )}
              >
                <div
                  className={cn(
                    "inline-flex p-2.5 rounded-xl bg-white/[0.04] mb-5",
                    service.iconColor
                  )}
                >
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-white/90 mb-2.5">
                  {service.title}
                </h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
