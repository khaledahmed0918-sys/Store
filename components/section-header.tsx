"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { useLanguage } from "./language-provider";

export function SectionHeader() {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center text-center mb-12 gap-4"
    >
      <div className="relative w-24 h-24 md:w-32 md:h-32">
        <Image
          src="https://i.postimg.cc/HLzmwQxz/IMG-9248.png"
          alt="Soon Store"
          fill
          className="object-contain dark:brightness-100 brightness-0"
          sizes="(max-width: 768px) 96px, 128px"
          referrerPolicy="no-referrer"
          unoptimized
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-gradient">
          Soon Store
        </h1>
        <p className="text-sm md:text-base text-foreground/60 font-medium max-w-md">
          {t("tagline")}
        </p>
      </div>
      <div className="w-12 h-1 bg-primary/20 rounded-full" />
    </motion.div>
  );
}
