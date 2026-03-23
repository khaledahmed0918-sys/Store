"use client";

import React from "react";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";
import Image from "next/image";

import { SectionHeader } from "../section-header";
import { Shield, CreditCard, RotateCcw, Users, Copyright } from "lucide-react";

export function PoliciesSection() {
  const { t } = useLanguage();

  const policies = [
    { icon: CreditCard, text: t("paymentPolicy"), desc: t("policy1") },
    { icon: RotateCcw, text: t("refundPolicy"), desc: t("policy2") },
    { icon: Users, text: t("conductPolicy"), desc: t("policy3") },
    { icon: Copyright, text: t("rightsPolicy"), desc: t("policy4") },
  ];

  return (
    <div className="flex flex-col items-center py-12">
      <SectionHeader />
      
      <div
        className="matte-card p-8 md:p-12 rounded-[2.5rem] max-w-2xl w-full flex flex-col gap-10 relative overflow-hidden shadow-xl border-primary/10"
      >
        <div className="flex items-center gap-5 border-b border-primary/10 pb-8">
          <div className="relative w-16 h-16 p-3 rounded-2xl bg-primary/5 border border-primary/10 flex items-center justify-center">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground">{t("servicesPolicy")}</h2>
        </div>
        
        <ul className="flex flex-col gap-8">
          {policies.map((policy, index) => (
            <li
              key={index}
              className="flex items-start gap-5 text-lg"
            >
              <div className="mt-1 w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <policy.icon className="w-5 h-5 text-primary" />
              </div>
              <div className="flex flex-col gap-1">
                <span className="font-bold text-foreground">{policy.text}</span>
                <span className="text-foreground/70 text-base leading-relaxed">{policy.desc}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
