import { motion } from "framer-motion";

export const SectionHeader = ({ eyebrow, title, subtitle, accent, align = "left", testid }) => {
  return (
    <motion.div
      data-testid={testid}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 className="font-display mt-4 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] tracking-tight">
        {title}{" "}
        {accent && <span className="grad-text">{accent}</span>}
      </h2>
      {subtitle && (
        <p className="mt-5 text-lg text-gray-400 leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
};
