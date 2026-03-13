import Link from "next/link";
import { Phone, Mail, MapPin, Github } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/[0.06] bg-[#030303]">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div className="space-y-4">
            <span className="text-lg font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-rose-400">
                JB
              </span>
              <span className="text-white/90"> Web Solutions</span>
            </span>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Professional web design and development based in Uxbridge, West
              London. Websites that work as hard as you do.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white/60 tracking-wider uppercase">
              Navigation
            </h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "Home" },
                { href: "/#services", label: "Services" },
                { href: "/#process", label: "Process" },
                { href: "/contact/", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-white/80 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white/60 tracking-wider uppercase">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+447404793666"
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-white/80 transition-colors"
                >
                  <Phone className="h-4 w-4 shrink-0" />
                  +44 7404 793666
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@jbwebsolutions.co.uk"
                  className="flex items-center gap-3 text-sm text-white/40 hover:text-white/80 transition-colors"
                >
                  <Mail className="h-4 w-4 shrink-0" />
                  hello@jbwebsolutions.co.uk
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/40">
                <MapPin className="h-4 w-4 shrink-0" />
                Uxbridge, West London
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            © {currentYear} JB Web Solutions. All rights reserved.
          </p>
          <a
            href="https://github.com/jbwebsolutions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/30 hover:text-white/60 transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
