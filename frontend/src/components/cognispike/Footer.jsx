import { Linkedin, Twitter, Youtube, Instagram, ArrowRight } from "lucide-react";
import { Logo } from "./Logo";
import { CAL_URL, DOMAIN } from "@/lib/constants";

const SOCIALS = [
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "Twitter",  icon: Twitter,  href: "#" },
  { name: "YouTube",  icon: Youtube,  href: "#" },
  { name: "Instagram",icon: Instagram,href: "#" },
];

const LINKS = ["Services", "About", "Case Studies", "Blog", "Privacy Policy", "Terms"];

export const Footer = () => {
  return (
    <footer
      id="footer"
      data-testid="footer-section"
      className="relative overflow-hidden pt-24 pb-10"
      style={{
        background:
          "radial-gradient(80% 80% at 50% 0%, rgba(124,58,237,0.35), rgba(26,5,51,0.85) 50%, #07070d 100%)",
        borderTop: "1px solid rgba(124,58,237,0.25)",
      }}
    >
      <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
            The Smartest Investment <br className="hidden sm:block" />
            You&apos;ll Make This <span className="grad-text">Year.</span>
          </h2>
          <p className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto">
            Let&apos;s build the AI infrastructure your competitors wish they had.
          </p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="footer-cta-book-call"
            className="btn-lime mt-9 inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold"
          >
            Book My Free Call <ArrowRight size={16} />
          </a>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-10 items-start border-t border-white/10 pt-10">
          <div>
            <Logo />
            <p className="mt-4 text-sm text-gray-400 max-w-xs">
              Custom AI agents, automation systems, and intelligence — built to make your business run on autopilot.
            </p>
          </div>
          <div className="md:justify-self-center">
            <p className="eyebrow">Navigate</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-10 gap-y-3">
              {LINKS.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    data-testid={`footer-link-${l.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm text-gray-300 hover:text-white transition"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:justify-self-end">
            <p className="eyebrow">Follow</p>
            <div className="mt-5 flex items-center gap-3">
              {SOCIALS.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    aria-label={s.name}
                    data-testid={`footer-social-${s.name.toLowerCase()}`}
                    className="h-10 w-10 rounded-full inline-flex items-center justify-center text-gray-300 hover:text-white transition"
                    style={{ border: "1px solid rgba(255,255,255,0.15)" }}
                    onMouseEnter={(e)=>{e.currentTarget.style.boxShadow="0 0 18px rgba(124,58,237,0.6)"; e.currentTarget.style.borderColor="rgba(124,58,237,0.7)";}}
                    onMouseLeave={(e)=>{e.currentTarget.style.boxShadow="none"; e.currentTarget.style.borderColor="rgba(255,255,255,0.15)";}}
                  >
                    <Icon size={16} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p data-testid="footer-copyright">© 2025 CogniSpike. All rights reserved.</p>
          <p>{DOMAIN}</p>
        </div>
      </div>
    </footer>
  );
};
