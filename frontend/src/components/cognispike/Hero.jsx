import { motion } from "framer-motion";
import { ChevronDown, Sparkles, ArrowRight } from "lucide-react";
import { CAL_URL } from "@/lib/constants";

const LOGOS = ["Make.com", "n8n", "WAPI", "Retell AI", "OpenAI", "Zapier", "HubSpot"];

export const Hero = () => {
  return (
    <section
      id="home"
      data-testid="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background layers */}
      <div className="hero-mesh" />
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />
      <div className="dot-grid" />
      <div className="absolute inset-0 grid-bg opacity-30 [mask-image:linear-gradient(180deg,black,transparent_85%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          {/* Badge */}
          <div
            data-testid="hero-badge"
            className="badge-glow inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium text-white/90 bg-white/[0.03] backdrop-blur-sm"
            style={{ border: "1px solid rgba(124, 58, 237, 0.5)" }}
          >
            <Sparkles size={14} className="text-[#a3e635]" />
            AI Automation Agency
          </div>

          {/* Headline */}
          <motion.h1
            data-testid="hero-headline"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display mt-6 text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.02] tracking-tight max-w-5xl"
          >
            Your Business, Running on{" "}
            <span className="grad-text">Autopilot.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-7 max-w-2xl text-lg sm:text-xl text-gray-300 leading-relaxed"
          >
            CogniSpike builds custom AI agents and automation systems that
            eliminate bottlenecks, cut costs, and scale your revenue —
            without adding headcount.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-wrap gap-4"
          >
            <a
              href={CAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="hero-cta-book-call"
              className="btn-lime px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base"
            >
              Book a Free Strategy Call
            </a>
            <a
              href="#process"
              data-testid="hero-cta-how-it-works"
              className="btn-ghost px-7 py-3.5 rounded-full font-semibold text-sm sm:text-base inline-flex items-center gap-2"
            >
              See How It Works <ArrowRight size={16} />
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            data-testid="hero-social-proof"
            className="mt-14 w-full"
          >
            <p className="text-xs uppercase tracking-[0.28em] text-gray-500 mb-4">
              Built with the tools that power modern automation
            </p>
            <div className="flex flex-wrap items-center gap-2.5">
              {LOGOS.map((l) => (
                <span
                  key={l}
                  data-testid={`tech-tag-${l.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
                  className="font-display text-sm text-gray-300 px-3.5 py-1.5 rounded-full transition-colors"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(124, 58, 237, 0.28)",
                  }}
                >
                  {l}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <a
          href="#problem"
          data-testid="hero-scroll-indicator"
          className="absolute left-1/2 -translate-x-1/2 bottom-6 text-gray-400 hover:text-white transition"
          aria-label="Scroll down"
        >
          <ChevronDown className="bounce-y" />
        </a>
      </div>
    </section>
  );
};
