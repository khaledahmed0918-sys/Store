"use client";

import React from "react";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";
import Image from "next/image";

import { SectionHeader } from "../section-header";

export function PoliciesSection() {
  const { t } = useLanguage();

  const policies = [
    t("policy1"),
    t("policy2"),
    t("policy3"),
    t("policy4"),
  ];

  return (
    <div className="flex flex-col items-center py-12">
      <SectionHeader />
      
      <div
        className="matte-card p-8 md:p-12 rounded-[2.5rem] max-w-2xl w-full flex flex-col gap-10 relative overflow-hidden shadow-xl border-primary/10"
      >
        <div className="flex items-center gap-5 border-b border-primary/10 pb-8">
          <div className="relative w-16 h-16 p-3 rounded-2xl bg-primary/5 border border-primary/10">
            {/* Neon Glow Layer */}
            <Image src="https://i.postimg.cc/t44VdgSF/ff_Sr_Swyx.png" alt="" fill className="object-contain p-3 blur-md opacity-60 dark:opacity-100 transition-all duration-500 dark:brightness-100 brightness-0" unoptimized />
            {/* Main Icon */}
            <Image src="https://i.postimg.cc/t44VdgSF/ff_Sr_Swyx.png" alt="Policies" fill className="object-contain p-3 relative z-10 dark:brightness-100 brightness-0 transition-all duration-500" unoptimized />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">{t("servicesPolicy")}</h2>
        </div>
        
        <ul className="flex flex-col gap-8">
          {policies.map((policy, index) => (
            <li
              key={index}
              className="flex items-start gap-5 text-lg"
            >
              <div className="mt-2 w-2.5 h-2.5 rounded-full bg-primary/30 flex-shrink-0" />
              <span className="text-foreground/70 font-medium leading-relaxed">{policy}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
