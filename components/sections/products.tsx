"use client";

import React from "react";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";
import { Bot, Globe, Palette, Rocket, Zap, ExternalLink } from "lucide-react";

const products = [
  {
    id: "customBots",
    titleKey: "customBots",
    descKey: "customBotsDesc",
    stockKey: "unlimited",
    price: "$20–60",
    icon: Bot,
    link: "#",
  },
  {
    id: "websites",
    titleKey: "websites",
    descKey: "websitesDesc",
    stockKey: "unlimited",
    price: "$7–25",
    icon: Globe,
    link: "#",
  },
  {
    id: "discordDesigns",
    titleKey: "discordDesigns",
    descKey: "discordDesignsDesc",
    stockKey: "unlimited",
    price: "$15–55",
    icon: Palette,
    link: "#",
  },
  {
    id: "discordBoosts",
    titleKey: "discordBoosts",
    descKey: "discordBoostsDesc",
    stockKey: "19 left",
    price: "7m=$3, 14m=$5.5, 14&3m=$13",
    icon: Rocket,
    link: "#",
  },
  {
    id: "discordNitros",
    titleKey: "discordNitros",
    descKey: "discordNitrosDesc",
    stockKey: "6 left",
    price: "$7.5",
    icon: Zap,
    link: "#",
  },
];

import { SectionHeader } from "../section-header";

export function ProductsSection() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center py-12">
      <SectionHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
        {products.map((product, index) => (
          <div
            key={product.id}
            className="matte-card p-8 flex flex-col gap-6 relative overflow-hidden group h-full shadow-sm hover:shadow-2xl transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-primary/5 border border-primary/5 group-hover:border-primary/20 transition-all duration-300">
                <product.icon className="w-10 h-10 text-primary/70" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight">{t(product.titleKey)}</h3>
            </div>
            
            <p className="text-foreground/60 leading-relaxed flex-grow text-sm">{t(product.descKey)}</p>
            
            <div className="flex flex-col gap-6 mt-auto">
              <div className="flex justify-between items-center pt-6 border-t border-primary/5">
                <div className="flex flex-col">
                  <span className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">{t("stock")}</span>
                  <span className="font-semibold">{product.stockKey === "unlimited" ? t("unlimited") : product.stockKey}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">{t("price")}</span>
                  <span className="font-bold text-2xl text-primary">{product.price}</span>
                </div>
              </div>
              
              <a
                href={product.link}
                className="w-full py-4 px-6 rounded-2xl bg-primary text-primary-foreground font-bold text-center flex items-center justify-center gap-2 hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-primary/20"
              >
                {t("goToLink")} <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
