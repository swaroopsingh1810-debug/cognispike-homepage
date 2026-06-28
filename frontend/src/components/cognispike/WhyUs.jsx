import { motion } from "framer-motion";
import { Zap, Rocket, Link2, Brain, BarChart, Shield } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const DIFFS = [
  { icon: Zap,   title: "Built for Your Business, Not the Masses", desc: "Every system is custom-built. No templates, no one-size-fits-all." },
  { icon: Rocket,title: "Fast Deployment", desc: "From strategy to live system in 2–4 weeks, not months." },
  { icon: Link2, title: "Full-Stack Integration", desc: "We work with your existing CRM, email, calendar, and tools — no rip-and-replace." },
  { icon: Brain, title: "AI + Human Expertise", desc: "AI builds it, our strategists optimize it for your specific industry and goals." },
  { icon: BarChart, title: "ROI-Focused, Always", desc: "We measure success in time saved, leads generated, and revenue grown." },
  { icon: Shield, title: "Ongoing Support", desc: "We're not a one-and-done agency. We monitor, maintain, and evolve your systems." },
];

export const WhyUs = () => {
  return (
    <section id="why-us" data-testid="whyus-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Why Us"
          title="Not Just AI Tools."
          accent="A Complete AI Infrastructure Partner."
          testid="whyus-header"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {DIFFS.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                data-testid={`whyus-card-${i}`}
                className="card-dark card-gradient-top p-7 flex gap-5"
              >
                <div
                  className="h-12 w-12 shrink-0 rounded-xl inline-flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.22), rgba(6,182,212,0.2))",
                    border: "1px solid rgba(124,58,237,0.4)",
                  }}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold">{d.title}</h3>
                  <p className="mt-2 text-[15px] text-gray-400 leading-relaxed">{d.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
