import { motion } from "motion/react";
import React from "react";

export const COLORS = {
  primary: "#4361EE",
  secondary: "#4CC9F0",
  accent: "#FFD60A",
  support: "#72EFDD",
  background: "#F8F9FA",
  text: "#1E293B",
};

export const SectionTitle = ({ title, subtitle, icon: Icon }: any) => (
  <div className="mb-10 text-center">
    <div className="flex justify-center items-center gap-3 mb-2">
      <div className="w-8 h-8 rounded-lg bg-[#4361EE] flex items-center justify-center text-white shadow-md">
        <Icon size={18} />
      </div>
      <span className="text-sm font-bold text-[#4361EE] uppercase tracking-widest">
        {subtitle}
      </span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-[#2b2d42]">{title}</h2>
  </div>
);

export const BentoCard = ({ children, className = "", delay = 0 }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className={`bg-white/70 backdrop-blur-[15px] border border-white/80 rounded-[30px] p-8 shadow-[0_15px_35px_rgba(0,0,0,0.05)] hover:-translate-y-1 transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);
