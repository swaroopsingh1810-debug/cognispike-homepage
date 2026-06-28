import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { CAL_URL } from "@/lib/constants";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#process" },
  { label: "Case Studies", href: "#results" },
  { label: "Pricing", href: "#faq" },
  { label: "Contact", href: "#footer" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-black/55 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={CAL_URL}
          target="_blank"
          rel="noopener noreferrer"
          data-testid="nav-cta-book-call"
          className="hidden lg:inline-flex btn-lime ring-pulse px-5 py-2.5 text-sm font-semibold rounded-full"
        >
          Book a Free Strategy Call
        </a>
        <button
          aria-label="Toggle menu"
          data-testid="mobile-menu-toggle"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden h-10 w-10 inline-flex items-center justify-center rounded-md border border-white/10 text-white"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        data-testid="mobile-drawer"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
        } bg-[#0b0b14]/95 backdrop-blur-xl border-b border-white/5`}
      >
        <div className="px-5 py-6 flex flex-col gap-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-base text-gray-200 py-1.5"
            >
              {l.label}
            </a>
          ))}
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="mobile-nav-cta"
            className="btn-lime text-center px-5 py-3 rounded-full text-sm font-semibold mt-2"
          >
            Book a Free Strategy Call
          </a>
        </div>
      </div>
    </header>
  );
};
