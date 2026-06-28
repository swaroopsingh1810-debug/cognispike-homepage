import { Zap } from "lucide-react";

export const Logo = ({ className = "" }) => (
  <a href="#home" data-testid="brand-logo" className={`flex items-center gap-2 group ${className}`}>
    <span
      className="relative inline-flex h-8 w-8 items-center justify-center rounded-md"
      style={{
        background: "linear-gradient(135deg, rgba(163,230,53,0.18), rgba(124,58,237,0.18))",
        border: "1px solid rgba(163,230,53,0.45)",
        boxShadow: "0 0 18px rgba(163,230,53,0.35)",
      }}
    >
      <Zap size={16} className="text-[#a3e635]" strokeWidth={2.5} fill="#a3e635" />
    </span>
    <span className="font-display text-xl font-bold tracking-tight text-white">
      Cogni<span className="grad-text">Spike</span>
    </span>
  </a>
);
