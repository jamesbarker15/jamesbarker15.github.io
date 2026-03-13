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
  title: "JB Web Solutions | Web Design & Development in Uxbridge, London",
  description:
    "Professional web design, custom web applications, SEO, and e-commerce solutions based in Uxbridge, West London. Websites that work as hard as you do.",
  keywords:
    "web design uxbridge, web development london, seo services, e-commerce, custom web apps, web design west london",
  openGraph: {
    title: "JB Web Solutions | Web Design & Development in Uxbridge, London",
    description:
      "Professional web design, custom web applications, SEO, and e-commerce solutions based in Uxbridge, West London.",
    url: "https://jbwebsolutions.co.uk",
    siteName: "JB Web Solutions",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JB Web Solutions | Web Design & Development",
    description:
      "Professional web design and development based in Uxbridge, West London.",
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
  return (
    <html lang="en" className={plusJakarta.variable}>
      <body className="bg-[#030303] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
