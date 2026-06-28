import { motion } from "framer-motion";
import { Bot, Workflow, Magnet, BarChart3 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const SERVICES = [
  {
    icon: Bot,
    title: "AI Agents & Chatbots",
    desc: "Custom conversational AI agents for sales, support, and lead qualification — deployed on your website, WhatsApp, or CRM. Available 24/7, never takes a day off.",
    mock: "chat",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    desc: "We map and automate your most time-consuming workflows using n8n, Make, or Zapier — integrating all your tools into one seamless, hands-free operation.",
    mock: "flow",
  },
  {
    icon: Magnet,
    title: "AI-Powered Lead Generation",
    desc: "Automated outreach systems, AI-written personalized sequences, and smart CRM pipelines that fill your calendar with qualified prospects on autopilot.",
    mock: "leads",
  },
  {
    icon: BarChart3,
    title: "Data, Reporting & Business Intelligence",
    desc: "Real-time dashboards and AI-driven analytics that surface insights, flag opportunities, and help you make faster, smarter decisions.",
    mock: "chart",
  },
];

const Mockup = ({ kind }) => {
  return (
    <div
      className="relative w-full h-full min-h-[280px] rounded-2xl overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0b0b16, #0f0f1f)",
        border: "1px solid rgba(124,58,237,0.25)",
        boxShadow: "0 30px 60px -20px rgba(124,58,237,0.35), inset 0 0 0 1px rgba(255,255,255,0.04)",
      }}
    >
      <div className="absolute inset-0 dot-grid opacity-40" />
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/5">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        <span className="ml-3 text-[11px] uppercase tracking-widest text-gray-500">cognispike / live</span>
      </div>

      <div className="p-5 relative h-[calc(100%-44px)]">
        {kind === "chat" && (
          <div className="space-y-3">
            <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/5 p-3 text-sm text-gray-200">Hi! I&apos;d like to know your pricing.</div>
            <div className="max-w-[80%] ml-auto rounded-2xl rounded-tr-sm p-3 text-sm" style={{background:"linear-gradient(135deg,#7c3aed,#06b6d4)", color:"#fff"}}>
              Sure — our starter plan begins at $X. Want me to book a demo?
            </div>
            <div className="max-w-[60%] rounded-2xl rounded-tl-sm bg-white/[0.06] border border-white/5 p-3 text-sm text-gray-200">Yes, tomorrow 4pm.</div>
            <div className="flex items-center gap-1.5 text-xs text-[#a3e635]"><span className="h-1.5 w-1.5 rounded-full bg-[#a3e635] animate-pulse"/>AI agent typing…</div>
          </div>
        )}
        {kind === "flow" && (
          <div className="grid grid-cols-3 gap-3 h-full content-center">
            {["Trigger","Enrich","Score","Notify","Sync CRM","Email"].map((n)=>(
              <div key={n} className="rounded-lg border border-white/5 bg-white/[0.03] px-3 py-3 text-xs text-gray-300 text-center">
                {n}
              </div>
            ))}
            <div className="col-span-3 h-1 process-line rounded-full mt-2"/>
          </div>
        )}
        {kind === "leads" && (
          <div className="space-y-2">
            {[
              ["Acme Corp", "Hot", "92"],
              ["Northwind", "Warm", "78"],
              ["Globex", "Hot", "88"],
              ["Initech", "Cold", "41"],
            ].map(([n, t, s])=>(
              <div key={n} className="flex items-center justify-between rounded-md border border-white/5 bg-white/[0.03] px-3 py-2 text-sm">
                <span className="text-gray-200">{n}</span>
                <span className="text-xs text-gray-400">{t}</span>
                <span className="text-xs font-mono text-[#a3e635]">{s}</span>
              </div>
            ))}
          </div>
        )}
        {kind === "chart" && (
          <div className="h-full flex flex-col justify-end gap-3">
            <div className="grid grid-cols-7 gap-2 items-end h-32">
              {[40,60,55,80,72,90,68].map((h,i)=>(
                <div key={i} className="rounded-t" style={{height:`${h}%`, background:`linear-gradient(180deg,#06b6d4,#7c3aed)`}}/>
              ))}
            </div>
            <div className="flex justify-between text-[10px] text-gray-500 uppercase tracking-widest">
              <span>Revenue</span><span>+ 248% MoM</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const Services = () => {
  return (
    <section id="services" data-testid="services-section" className="relative py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <SectionHeader
          eyebrow="What We Build"
          title="AI Systems Engineered for"
          accent="Real Business Results"
          subtitle="We don't sell software. We build custom AI infrastructure that becomes your biggest competitive advantage."
          testid="services-header"
        />

        <div className="mt-20 space-y-24">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            const reverse = i % 2 === 1;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6 }}
                data-testid={`service-row-${i}`}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div>
                  <div
                    className="h-12 w-12 rounded-xl inline-flex items-center justify-center"
                    style={{
                      background: "linear-gradient(135deg, rgba(163,230,53,0.15), rgba(124,58,237,0.18))",
                      border: "1px solid rgba(163,230,53,0.4)",
                      boxShadow: "0 0 28px rgba(163,230,53,0.25)",
                    }}
                  >
                    <Icon size={22} className="text-[#a3e635]" />
                  </div>
                  <p className="eyebrow mt-5">Service {String(i + 1).padStart(2, "0")}</p>
                  <h3 className="font-display mt-3 text-3xl sm:text-4xl font-bold leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-4 text-gray-400 text-[17px] leading-relaxed">{s.desc}</p>
                </div>
                <Mockup kind={s.mock} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
