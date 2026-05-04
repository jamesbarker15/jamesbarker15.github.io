import type { Metadata } from "next";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import LocationServiceGrid from "@/components/sections/LocationServiceGrid";

export const metadata: Metadata = {
  title: "VPN & Networking for Small Businesses | JB Web Solutions",
  description:
    "Secure VPN setup and network configuration for small businesses in Uxbridge and West London. Site-to-site VPNs, remote access, network performance optimization.",
  openGraph: {
    title: "VPN & Networking for Small Businesses",
    description:
      "Secure VPN setup and network configuration for small businesses in Uxbridge and West London.",
    url: "https://jbwebsolutions.co.uk/services/vpn-networking",
  },
};

export default function VPNNetworkingPage() {
  return (
    <main className="pt-0">
      <ServiceDetailHero
        icon="Network"
        title="VPN & Network Setup"
        description="Site-to-site VPNs, secure remote access, and network configuration for your office or team. Keep your data safe while working from anywhere."
        iconColor="text-sky-400"
      />

      <section className="py-20 md:py-28 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Secure networks for remote teams
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              With teams now split between home and office, you need a network that&apos;s both secure and fast. A bad VPN setup leads to slow connections and security risks. We get it right.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">What&apos;s included</h3>
                <ul className="space-y-2 text-white/60">
                  <li>✓ Site-to-site VPN configuration</li>
                  <li>✓ Remote access setup (VPN, RDP, VDI)</li>
                  <li>✓ Firewall and security policies</li>
                  <li>✓ Network performance tuning</li>
                  <li>✓ Wi-Fi optimization (if needed)</li>
                  <li>✓ Documentation and training</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">Common problems we solve</h3>
                <ul className="space-y-2 text-white/60">
                  <li>• Slow VPN connections</li>
                  <li>• Dropped connections when working remotely</li>
                  <li>• Confused about firewall rules</li>
                  <li>• Connecting multiple office locations</li>
                  <li>• Remote access for contractors/visitors</li>
                  <li>• Bandwidth bottlenecks</li>
                </ul>
              </div>
            </div>

            <p className="text-white/60 mb-12 leading-relaxed">
              Whether you need a simple remote access solution or a complex multi-site network, we design it for performance and security.
            </p>

            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 mb-12">
              <h3 className="text-lg font-semibold text-white/90 mb-3">Why this matters</h3>
              <ul className="space-y-3 text-white/60">
                <li><strong>Security:</strong> A properly configured VPN keeps your business data safe from hackers and snooping.</li>
                <li><strong>Performance:</strong> Badly configured VPNs are painfully slow. We optimize for both speed and security.</li>
                <li><strong>Reliability:</strong> If your VPN is down, your remote team is disconnected. We ensure it stays up.</li>
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
