import type { Metadata } from "next";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import LocationServiceGrid from "@/components/sections/LocationServiceGrid";

export const metadata: Metadata = {
  title: "IT Support in Uxbridge | Small Business IT Consulting | JB Web Solutions",
  description:
    "Local IT support in Uxbridge for small businesses. Microsoft 365, VPNs, servers, and managed IT services. Based in Uxbridge — fast response, free consultation.",
  openGraph: {
    title: "IT Support in Uxbridge for Small Businesses",
    description:
      "Local IT support in Uxbridge for small businesses. Microsoft 365, VPNs, servers, and managed IT services.",
    url: "https://jbwebsolutions.co.uk/it-support-uxbridge",
  },
};

export default function UxbridgeITSupportPage() {
  return (
    <main className="pt-0">
      <ServiceDetailHero
        icon="Headphones"
        title="IT Support in Uxbridge"
        description="Reliable IT support and consulting for small businesses in Uxbridge. Based locally, we understand the needs of businesses across Uxbridge and West London."
        iconColor="text-amber-400"
      />

      <section className="py-20 md:py-28 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              IT support for Uxbridge businesses
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              We&apos;re based in Uxbridge and have been supporting local businesses for years. We know the Uxbridge business community, and we&apos;re here when you need us. Whether you&apos;re in central Uxbridge, on the industrial estates, or in the surrounding West London areas, we&apos;ve got you covered.
            </p>

            <h3 className="text-lg font-semibold text-white/90 mb-4">Why work with a local IT provider?</h3>
            <ul className="space-y-3 text-white/60 mb-12">
              <li><strong>Fast response:</strong> We&apos;re local, so we can respond quickly to urgent issues.</li>
              <li><strong>Understanding of local businesses:</strong> We know the Uxbridge business environment.</li>
              <li><strong>Personalized service:</strong> You&apos;re not a ticket number. We take time to understand your business.</li>
              <li><strong>Direct contact:</strong> You get to know us, and we know you.</li>
              <li><strong>Flexibility:</strong> We can adapt to your business needs, not force you into a one-size-fits-all solution.</li>
            </ul>

            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 mb-12">
              <h3 className="text-lg font-semibold text-white/90 mb-4">Serving Uxbridge and surrounding areas</h3>
              <p className="text-white/60 mb-4">
                We provide IT support to businesses throughout Uxbridge and West London, including:
              </p>
              <p className="text-white/60">
                Uxbridge town centre, Hillingdon, Hayes, West Drayton, Yiewsley, Cowley, Denham, Gerrards Cross, Iver, and Langley. If you&apos;re in West London, we can help.
              </p>
            </div>

            <h3 className="text-lg font-semibold text-white/90 mb-4">Our commitment to Uxbridge businesses</h3>
            <ul className="space-y-2 text-white/60 mb-12">
              <li>✓ Same-day response to urgent issues</li>
              <li>✓ Straightforward pricing with no hidden fees</li>
              <li>✓ Clear communication (no IT jargon unless you want it)</li>
              <li>✓ Proactive monitoring to prevent problems before they start</li>
              <li>✓ Support for all platforms and devices</li>
            </ul>

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
