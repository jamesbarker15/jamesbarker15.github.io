import type { Metadata } from "next";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import LocationServiceGrid from "@/components/sections/LocationServiceGrid";

export const metadata: Metadata = {
  title: "Cybersecurity & Compliance for Small Businesses | JB Web Solutions",
  description:
    "MFA, Microsoft Defender, Intune device management, and security policies for small businesses in Uxbridge and West London. Protect your business from cyber threats.",
  openGraph: {
    title: "Cybersecurity & Compliance for Small Businesses",
    description:
      "MFA, Microsoft Defender, Intune device management, and security policies for small businesses in Uxbridge and West London.",
    url: "https://jbwebsolutions.co.uk/services/security-compliance",
  },
};

export default function SecurityCompliancePage() {
  return (
    <main className="pt-0">
      <ServiceDetailHero
        icon="Shield"
        title="Security & Compliance"
        description="MFA, Microsoft Defender, Intune device management, and security policies that actually hold. Protect your business data from cyber threats."
        iconColor="text-violet-400"
      />

      <section className="py-20 md:py-28 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Security is not optional
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Cyber threats are getting worse, not better. Every day brings new attacks targeting small businesses. You need basic security in place — multi-factor authentication, antivirus, device management, and strong policies.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">What&apos;s included</h3>
                <ul className="space-y-2 text-white/60">
                  <li>✓ Multi-factor authentication (MFA)</li>
                  <li>✓ Microsoft Defender (antivirus/anti-malware)</li>
                  <li>✓ Intune device management</li>
                  <li>✓ Security policy creation and enforcement</li>
                  <li>✓ Password management setup</li>
                  <li>✓ Security audit and risk assessment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">Common problems we solve</h3>
                <ul className="space-y-2 text-white/60">
                  <li>• Weak passwords and password reuse</li>
                  <li>• No MFA (vulnerable to account takeover)</li>
                  <li>• Lost or stolen laptops</li>
                  <li>• No antivirus or out-of-date antivirus</li>
                  <li>• Employees sharing admin passwords</li>
                  <li>• Ransomware and malware infections</li>
                </ul>
              </div>
            </div>

            <p className="text-white/60 mb-12 leading-relaxed">
              We implement practical, layered security so your team is protected without adding too much friction to their daily work.
            </p>

            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 mb-12">
              <h3 className="text-lg font-semibold text-white/90 mb-3">The security stack we recommend</h3>
              <div className="space-y-4 text-white/60">
                <div>
                  <p className="font-semibold text-white/80 mb-1">1. Multi-Factor Authentication (MFA)</p>
                  <p>The single biggest security improvement you can make. Stops 99% of account takeovers. We set it up on email, VPN, and admin accounts.</p>
                </div>
                <div>
                  <p className="font-semibold text-white/80 mb-1">2. Endpoint Protection</p>
                  <p>Microsoft Defender protects each device (laptop, desktop, phone) from malware, ransomware, and viruses.</p>
                </div>
                <div>
                  <p className="font-semibold text-white/80 mb-1">3. Device Management</p>
                  <p>Intune lets you enforce security policies on all devices (encryption, update schedules, app control).</p>
                </div>
                <div>
                  <p className="font-semibold text-white/80 mb-1">4. Strong Policies</p>
                  <p>Clear password policies, access controls, and user training so everyone understands security.</p>
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
