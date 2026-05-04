import type { Metadata } from "next";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import LocationServiceGrid from "@/components/sections/LocationServiceGrid";

export const metadata: Metadata = {
  title: "IT Support in Hayes | Small Business IT Consulting | JB Web Solutions",
  description:
    "IT support and consulting for small businesses in Hayes. Microsoft 365, VPNs, servers, and managed IT services. Based nearby in Uxbridge.",
  openGraph: {
    title: "IT Support in Hayes for Small Businesses",
    description:
      "IT support and consulting for small businesses in Hayes. Microsoft 365, VPNs, servers, and managed IT services.",
    url: "https://jbwebsolutions.co.uk/it-support-hayes",
  },
};

export default function HayesITSupportPage() {
  return (
    <main className="pt-0">
      <ServiceDetailHero
        icon="Headphones"
        title="IT Support in Hayes"
        description="Reliable IT support and consulting for small businesses in Hayes. Based nearby in Uxbridge, we provide fast, responsive support to Hayes businesses."
        iconColor="text-amber-400"
      />

      <section className="py-20 md:py-28 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              IT support for Hayes businesses
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Hayes is a bustling business hub in Hillingdon with a mix of light industrial, retail, and office-based businesses. Located just south of Uxbridge, we&apos;re local to Hayes and understand the business needs of the area.
            </p>

            <h3 className="text-lg font-semibold text-white/90 mb-4">Why work with a local IT provider in Hayes</h3>
            <p className="text-white/60 mb-8">
              Hayes businesses deserve IT support that&apos;s responsive, practical, and tailored to local needs. We&apos;re based nearby in Uxbridge, which means we can respond quickly to urgent issues and understand the Hayes business environment.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">Services we provide</h3>
                <ul className="space-y-2 text-white/60">
                  <li>✓ Microsoft 365 setup and management</li>
                  <li>✓ IT helpdesk and remote support</li>
                  <li>✓ Network and VPN configuration</li>
                  <li>✓ Server and storage solutions</li>
                  <li>✓ Cybersecurity and device management</li>
                  <li>✓ Business email and communications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">What sets us apart</h3>
                <ul className="space-y-2 text-white/60">
                  <li>✓ Local, responsive support</li>
                  <li>✓ No complicated long-term contracts</li>
                  <li>✓ Clear, straightforward pricing</li>
                  <li>✓ Proactive monitoring to prevent problems</li>
                  <li>✓ Direct contact with your IT person</li>
                  <li>✓ Experience with Hayes business needs</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 mb-12">
              <h3 className="text-lg font-semibold text-white/90 mb-4">Hayes business IT needs</h3>
              <p className="text-white/60 mb-4">
                We work with a variety of Hayes businesses including:
              </p>
              <ul className="space-y-2 text-white/60">
                <li>• Light industrial and manufacturing operations</li>
                <li>• Retail and hospitality businesses</li>
                <li>• Professional services (accounting, law, etc.)</li>
                <li>• Office-based businesses and startups</li>
                <li>• Multi-location businesses with head offices in Hayes</li>
              </ul>
              <p className="text-white/60 mt-4">
                Whatever your business type, we can provide IT support that fits your needs and budget.
              </p>
            </div>

            <div className="text-center">
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200"
              >
                Book a Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocationServiceGrid />
    </main>
  );
}
