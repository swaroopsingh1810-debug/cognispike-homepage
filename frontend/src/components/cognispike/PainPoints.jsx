import { motion } from "framer-motion";
import {
  RefreshCw,
  TrendingDown,
  Puzzle,
  CircleDollarSign,
  Turtle,
  Target,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const PAINS = [
  { icon: RefreshCw,        title: "Drowning in Repetitive Tasks", desc: "Your team spends hours doing work a system could handle in seconds." },
  { icon: TrendingDown,     title: "Leads Falling Through the Cracks", desc: "No automated follow-up means lost revenue every single day." },
  { icon: Puzzle,           title: "Disconnected Tools, No Visibility", desc: "Scattered data and broken workflows keep you reacting instead of growing." },
  { icon: CircleDollarSign, title: "Scaling Means Hiring More", desc: "Growth shouldn't mean a bigger payroll. It should mean smarter systems." },
  { icon: Turtle,           title: "Slow Customer Response Times", desc: "Delayed responses cost you sales and reputation." },
  { icon: Target,           title: "No Clear ROI on Marketing", desc: "You're spending on campaigns but can't tell what's working." },
];

export const PainPoints = () => {
  return (
    <section id="problem" data-testid="problem-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="The Problem"
          title="Still Doing Everything"
          accent="Manually?"
          subtitle="Most businesses are bleeding time and money on repetitive work. Every hour your team spends on manual tasks is an hour not spent on growth."
          testid="problem-header"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PAINS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                data-testid={`pain-card-${i}`}
                className="card-dark p-7"
              >
                <div
                  className="h-12 w-12 rounded-xl inline-flex items-center justify-center mb-5"
                  style={{
                    background: "linear-gradient(135deg, rgba(124,58,237,0.2), rgba(6,182,212,0.18))",
                    border: "1px solid rgba(124,58,237,0.35)",
                    boxShadow: "0 0 24px rgba(124,58,237,0.25)",
                  }}
                >
                  <Icon size={22} className="text-[#06b6d4]" />
                </div>
                <h3 className="font-display text-xl font-semibold text-white">
                  {p.title}
                </h3>
                <p className="mt-3 text-[15px] text-gray-400 leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
