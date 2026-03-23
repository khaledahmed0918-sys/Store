"use client";

import React from "react";
import { useLanguage } from "./language-provider";
import Image from "next/image";

interface FooterProps {
  setCurrentSection: (section: string) => void;
}

export function Footer({ setCurrentSection }: FooterProps) {
  const { t } = useLanguage();
  
  const sections = ["home", "aboutUs", "policies", "products", "orders", "support"];

  return (
    <footer className="glass border-t border-primary/10 mt-auto py-12 relative z-10 pb-32 md:pb-12 bg-background/50 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center gap-8">
        <div className="flex items-center gap-4 cursor-pointer group" onClick={() => setCurrentSection("home")}>
          <div className="relative w-12 h-12 transition-all duration-300 group-hover:scale-105">
            <Image src="https://i.postimg.cc/HLzmwQxz/IMG-9248.png" alt="Soon Store" fill className="object-contain" unoptimized />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-foreground group-hover:text-foreground/80 transition-colors">Soon Store</span>
            <span className="text-sm text-foreground/50">{t("tagline")}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm font-medium text-foreground/70">
          {sections.map((section) => (
            <button 
              key={section} 
              onClick={() => setCurrentSection(section)}
              className="hover:text-foreground transition-colors cursor-pointer px-3 py-1.5 rounded-lg hover:bg-primary/5"
            >
              {t(section)}
            </button>
          ))}
        </div>
        
        <div className="w-full h-px bg-primary/10 max-w-md" />
        
        <p className="text-sm text-foreground/40">{t("allRightsReserved")}</p>
      </div>
    </footer>
  );
}
