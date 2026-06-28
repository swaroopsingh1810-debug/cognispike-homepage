import { motion } from "framer-motion";
import { CAL_URL } from "@/lib/constants";

export const CTABanner = () => {
  return (
    <section data-testid="cta-banner-section" className="relative py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl px-8 sm:px-14 py-16 sm:py-20 text-center"
          style={{
            background:
              "radial-gradient(80% 120% at 50% 0%, rgba(124,58,237,0.5), rgba(26,5,51,0.9) 60%, #0a0a14 100%)",
            border: "1px solid rgba(124,58,237,0.4)",
            boxShadow: "0 40px 100px -20px rgba(124,58,237,0.45)",
          }}
        >
          <div className="absolute inset-0 dot-grid opacity-40 pointer-events-none" />
          <h2 className="relative font-display text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight max-w-3xl mx-auto">
            Ready to Build Your <span className="grad-text">AI-Powered Business?</span>
          </h2>
          <p className="relative mt-5 max-w-2xl mx-auto text-lg text-gray-300">
            Book a free 30-minute strategy call. We&apos;ll audit your workflows and show you exactly where AI can save you time and money — no pitch, no fluff.
          </p>
          <a
            href={CAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="cta-banner-button"
            className="btn-lime relative mt-9 inline-flex px-8 py-4 rounded-full font-semibold text-base"
          >
            Claim My Free Strategy Call
          </a>
          <p className="relative mt-4 text-sm text-gray-400">No commitment. No credit card. Just clarity.</p>
        </motion.div>
      </div>
    </section>
  );
};
