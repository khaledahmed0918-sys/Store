"use client";

import React, { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { useLanguage } from "../language-provider";
import Image from "next/image";
import { SectionHeader } from "../section-header";
import { Package, ShoppingCart, Headphones, Shield, Info } from "lucide-react";

interface HomeSectionProps {
  setCurrentSection?: (section: string) => void;
}

const timelineItems = [
  {
    id: "products-section",
    type: "section",
    titleKey: "products",
    descKey: "productsDesc",
    icon: Package,
    side: "left",
    sectionKey: "products",
  },
  {
    id: "customBots",
    type: "product",
    titleKey: "customBots",
    descKey: "customBotsDesc",
    stockKey: "unlimited",
    price: "$20–60",
    iconUrl: "https://i.postimg.cc/htt78Gys/d_CW6Uazt.png",
    side: "right",
  },
  {
    id: "orders-section",
    type: "section",
    titleKey: "orders",
    descKey: "ordersDesc",
    icon: ShoppingCart,
    side: "left",
    sectionKey: "orders",
  },
  {
    id: "websites",
    type: "product",
    titleKey: "websites",
    descKey: "websitesDesc",
    stockKey: "unlimited",
    price: "$7–25",
    iconUrl: "https://i.postimg.cc/3xxDjwSV/Ti_A7AOJP.png",
    side: "right",
  },
  {
    id: "support-section",
    type: "section",
    titleKey: "support",
    descKey: "supportDesc",
    icon: Headphones,
    side: "left",
    sectionKey: "support",
  },
  {
    id: "discordDesigns",
    type: "product",
    titleKey: "discordDesigns",
    descKey: "discordDesignsDesc",
    stockKey: "unlimited",
    price: "$15–55",
    iconUrl: "https://i.postimg.cc/t44VdgSF/ff_Sr_Swyx.png",
    side: "right",
  },
  {
    id: "policies-section",
    type: "section",
    titleKey: "policies",
    descKey: "policiesDesc",
    icon: Shield,
    side: "left",
    sectionKey: "policies",
  },
  {
    id: "discordBoosts",
    type: "product",
    titleKey: "discordBoosts",
    descKey: "discordBoostsDesc",
    stockKey: "19 left",
    price: "7m=$3, 14m=$5.5, 14&3m=$13",
    iconUrl: "https://i.postimg.cc/JzHRWVGn/xgb1eg1d.png",
    side: "right",
  },
  {
    id: "aboutUs-section",
    type: "section",
    titleKey: "aboutUs",
    descKey: "aboutUsDesc",
    icon: Info,
    side: "left",
    sectionKey: "aboutUs",
  },
  {
    id: "discordNitros",
    type: "product",
    titleKey: "discordNitros",
    descKey: "discordNitrosDesc",
    stockKey: "6 left",
    price: "$7.5",
    iconUrl: "https://i.postimg.cc/GmgTX16R/u_VWd2G9V.png",
    side: "right",
  },
];

export function HomeSection({ setCurrentSection }: HomeSectionProps) {
  const { t, language } = useLanguage();
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
      
      <div className="w-full max-w-6xl mx-auto mt-12 md:mt-24 relative px-4 sm:px-6">
        {/* Center Line Container */}
        <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 z-0 hidden md:block">
          {/* Background Line (Dashed) */}
          <div className="absolute inset-0 border-l-2 border-dashed border-primary/20" />
          {/* Animated Progress Line */}
          <motion.div
            style={{ scaleY, transformOrigin: "top" }}
            className="absolute top-0 left-[-1px] w-[3px] h-full bg-gradient-to-b from-primary/40 via-neon-blue/60 to-neon-green/80 rounded-full neon-glow-green"
          />
        </div>

        <div className="flex flex-col gap-12 md:gap-24 relative z-10">
          {timelineItems.map((item, index) => {
            const isLeft = item.side === "left";
            
            return (
              <div
                key={item.id}
                className={`flex w-full flex-col md:flex-row items-center relative gap-8 md:gap-0 ${isLeft ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 w-8 h-8 z-20 hidden md:flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full border-4 border-primary/30 bg-background transition-all" />
                </div>

                {/* Card Container */}
                <div className={`w-full pl-12 md:pl-0 md:w-[calc(50%-3rem)] ${isLeft ? 'md:mr-auto' : 'md:ml-auto'}`}>
                    <div
                      onClick={() => {
                        if (item.type === 'section' && setCurrentSection && item.sectionKey) {
                          setCurrentSection(item.sectionKey);
                        }
                      }}
                      className={`matte-card p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden group shadow-sm hover:shadow-2xl border-primary/10 hover:border-primary/30 transition-all duration-300 ${item.type === 'section' ? 'cursor-pointer hover:bg-primary/5' : ''}`}
                    >
                      {/* Neon Reflection Effect (Optimized blur) */}
                      <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-blue/5 rounded-full blur-xl group-hover:bg-neon-blue/10 transition-colors duration-300" />
                      <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-neon-purple/5 rounded-full blur-xl group-hover:bg-neon-purple/10 transition-colors duration-300" />

                      <div className="flex items-center gap-5 relative z-10">
                        <div className="relative w-12 h-12 md:w-16 md:h-16 flex items-center justify-center flex-shrink-0 text-primary">
                          {item.iconUrl ? (
                            <>
                              <Image src={item.iconUrl} alt="" fill className="object-contain p-2 blur-md opacity-60 dark:opacity-100 transition-all duration-300 dark:brightness-100 brightness-0" unoptimized />
                              <Image src={item.iconUrl} alt={t(item.titleKey)} fill className="object-contain p-2 relative z-10 dark:brightness-100 brightness-0 transition-all duration-300" unoptimized />
                            </>
                          ) : item.icon ? (
                            <item.icon className="w-8 h-8 md:w-10 md:h-10" />
                          ) : null}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">{t(item.titleKey)}</h3>
                      </div>
                      
                      <p className="text-foreground/70 text-base md:text-lg leading-relaxed relative z-10">{t(item.descKey)}</p>
                      
                      {item.type === 'product' && (
                        <div className="flex justify-between items-center mt-4 pt-6 border-t border-primary/10 relative z-10">
                          <div className="flex flex-col gap-1">
                            <span className="text-[10px] md:text-xs text-foreground/50 uppercase tracking-widest font-bold">{t("stock")}</span>
                            <span className="font-bold text-base md:text-lg text-foreground">
                              {item.stockKey === "unlimited" ? t("unlimited") : `${t("left")} ${item.stockKey?.split(' ')[0]}`}
                            </span>
                          </div>
                          <div className="flex flex-col items-end gap-1">
                            <span className="text-[10px] md:text-xs text-foreground/50 uppercase tracking-widest font-bold">{t("price")}</span>
                            <span className="font-black text-xl md:text-2xl text-gradient">{item.price}</span>
                          </div>
                        </div>
                      )}

                      {item.type === 'section' && (
                        <div className="flex items-center justify-end mt-4 pt-6 border-t border-primary/10 relative z-10">
                          <span className="text-sm font-bold text-primary group-hover:translate-x-1 transition-transform flex items-center gap-2">
                            {t("viewSection")} {language === 'ar' ? '←' : '→'}
                          </span>
                        </div>
                      )}
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
