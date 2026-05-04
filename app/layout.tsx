import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "IT Support & Consulting for Small Businesses | Uxbridge, West London | JB Web Solutions",
  description:
    "Expert IT support and consulting for small businesses in Uxbridge and West London. Microsoft 365, VPNs, servers, and managed IT services. Free consultation.",
  keywords:
    "IT support Uxbridge, managed IT services West London, Microsoft 365 setup, IT consulting small business, business IT support, VPN setup",
  openGraph: {
    title: "IT Support & Consulting for Small Businesses | Uxbridge, West London",
    description:
      "Expert IT support and consulting for small businesses in Uxbridge and West London. Microsoft 365, VPNs, servers, and managed IT services.",
    url: "https://jbwebsolutions.co.uk",
    siteName: "JB Web Solutions",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Support & Consulting for Small Businesses",
    description:
      "Expert IT support and consulting for small businesses in Uxbridge and West London.",
  },
  alternates: {
    canonical: "https://jbwebsolutions.co.uk",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "JB Web Solutions",
    url: "https://jbwebsolutions.co.uk",
    telephone: "+447404793666",
    email: "james.barker132@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Uxbridge",
      addressRegion: "West London",
      addressCountry: "GB",
    },
    areaServed: [
      { "@type": "City", name: "Uxbridge" },
      { "@type": "City", name: "Hillingdon" },
      { "@type": "City", name: "Hayes" },
      { "@type": "AdministrativeArea", name: "West London" },
    ],
    serviceType: "IT Consulting and Managed IT Services",
    priceRange: "££",
  };

  return (
    <html lang="en" className={plusJakarta.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body className="bg-[#030303] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
