import type { Metadata } from "next";
import ServicesSection from "@/components/sections/ServicesSection";

export const metadata: Metadata = {
  title: "IT Services for Small Businesses | JB Web Solutions",
  description:
    "Professional IT consulting services for small businesses in Uxbridge and West London. Microsoft 365, VPNs, servers, email, security, and ongoing IT support.",
  openGraph: {
    title: "IT Services for Small Businesses | JB Web Solutions",
    description:
      "Professional IT consulting services for small businesses in Uxbridge and West London.",
    url: "https://jbwebsolutions.co.uk/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="pt-24 md:pt-28">
      <ServicesSection />
    </main>
  );
}
