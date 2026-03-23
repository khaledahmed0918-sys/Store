"use client";

import React from "react";
import { useLanguage } from "../language-provider";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const products = [
  {
    id: "customBots",
    titleKey: "customBots",
    descKey: "customBotsDesc",
    stockKey: "unlimited",
    price: "$20–60",
    iconUrl: "https://i.postimg.cc/htt78Gys/d_CW6Uazt.png",
    link: "#",
  },
  {
    id: "websites",
    titleKey: "websites",
    descKey: "websitesDesc",
    stockKey: "unlimited",
    price: "$7–25",
    iconUrl: "https://i.postimg.cc/3xxDjwSV/Ti_A7AOJP.png",
    link: "#",
  },
  {
    id: "discordDesigns",
    titleKey: "discordDesigns",
    descKey: "discordDesignsDesc",
    stockKey: "unlimited",
    price: "$15–55",
    iconUrl: "https://i.postimg.cc/t44VdgSF/ff_Sr_Swyx.png",
    link: "#",
  },
  {
    id: "discordBoosts",
    titleKey: "discordBoosts",
    descKey: "discordBoostsDesc",
    stockKey: "19 left",
    price: "7m=$3, 14m=$5.5, 14&3m=$13",
    iconUrl: "https://i.postimg.cc/JzHRWVGn/xgb1eg1d.png",
    link: "#",
  },
  {
    id: "discordNitros",
    titleKey: "discordNitros",
    descKey: "discordNitrosDesc",
    stockKey: "6 left",
    price: "$7.5",
    iconUrl: "https://i.postimg.cc/GmgTX16R/u_VWd2G9V.png",
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
            className="matte-card p-8 flex flex-col gap-6 relative overflow-hidden group h-full shadow-sm hover:shadow-2xl transition-all duration-300 border-primary/10 hover:border-primary/30"
          >
            <div className="flex items-center gap-5">
              <div className="relative w-14 h-14 transition-all duration-300">
                {/* Neon Glow Layer */}
                <Image src={product.iconUrl} alt="" fill className="object-contain p-2 blur-md opacity-60 dark:opacity-100 transition-all duration-500 dark:brightness-100 brightness-0" unoptimized />
                {/* Main Icon */}
                <Image src={product.iconUrl} alt={t(product.titleKey)} fill className="object-contain p-2 relative z-10 dark:brightness-100 brightness-0 transition-all duration-500" unoptimized />
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground">{t(product.titleKey)}</h3>
            </div>
            
            <p className="text-foreground/70 leading-relaxed flex-grow text-sm">{t(product.descKey)}</p>
            
            <div className="flex flex-col gap-6 mt-auto">
              <div className="flex justify-between items-center pt-6 border-t border-primary/10">
                <div className="flex flex-col">
                  <span className="text-[10px] text-foreground/50 uppercase tracking-widest font-bold">{t("stock")}</span>
                  <span className="font-semibold text-foreground">{product.stockKey === "unlimited" ? t("unlimited") : product.stockKey}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-foreground/50 uppercase tracking-widest font-bold">{t("price")}</span>
                  <span className="font-bold text-2xl text-primary">{product.price}</span>
                </div>
              </div>
              
              <a
                href={product.link}
                className="w-full py-4 px-6 rounded-2xl glass-button text-foreground font-bold text-center flex items-center justify-center gap-2"
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
