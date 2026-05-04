"use client";

import { motion } from "framer-motion";
import { Monitor, Shield, Network, HardDrive, Mail, Headphones } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Monitor,
    title: "Microsoft 365",
    description:
      "Full setup, migration, and ongoing management of M365 — email, Teams, SharePoint, and OneDrive.",
    iconColor: "text-indigo-400",
    glowColor: "group-hover:shadow-indigo-500/10",
    borderHover: "group-hover:border-indigo-500/30",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "MFA, Microsoft Defender, Intune device management, and security policies that actually hold.",
    iconColor: "text-violet-400",
    glowColor: "group-hover:shadow-violet-500/10",
    borderHover: "group-hover:border-violet-500/30",
  },
  {
    icon: Network,
    title: "VPN & Networking",
    description:
      "Site-to-site VPNs, secure remote access, and network configuration for your office or team.",
    iconColor: "text-sky-400",
    glowColor: "group-hover:shadow-sky-500/10",
    borderHover: "group-hover:border-sky-500/30",
  },
  {
    icon: HardDrive,
    title: "Servers & Storage",
    description:
      "Windows Server setup, NAS configuration, backups, and on-prem or hybrid infrastructure.",
    iconColor: "text-cyan-400",
    glowColor: "group-hover:shadow-cyan-500/10",
    borderHover: "group-hover:border-cyan-500/30",
  },
  {
    icon: Mail,
    title: "Email Setup",
    description:
      "Professional email on your own domain — Exchange, Microsoft 365, or Google Workspace.",
    iconColor: "text-rose-400",
    glowColor: "group-hover:shadow-rose-500/10",
    borderHover: "group-hover:border-rose-500/30",
  },
  {
    icon: Headphones,
    title: "Ongoing IT Support",
    description:
      "Remote helpdesk and proactive monitoring so issues get fixed before they become problems.",
    iconColor: "text-amber-400",
    glowColor: "group-hover:shadow-amber-500/10",
    borderHover: "group-hover:border-amber-500/30",
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
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Everything your business
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-rose-300">
              needs to run.
            </span>
          </h2>
          <p className="text-base text-white/40 leading-relaxed max-w-lg">
            From Microsoft 365 setup to VPNs and server management, we handle your IT so you can focus on the work that matters.
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
