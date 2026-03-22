"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { useLanguage } from "../language-provider";
import { Bot, Globe, Palette, Rocket, Zap } from "lucide-react";

const products = [
  {
    id: "customBots",
    titleKey: "customBots",
    descKey: "customBotsDesc",
    stockKey: "unlimited",
    price: "$20–60",
    icon: Bot,
  },
  {
    id: "websites",
    titleKey: "websites",
    descKey: "websitesDesc",
    stockKey: "unlimited",
    price: "$7–25",
    icon: Globe,
  },
  {
    id: "discordDesigns",
    titleKey: "discordDesigns",
    descKey: "discordDesignsDesc",
    stockKey: "unlimited",
    price: "$15–55",
    icon: Palette,
  },
  {
    id: "discordBoosts",
    titleKey: "discordBoosts",
    descKey: "discordBoostsDesc",
    stockKey: "19 left",
    price: "7m=$3, 14m=$5.5, 14&3m=$13",
    icon: Rocket,
  },
  {
    id: "discordNitros",
    titleKey: "discordNitros",
    descKey: "discordNitrosDesc",
    stockKey: "6 left",
    price: "$7.5",
    icon: Zap,
  },
];

import { SectionHeader } from "../section-header";

export function HomeSection() {
  const { t } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative w-full flex flex-col items-center py-12 md:py-24">
      <SectionHeader />
      
      <div className="w-full max-w-5xl mx-auto mt-12 md:mt-24 relative px-4 sm:px-6">
        {/* Center Line Container */}
        <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-0 hidden md:block">
          {/* Background Line (Dashed) */}
          <div className="absolute inset-0 border-l-2 border-dashed border-primary/10" />
          {/* Animated Progress Line */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute top-0 left-[-1px] w-[3px] h-full bg-gradient-to-b from-primary/40 via-neon-blue/60 to-neon-green/80 rounded-full neon-glow-green"
          />
        </div>

        <div className="flex flex-col gap-16 md:gap-32 relative z-10">
          {products.map((product, index) => {
            const isStart = index % 2 === 0;
            return (
              <div
                key={product.id}
                className={`flex w-full flex-col md:flex-row ${isStart ? "md:justify-start" : "md:justify-end"} items-center relative gap-8 md:gap-0`}
              >
                {/* Timeline Dot (Desktop) */}
                <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 z-20 hidden md:flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="w-4 h-4 rounded-full border-4 border-background bg-neon-green neon-glow-green transition-colors duration-500"
                  />
                </div>

                {/* Card Container */}
                <div className={`w-full md:w-[calc(50%-3rem)] ${isStart ? "md:me-12" : "md:ms-12"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: isStart ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="matte-card p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden group shadow-sm hover:shadow-2xl border-primary/5 hover:border-neon-blue/20 transition-all duration-500"
                  >
                    {/* Neon Reflection Effect */}
                    <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-blue/5 rounded-full blur-3xl group-hover:bg-neon-blue/10 transition-colors duration-500" />
                    <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-purple/5 rounded-full blur-3xl group-hover:bg-neon-purple/10 transition-colors duration-500" />

                    <div className="flex items-center gap-5 relative z-10">
                      <div className="p-4 rounded-2xl bg-primary/5 border border-primary/5 group-hover:border-neon-blue/20 group-hover:neon-glow-blue transition-all duration-500">
                        <product.icon className="w-8 h-8 md:w-10 md:h-10 text-primary/70 group-hover:text-neon-blue transition-colors duration-500" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{t(product.titleKey)}</h3>
                    </div>
                    
                    <p className="text-foreground/60 text-base md:text-lg leading-relaxed relative z-10">{t(product.descKey)}</p>
                    
                    <div className="flex justify-between items-center mt-4 pt-6 border-t border-primary/5 relative z-10">
                      <div className="flex flex-col gap-1">
                        <span className="text-[10px] md:text-xs text-foreground/40 uppercase tracking-widest font-bold">{t("stock")}</span>
                        <span className="font-bold text-base md:text-lg">
                          {product.stockKey === "unlimited" ? t("unlimited") : `${t("left")} ${product.stockKey.split(' ')[0]}`}
                        </span>
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[10px] md:text-xs text-foreground/40 uppercase tracking-widest font-bold">{t("price")}</span>
                        <span className="font-black text-xl md:text-2xl text-gradient">{product.price}</span>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
