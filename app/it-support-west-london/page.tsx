import type { Metadata } from "next";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import LocationServiceGrid from "@/components/sections/LocationServiceGrid";

export const metadata: Metadata = {
  title: "IT Support in West London | Small Business IT Consulting | JB Web Solutions",
  description:
    "IT support and consulting for small businesses in West London. Microsoft 365, VPNs, servers, and managed services. Based in Uxbridge, serving Hillingdon and beyond.",
  openGraph: {
    title: "IT Support in West London for Small Businesses",
    description:
      "IT support and consulting for small businesses in West London. Microsoft 365, VPNs, servers, and managed services.",
    url: "https://jbwebsolutions.co.uk/it-support-west-london",
  },
};

export default function WestLondonITSupportPage() {
  return (
    <main className="pt-0">
      <ServiceDetailHero
        icon="Headphones"
        title="IT Support in West London"
        description="Reliable IT support and consulting for small businesses across West London. Based in Uxbridge, we serve businesses throughout the region."
        iconColor="text-amber-400"
      />

      <section className="py-20 md:py-28 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              IT support for West London businesses
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              West London is a vibrant business area spanning Hillingdon, Ealing, and Hounslow. From business parks to high streets, we support businesses across the region with practical, responsive IT support.
            </p>

            <h3 className="text-lg font-semibold text-white/90 mb-4">Where we operate in West London</h3>
            <p className="text-white/60 mb-8">
              Based in Uxbridge, we serve businesses throughout West London including Uxbridge, Hayes, Ruislip, West Drayton, Yiewsley, Cowley, Denham, Gerrards Cross, and Iver. We also work with businesses in surrounding areas of Ealing and Hounslow.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">Our IT services</h3>
                <ul className="space-y-2 text-white/60">
                  <li>✓ Microsoft 365 and cloud services</li>
                  <li>✓ Network and VPN setup</li>
                  <li>✓ Server and storage infrastructure</li>
                  <li>✓ Cybersecurity and data protection</li>
                  <li>✓ Helpdesk and remote support</li>
                  <li>✓ Business email and communications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">What makes us different</h3>
                <ul className="space-y-2 text-white/60">
                  <li>✓ Local presence and understanding</li>
                  <li>✓ Fast response to urgent issues</li>
                  <li>✓ Transparent, straightforward pricing</li>
                  <li>✓ Proactive monitoring and maintenance</li>
                  <li>✓ Flexible solutions for your needs</li>
                  <li>✓ No long-term contracts</li>
                </ul>
              </div>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 mb-12">
              <h3 className="text-lg font-semibold text-white/90 mb-4">West London IT challenges we solve</h3>
              <p className="text-white/60 mb-4">
                West London businesses face unique IT needs:
              </p>
              <ul className="space-y-2 text-white/60">
                <li>• Supporting remote and hybrid teams</li>
                <li>• Managing growth and scaling IT infrastructure</li>
                <li>• Integrating multiple office locations</li>
                <li>• Meeting security and compliance requirements</li>
                <li>• Managing IT costs effectively</li>
                <li>• Finding reliable local IT support</li>
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
