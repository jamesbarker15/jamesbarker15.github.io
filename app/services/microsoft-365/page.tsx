import type { Metadata } from "next";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import LocationServiceGrid from "@/components/sections/LocationServiceGrid";

export const metadata: Metadata = {
  title: "Microsoft 365 Setup & Support for Small Businesses | JB Web Solutions",
  description:
    "Professional Microsoft 365 setup, migration, and management for small businesses in Uxbridge and West London. Teams, SharePoint, Exchange — fully configured.",
  openGraph: {
    title: "Microsoft 365 Setup & Support for Small Businesses",
    description:
      "Professional Microsoft 365 setup, migration, and management for small businesses in Uxbridge and West London.",
    url: "https://jbwebsolutions.co.uk/services/microsoft-365",
  },
};

export default function Microsoft365Page() {
  return (
    <main className="pt-0">
      <ServiceDetailHero
        icon="Monitor"
        title="Microsoft 365 Setup & Support"
        description="Full setup, migration, and ongoing management of Microsoft 365. Email, Teams, SharePoint, and OneDrive configured to work perfectly for your business."
        iconColor="text-indigo-400"
      />

      <section className="py-20 md:py-28 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why M365 matters for small businesses
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Microsoft 365 is no longer optional &mdash; it&apos;s the foundation of how modern teams work. Email, collaboration, document management, and security all in one integrated platform.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">What&apos;s included</h3>
                <ul className="space-y-2 text-white/60">
                  <li>✓ Professional business email</li>
                  <li>✓ Teams for calls, chat, and meetings</li>
                  <li>✓ SharePoint for file sharing and collaboration</li>
                  <li>✓ OneDrive for cloud storage</li>
                  <li>✓ Exchange for calendar and contacts</li>
                  <li>✓ 24/7 support and updates included</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">Common problems we solve</h3>
                <ul className="space-y-2 text-white/60">
                  <li>• Struggling with old email systems</li>
                  <li>• Files scattered across devices</li>
                  <li>• Remote team communication issues</li>
                  <li>• Migrating from Google Workspace or legacy systems</li>
                  <li>• User licensing confusion</li>
                  <li>• Security and compliance worries</li>
                </ul>
              </div>
            </div>

            <p className="text-white/60 mb-12 leading-relaxed">
              We handle the full setup — from planning your license structure to migrating your existing email, training your team, and ongoing support.
            </p>

            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 mb-12">
              <h3 className="text-lg font-semibold text-white/90 mb-3">Our process</h3>
              <ol className="space-y-3 text-white/60">
                <li><strong>1. Planning:</strong> We assess your team size, usage patterns, and licensing needs.</li>
                <li><strong>2. Setup:</strong> We create accounts, configure domains, and set up your infrastructure.</li>
                <li><strong>3. Migration:</strong> We safely migrate your email and files from your old system.</li>
                <li><strong>4. Training:</strong> Quick session with your team on how to use M365 effectively.</li>
                <li><strong>5. Support:</strong> Ongoing helpdesk and proactive management to keep things running smoothly.</li>
              </ol>
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
