import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const STATS = [
  { value: 10000, suffix: "+", label: "Hours Saved for Clients" },
  { value: 3,     suffix: "x", label: "Average Revenue Growth" },
  { value: 50,    suffix: "+", label: "Businesses Automated" },
  { value: 3,     prefix: "<", suffix: " wks", label: "Average Deployment Time" },
];

const TESTIMONIALS = [
  { quote: "CogniSpike completely transformed our lead follow-up process. We went from manually chasing leads to having 100% automated sequences that close while we sleep.", name: "Ravi K.", role: "Founder", company: "E-commerce Brand", initials: "RK" },
  { quote: "The AI support agent they built handles 80% of our customer queries. Our team now focuses only on complex cases. Game changer.", name: "Priya M.", role: "Operations Lead", company: "SaaS Company", initials: "PM" },
  { quote: "Within 30 days of launch, our sales pipeline doubled. The AI outreach system is insane.", name: "James T.", role: "CEO", company: "Consulting Firm", initials: "JT" },
];

const Counter = ({ value, prefix = "", suffix = "", testid }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const dur = 1600;
    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <span ref={ref} data-testid={testid} className="font-display text-5xl sm:text-6xl font-bold grad-text-strong">
      {prefix}{n.toLocaleString()}{suffix}
    </span>
  );
};

export const Results = () => {
  const scrollerRef = useRef(null);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    let raf;
    const step = () => {
      if (!paused) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 1) {
          el.scrollLeft = 0;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [paused]);

  return (
    <section id="results" data-testid="results-section" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{background:"radial-gradient(60% 60% at 50% 50%, rgba(6,182,212,0.10), transparent 60%)"}}/>
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="Results"
          title="The Numbers"
          accent="Speak for Themselves"
          testid="results-header"
        />

        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <div key={i} data-testid={`stat-${i}`} className="text-left">
              <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} testid={`stat-value-${i}`}/>
              <p className="mt-3 text-sm text-gray-400 max-w-[180px]">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials carousel */}
        <div
          ref={scrollerRef}
          onMouseEnter={()=>setPaused(true)}
          onMouseLeave={()=>setPaused(false)}
          data-testid="testimonials-carousel"
          className="mt-20 flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4"
        >
          {[...TESTIMONIALS, ...TESTIMONIALS].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-testid={`testimonial-${i}`}
              className="snap-start shrink-0 w-[88%] sm:w-[420px] card-dark p-7"
            >
              <Quote size={22} className="text-[#a3e635]" />
              <p className="mt-4 text-[17px] text-gray-200 leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div
                  className="h-11 w-11 rounded-full flex items-center justify-center font-display font-bold text-white"
                  style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)" }}
                >
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}, {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
