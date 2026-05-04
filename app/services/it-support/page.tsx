import type { Metadata } from "next";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import LocationServiceGrid from "@/components/sections/LocationServiceGrid";

export const metadata: Metadata = {
  title: "IT Support & Help Desk for Small Businesses | JB Web Solutions",
  description:
    "Reliable IT support and managed helpdesk services for small businesses in Uxbridge and West London. Remote assistance, proactive monitoring, 24/7 availability.",
  openGraph: {
    title: "IT Support & Help Desk for Small Businesses",
    description:
      "Reliable IT support and managed helpdesk services for small businesses in Uxbridge and West London.",
    url: "https://jbwebsolutions.co.uk/services/it-support",
  },
};

export default function ITSupportPage() {
  return (
    <main className="pt-0">
      <ServiceDetailHero
        icon="Headphones"
        title="IT Support & Help Desk"
        description="Remote helpdesk and proactive monitoring so issues get fixed before they become problems. One number to call when something goes wrong."
        iconColor="text-amber-400"
      />

      <section className="py-20 md:py-28 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              IT support that actually works
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              When your printer stops working or an employee can&apos;t access a file, you need help fast &mdash; not a 2-hour hold time. We offer responsive, practical IT support tailored to small businesses.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">What&apos;s included</h3>
                <ul className="space-y-2 text-white/60">
                  <li>✓ Remote assistance via phone/email/chat</li>
                  <li>✓ Proactive system monitoring</li>
                  <li>✓ Hardware and software issue resolution</li>
                  <li>✓ User account and access management</li>
                  <li>✓ Performance monitoring and optimization</li>
                  <li>✓ Ticket tracking and documentation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">Common problems we solve</h3>
                <ul className="space-y-2 text-white/60">
                  <li>• Printer connectivity issues</li>
                  <li>• Slow computer or network performance</li>
                  <li>• Email or file access problems</li>
                  <li>• Software installation and updates</li>
                  <li>• Forgotten passwords and lockouts</li>
                  <li>• Device troubleshooting (laptops, tablets)</li>
                </ul>
              </div>
            </div>

            <p className="text-white/60 mb-12 leading-relaxed">
              Unlike big IT providers, you get direct access to the same technician who knows your business. No phone trees, no waiting for tier-3 escalations.
            </p>

            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 mb-12">
              <h3 className="text-lg font-semibold text-white/90 mb-3">Proactive vs. reactive support</h3>
              <p className="text-white/60 mb-4">
                Most IT support is reactive — you call when something breaks. We do both:
              </p>
              <ul className="space-y-3 text-white/60">
                <li><strong>Proactive:</strong> We monitor your systems 24/7 for issues before they impact your team. Updates, backups, and security checks happen automatically.</li>
                <li><strong>Reactive:</strong> When you need help now, we respond fast. Phone support during business hours, email support anytime.</li>
              </ul>
            </div>

            <div className="text-center">
              <a
                href="/contact/"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all duration-200"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      <LocationServiceGrid />
    </main>
  );
}
