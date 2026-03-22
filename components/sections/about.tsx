"use client";

import React from "react";
import { useLanguage } from "../language-provider";
import Image from "next/image";
import { motion } from "motion/react";

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] py-12 px-4">
      <div
        className="matte-card p-8 md:p-16 max-w-4xl w-full flex flex-col items-center text-center gap-10 relative overflow-hidden group shadow-2xl border-primary/5 hover:border-neon-purple/20 transition-all duration-700"
      >
        {/* Neon Reflection Effect */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-neon-purple/5 rounded-full blur-[100px] group-hover:bg-neon-purple/10 transition-colors duration-700" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-neon-blue/5 rounded-full blur-[100px] group-hover:bg-neon-blue/10 transition-colors duration-700" />

        <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/10 shadow-2xl group-hover:border-neon-purple/30 group-hover:neon-glow-purple transition-all duration-700">
          <Image
            src="https://i.postimg.cc/HLzmwQxz/IMG-9248.png"
            alt="Soon Store"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 128px, 192px"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="flex flex-col gap-4 relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-gradient">Soon Store</h1>
          <p className="text-lg md:text-2xl text-foreground/40 font-semibold tracking-widest uppercase">{t("tagline")}</p>
        </div>
        
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent rounded-full relative z-10" />
        
        <p className="text-lg md:text-2xl leading-relaxed text-foreground/70 max-w-3xl font-medium relative z-10">
          {t("aboutDesc")}
        </p>

        <div className="flex gap-4 mt-4 relative z-10">
          <div className="w-2 h-2 rounded-full bg-neon-blue neon-glow-blue" />
          <div className="w-2 h-2 rounded-full bg-neon-purple neon-glow-purple" />
          <div className="w-2 h-2 rounded-full bg-neon-green neon-glow-green" />
        </div>
      </div>
    </div>
  );
}
