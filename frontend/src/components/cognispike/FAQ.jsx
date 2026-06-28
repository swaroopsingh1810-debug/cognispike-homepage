import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const FAQS = [
  { q: "How long does it take to build and deploy a system?", a: "Most CogniSpike systems go live in 2–4 weeks. We move fast: discovery in week 1, blueprint by end of week 1, build & integration in weeks 2–3, and launch + optimization by week 4." },
  { q: "Do I need technical knowledge to use the systems you build?", a: "No. We design every system so your team can operate it with zero engineering background. You get clear dashboards, simple controls, and full documentation." },
  { q: "Will this work with my existing tools (HubSpot, Notion, Slack, etc.)?", a: "Yes. We integrate with 1000+ tools via native APIs, n8n, Make, and Zapier — including HubSpot, Salesforce, Notion, Slack, Gmail, Calendly, Stripe, and more." },
  { q: "What industries do you work with?", a: "We've shipped systems for e-commerce, real estate, healthcare, financial services, coaching, legal, logistics, recruitment, and marketing agencies." },
  { q: "How much does it cost?", a: "Pricing depends on scope. Most engagements start at a flat build fee plus a monthly retainer for optimization and support. We'll share an exact quote on your free strategy call." },
  { q: "What happens after the system goes live?", a: "We don't ghost you. CogniSpike monitors performance, ships improvements, and evolves the systems with your business. Ongoing support is included in every engagement." },
];

const Item = ({ q, a, open, onClick, idx }) => {
  return (
    <div
      data-testid={`faq-item-${idx}`}
      className="border-b border-white/10 py-2"
    >
      <button
        onClick={onClick}
        data-testid={`faq-toggle-${idx}`}
        className="w-full flex items-center justify-between gap-6 py-5 text-left"
        aria-expanded={open}
      >
        <span className="font-display text-lg sm:text-xl font-semibold text-white">{q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="h-9 w-9 shrink-0 rounded-full inline-flex items-center justify-center"
          style={{ border: "1px solid rgba(124,58,237,0.45)", background: "rgba(124,58,237,0.08)" }}
        >
          <Plus size={18} className="text-[#a3e635]" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-5 pr-12 text-[15px] text-gray-400 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQ = () => {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" data-testid="faq-section" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="FAQs"
          title="Questions?"
          accent="We've Got Answers."
          align="center"
          testid="faq-header"
        />
        <div className="mt-14">
          {FAQS.map((f, i) => (
            <Item
              key={f.q}
              idx={i}
              q={f.q}
              a={f.a}
              open={open === i}
              onClick={() => setOpen(open === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
