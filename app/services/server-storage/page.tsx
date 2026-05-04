import type { Metadata } from "next";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import LocationServiceGrid from "@/components/sections/LocationServiceGrid";

export const metadata: Metadata = {
  title: "Server & Storage Setup for Small Businesses | JB Web Solutions",
  description:
    "Windows Server setup, NAS configuration, backups, and on-prem/hybrid infrastructure for small businesses in Uxbridge and West London. Reliable data storage and backup.",
  openGraph: {
    title: "Server & Storage Setup for Small Businesses",
    description:
      "Windows Server setup, NAS configuration, backups, and on-prem/hybrid infrastructure for small businesses in Uxbridge and West London.",
    url: "https://jbwebsolutions.co.uk/services/server-storage",
  },
};

export default function ServerStoragePage() {
  return (
    <main className="pt-0">
      <ServiceDetailHero
        icon="HardDrive"
        title="Server & Storage Setup"
        description="Windows Server setup, NAS configuration, backups, and on-prem or hybrid infrastructure. Keep your data safe and accessible."
        iconColor="text-cyan-400"
      />

      <section className="py-20 md:py-28 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Server and storage infrastructure that works
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Whether you need on-premises servers, network attached storage, or a hybrid setup spanning cloud and local, we design solutions that are reliable, secure, and scalable.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">What&apos;s included</h3>
                <ul className="space-y-2 text-white/60">
                  <li>✓ Windows Server setup and configuration</li>
                  <li>✓ NAS (Network Attached Storage) setup</li>
                  <li>✓ Automated backup solutions</li>
                  <li>✓ Disaster recovery planning</li>
                  <li>✓ RAID and redundancy configuration</li>
                  <li>✓ Storage monitoring and optimization</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">Common problems we solve</h3>
                <ul className="space-y-2 text-white/60">
                  <li>• No backup strategy in place</li>
                  <li>• Outdated server hardware</li>
                  <li>• Files scattered across USB drives and laptops</li>
                  <li>• Slow server performance</li>
                  <li>• Running out of storage space</li>
                  <li>• No disaster recovery plan</li>
                </ul>
              </div>
            </div>

            <p className="text-white/60 mb-12 leading-relaxed">
              The right storage infrastructure keeps your data safe, improves team productivity, and protects you against data loss. We help you choose the right approach for your business.
            </p>

            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 mb-12">
              <h3 className="text-lg font-semibold text-white/90 mb-3">On-prem vs. Cloud: Which is right for you?</h3>
              <div className="space-y-4 text-white/60">
                <div>
                  <p className="font-semibold text-white/80 mb-1">On-Premises:</p>
                  <p>Full control, potentially lower costs at scale, good for regulated data. Requires maintenance.</p>
                </div>
                <div>
                  <p className="font-semibold text-white/80 mb-1">Cloud (Azure, AWS):</p>
                  <p>Scalable, automatic backups, low upfront cost, access from anywhere. Less control.</p>
                </div>
                <div>
                  <p className="font-semibold text-white/80 mb-1">Hybrid:</p>
                  <p>Best of both. Local servers for daily access, cloud for backups and disaster recovery.</p>
                </div>
              </div>
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
