import type { Metadata } from "next";
import ServiceDetailHero from "@/components/sections/ServiceDetailHero";
import LocationServiceGrid from "@/components/sections/LocationServiceGrid";

export const metadata: Metadata = {
  title: "Business Email Setup for Small Companies | JB Web Solutions",
  description:
    "Professional business email setup on your own domain. Microsoft 365 email, Google Workspace, or Exchange. Email migration and ongoing support in Uxbridge.",
  openGraph: {
    title: "Business Email Setup for Small Companies",
    description:
      "Professional business email setup on your own domain. Microsoft 365 email, Google Workspace, or Exchange.",
    url: "https://jbwebsolutions.co.uk/services/email-setup",
  },
};

export default function EmailSetupPage() {
  return (
    <main className="pt-0">
      <ServiceDetailHero
        icon="Mail"
        title="Professional Business Email"
        description="Professional email on your own domain — Microsoft 365, Google Workspace, or Exchange. Reliable, secure, and fully configured for your team."
        iconColor="text-rose-400"
      />

      <section className="py-20 md:py-28 bg-[#030303]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Email done right
            </h2>
            <p className="text-white/60 mb-8 leading-relaxed">
              Business email matters. It&apos;s what your customers use to contact you, how your team communicates, and how you manage projects. A bad email setup creates chaos. We get it right from day one.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">What&apos;s included</h3>
                <ul className="space-y-2 text-white/60">
                  <li>✓ Domain registration and setup (if needed)</li>
                  <li>✓ Email provider setup (M365, Google, Exchange)</li>
                  <li>✓ User account creation and licensing</li>
                  <li>✓ Migration from old email system</li>
                  <li>✓ Email client configuration (Outlook, Apple Mail)</li>
                  <li>✓ Security and spam filtering setup</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white/90 mb-3">Common problems we solve</h3>
                <ul className="space-y-2 text-white/60">
                  <li>• Using Gmail for business (unprofessional)</li>
                  <li>• Email scattered across different services</li>
                  <li>• Lost emails when employees leave</li>
                  <li>• Migrating from one platform to another</li>
                  <li>• Spam and security issues</li>
                  <li>• Email not working on phones or tablets</li>
                </ul>
              </div>
            </div>

            <p className="text-white/60 mb-12 leading-relaxed">
              We handle the entire process — from choosing the right platform to migrating your existing email history and training your team.
            </p>

            <div className="bg-white/[0.02] border border-white/[0.07] rounded-2xl p-8 mb-12">
              <h3 className="text-lg font-semibold text-white/90 mb-3">M365 vs. Google Workspace vs. Exchange</h3>
              <div className="space-y-4 text-white/60">
                <div>
                  <p className="font-semibold text-white/80 mb-1">Microsoft 365:</p>
                  <p>Best for Windows shops. Includes Office apps, Teams, SharePoint. Most flexible. Usually the best choice.</p>
                </div>
                <div>
                  <p className="font-semibold text-white/80 mb-1">Google Workspace:</p>
                  <p>Simple, affordable, works everywhere. Good if you use Google Docs and Drive heavily.</p>
                </div>
                <div>
                  <p className="font-semibold text-white/80 mb-1">On-Prem Exchange:</p>
                  <p>Maximum control, more expensive. Only if you have specific compliance needs.</p>
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
