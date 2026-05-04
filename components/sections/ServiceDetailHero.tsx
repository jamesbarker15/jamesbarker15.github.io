"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Phone, Monitor, Shield, Network, HardDrive, Mail, Headphones } from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: { [key: string]: LucideIcon } = {
  Monitor,
  Shield,
  Network,
  HardDrive,
  Mail,
  Headphones,
};

interface ServiceDetailHeroProps {
  icon: string | LucideIcon;
  title: string;
  description: string;
  iconColor: string;
}

export default function ServiceDetailHero({
  icon,
  title,
  description,
  iconColor,
}: ServiceDetailHeroProps) {
  const Icon = typeof icon === "string" ? iconMap[icon] : icon;
  const fadeUpVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        delay: 0.2 + i * 0.15,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  };

  return (
    <div className="relative min-h-[600px] w-full flex items-center justify-center overflow-hidden bg-[#030303] pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.05] via-transparent to-rose-500/[0.05] blur-3xl" />

      <div className="relative z-10 container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            custom={0}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className={`inline-flex p-3 rounded-xl mb-8 md:mb-12 ${iconColor} bg-white/[0.04]`}
          >
            <Icon className="h-6 w-6" />
          </motion.div>

          <motion.div
            custom={1}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 md:mb-8 tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80">
                {title}
              </span>
            </h1>
          </motion.div>

          <motion.div
            custom={2}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
          >
            <p className="text-base sm:text-lg md:text-xl text-white/40 mb-10 leading-relaxed font-light tracking-wide max-w-2xl mx-auto px-4">
              {description}
            </p>
          </motion.div>

          <motion.div
            custom={3}
            variants={fadeUpVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+447404793666"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/[0.15] text-white/70 text-sm hover:text-white hover:border-white/[0.3] transition-all duration-200"
            >
              <Phone className="h-4 w-4" />
              +44 7404 793666
            </a>
          </motion.div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 pointer-events-none" />
    </div>
  );
}
