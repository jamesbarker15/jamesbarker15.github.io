"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Monitor, Shield, Network, HardDrive, Mail, Headphones } from "lucide-react";

const services = [
  {
    slug: "microsoft-365",
    title: "Microsoft 365",
    description: "Full setup, migration, and ongoing management of M365.",
    icon: Monitor,
    iconColor: "text-indigo-400",
    glowColor: "group-hover:shadow-indigo-500/10",
    borderHover: "group-hover:border-indigo-500/30",
  },
  {
    slug: "security-compliance",
    title: "Security & Compliance",
    description: "MFA, Microsoft Defender, Intune device management.",
    icon: Shield,
    iconColor: "text-violet-400",
    glowColor: "group-hover:shadow-violet-500/10",
    borderHover: "group-hover:border-violet-500/30",
  },
  {
    slug: "vpn-networking",
    title: "VPN & Networking",
    description: "Site-to-site VPNs, secure remote access, network config.",
    icon: Network,
    iconColor: "text-sky-400",
    glowColor: "group-hover:shadow-sky-500/10",
    borderHover: "group-hover:border-sky-500/30",
  },
  {
    slug: "server-storage",
    title: "Servers & Storage",
    description: "Windows Server setup, NAS configuration, backups.",
    icon: HardDrive,
    iconColor: "text-cyan-400",
    glowColor: "group-hover:shadow-cyan-500/10",
    borderHover: "group-hover:border-cyan-500/30",
  },
  {
    slug: "email-setup",
    title: "Email Setup",
    description: "Professional email on your own domain.",
    icon: Mail,
    iconColor: "text-rose-400",
    glowColor: "group-hover:shadow-rose-500/10",
    borderHover: "group-hover:border-rose-500/30",
  },
  {
    slug: "it-support",
    title: "Ongoing IT Support",
    description: "Remote helpdesk and proactive monitoring.",
    icon: Headphones,
    iconColor: "text-amber-400",
    glowColor: "group-hover:shadow-amber-500/10",
    borderHover: "group-hover:border-amber-500/30",
  },
];

export default function LocationServiceGrid() {
  return (
    <section className="py-20 md:py-28 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-5">
            <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
              Services we provide
            </span>
          </h2>
          <p className="text-base text-white/40 leading-relaxed max-w-lg">
            From Microsoft 365 setup to VPNs and server management, we handle your IT so you can focus on what matters.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: [0.25, 0.4, 0.25, 1],
                }}
              >
                <Link href={`/services/${service.slug}`}>
                  <div
                    className={`group relative p-6 md:p-7 rounded-2xl h-full
                    bg-white/[0.02] border border-white/[0.07]
                    hover:bg-white/[0.04] transition-all duration-300
                    shadow-xl cursor-pointer
                    ${service.glowColor} ${service.borderHover}`}
                  >
                    <div
                      className={`inline-flex p-2.5 rounded-xl bg-white/[0.04] mb-5 ${service.iconColor}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-base font-semibold text-white/90 mb-2.5">
                      {service.title}
                    </h3>
                    <p className="text-sm text-white/40 leading-relaxed mb-4">
                      {service.description}
                    </p>
                    <div className="flex items-center text-indigo-400 text-sm font-medium group-hover:gap-3 gap-2 transition-all duration-200">
                      Learn more
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
