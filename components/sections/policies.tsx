"use client";

import React from "react";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";

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
        className="matte-card p-8 md:p-12 rounded-[2.5rem] max-w-2xl w-full flex flex-col gap-10 relative overflow-hidden shadow-xl"
      >
        <div className="flex items-center gap-5 border-b border-primary/5 pb-8">
          <div className="p-4 rounded-2xl bg-primary/5 border border-primary/5">
            <ShieldCheck className="w-8 h-8 text-primary/70" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight">{t("servicesPolicy")}</h2>
        </div>
        
        <ul className="flex flex-col gap-8">
          {policies.map((policy, index) => (
            <li
              key={index}
              className="flex items-start gap-5 text-lg"
            >
              <div className="mt-2 w-2.5 h-2.5 rounded-full bg-primary/20 flex-shrink-0" />
              <span className="text-foreground/70 font-medium leading-relaxed">{policy}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
