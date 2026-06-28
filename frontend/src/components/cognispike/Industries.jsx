import { motion } from "framer-motion";
import {
  ShoppingBag,
  Building2,
  HeartPulse,
  Landmark,
  Lightbulb,
  Scale,
  Truck,
  UserSearch,
  Megaphone,
} from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const INDUSTRIES = [
  { name: "E-commerce",          icon: ShoppingBag },
  { name: "Real Estate",         icon: Building2 },
  { name: "Healthcare",          icon: HeartPulse },
  { name: "Financial Services",  icon: Landmark },
  { name: "Coaching & Consulting", icon: Lightbulb },
  { name: "Legal",               icon: Scale },
  { name: "Logistics",           icon: Truck },
  { name: "Recruitment",         icon: UserSearch },
  { name: "Marketing Agencies",  icon: Megaphone },
];

export const Industries = () => {
  return (
    <section id="industries" data-testid="industries-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Industries"
          title="We Speak Your"
          accent="Industry's Language"
          testid="industries-header"
        />

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                data-testid={`industry-tile-${i}`}
                className="tile rounded-2xl px-6 py-7 flex items-center gap-4"
              >
                <span
                  className="h-11 w-11 rounded-xl inline-flex items-center justify-center"
                  style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  <Icon size={20} className="text-[#06b6d4]" />
                </span>
                <span className="font-display text-lg font-semibold">{it.name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
