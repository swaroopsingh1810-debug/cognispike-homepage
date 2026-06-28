import { motion } from "framer-motion";
import { PhoneCall, Compass, Wrench, Rocket } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const STEPS = [
  { n: "01", icon: PhoneCall, title: "Discovery Call", desc: "We audit your current workflows and identify your biggest bottlenecks and opportunities." },
  { n: "02", icon: Compass,   title: "Strategy & Blueprint", desc: "We design a custom AI roadmap tailored to your business goals, tools, and budget." },
  { n: "03", icon: Wrench,    title: "Build & Integrate", desc: "Our team builds your AI systems and plugs them directly into your existing stack — no disruption." },
  { n: "04", icon: Rocket,    title: "Launch & Scale", desc: "We go live, monitor performance, and continuously optimize for maximum ROI." },
];

export const Process = () => {
  return (
    <section id="process" data-testid="process-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(60% 50% at 50% 0%, rgba(124,58,237,0.18), transparent 60%)"}}/>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="The Process"
          title="From Chaos to Clarity in"
          accent="4 Steps"
          testid="process-header"
        />

        <div className="mt-20 relative">
          {/* Connecting line - desktop */}
          <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-[2px] process-line rounded-full" />
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6 relative">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  data-testid={`process-step-${i}`}
                  className="relative"
                >
                  <div className="relative flex lg:flex-col items-start gap-5">
                    {/* Step number badge */}
                    <div
                      className="relative h-20 w-20 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        background: "linear-gradient(135deg, #0f0f1f, #16162a)",
                        border: "1px solid rgba(124,58,237,0.45)",
                        boxShadow: "0 0 30px rgba(124,58,237,0.35)",
                      }}
                    >
                      <span className="font-display text-3xl font-bold grad-text">{s.n}</span>
                    </div>
                    <div>
                      <Icon size={18} className="text-[#a3e635] mb-2 hidden lg:block"/>
                      <h3 className="font-display text-xl font-semibold">{s.title}</h3>
                      <p className="mt-2 text-[15px] text-gray-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
