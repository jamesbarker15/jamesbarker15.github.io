"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "10+",
    label: "Websites Launched",
    description: "Across West London and beyond",
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    description: "We don't stop until you're happy",
  },
  {
    value: "24/7",
    label: "Support Available",
    description: "We're here when you need us",
  },
];

export default function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.25, 0.4, 0.25, 1],
              }}
              className="bg-[#030303] px-8 py-10 md:px-10 md:py-12 text-center"
            >
              <p className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60 mb-2">
                {stat.value}
              </p>
              <p className="text-base font-medium text-white/70 mb-1.5">
                {stat.label}
              </p>
              <p className="text-sm text-white/30">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
