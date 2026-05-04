import type { Metadata } from "next";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import LocationServiceGrid from "@/components/sections/LocationServiceGrid";

export const metadata: Metadata = {
  title: "IT Support in Hillingdon | Small Business IT Consulting | JB Web Solutions",
  description:
    "Local IT support in Hillingdon for small businesses. Microsoft 365, VPNs, servers, and managed IT services. Based in Uxbridge, serving the whole borough.",
  openGraph: {
    title: "IT Support in Hillingdon for Small Businesses",
    description:
      "Local IT support in Hillingdon for small businesses. Microsoft 365, VPNs, servers, and managed IT services.",
    url: "https://jbwebsolutions.co.uk/it-support-hillingdon",
  },
};

export default function HillingdonITSupportPage() {
  return (
    <main className="pt-0">
      <ServiceDetailHero
        icon="Headphones"
        title="IT Support in Hillingdon"
        description="Reliable IT support and consulting for small businesses across Hillingdon. Based in Uxbridge, we serve the whole borough with fast, practical IT support."
        iconColor="text-amber-400"
      />

      <section className="py-20 md:py-28 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              IT support for Hillingdon businesses
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Hillingdon is a large, diverse borough &mdash; from the business parks near the airport to the town centres of Uxbridge, Hayes, and Ruislip. We&apos;re based centrally in Uxbridge and support businesses throughout the entire Hillingdon area.
            </p>

            <h3 className="text-lg font-semibold text-white/90 mb-4">Serving all of Hillingdon</h3>
            <p className="text-white/60 mb-8">
              We work with businesses across Hillingdon including Uxbridge, Hayes, Ruislip, West Drayton, Yiewsley, Cowley, Denham, and Gerrards Cross. Whether you&apos;re in a business park, high street location, or working from home, we can provide you with IT support.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">What we help with</h3>
                <ul className="space-y-2 text-white/60">
                  <li>✓ Microsoft 365 setup and management</li>
                  <li>✓ VPN and remote access setup</li>
                  <li>✓ IT infrastructure planning</li>
                  <li>✓ Helpdesk support and monitoring</li>
                  <li>✓ Server and storage solutions</li>
                  <li>✓ Security and data protection</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">Why choose us for Hillingdon</h3>
                <ul className="space-y-2 text-white/60">
                  <li>✓ Local knowledge and understanding</li>
                  <li>✓ Fast response times</li>
                  <li>✓ Clear, straightforward pricing</li>
                  <li>✓ Personalized support tailored to you</li>
                  <li>✓ No long contracts or lock-in</li>
                  <li>✓ Proactive monitoring and maintenance</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 mb-12">
              <h3 className="text-lg font-semibold text-white/90 mb-4">Hillingdon business needs</h3>
              <p className="text-white/60 mb-4">
                We understand the unique IT challenges facing Hillingdon businesses:
              </p>
              <ul className="space-y-2 text-white/60">
                <li>• Multi-location businesses needing site-to-site connectivity</li>
                <li>• Businesses with teams split between office and remote work</li>
                <li>• Growing businesses that need to scale their IT</li>
                <li>• Compliance and security requirements</li>
                <li>• Cost-effective solutions that work for SMBs</li>
              </ul>
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
