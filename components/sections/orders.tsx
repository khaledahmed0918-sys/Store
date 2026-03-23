"use client";

import React from "react";
import { useLanguage } from "../language-provider";
import { motion } from "motion/react";
import { Package, Clock, User } from "lucide-react";
import Image from "next/image";

const orders = [
  {
    id: "ORD-777",
    name: "Discord Nitros",
    quantity: 5,
    description: "Discord Nitro Monthly Gift Links",
    customerName: "Mohammed",
    price: "$25",
    time: "2026-03-22 15:30",
    progress: 71,
    iconUrl: "https://i.postimg.cc/GmgTX16R/u_VWd2G9V.png",
  },
];

import { SectionHeader } from "../section-header";

export function OrdersSection() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center py-12 max-w-5xl mx-auto w-full">
      <SectionHeader />
      
      <div className="flex flex-col gap-8 w-full">
        {orders.map((order, index) => (
          <div
            key={order.id}
            className="matte-card p-6 md:p-10 flex flex-col gap-8 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-primary/10 pb-6">
              <div className="flex items-center gap-5">
                <div className="relative w-14 h-14 transition-all duration-300">
                  {/* Neon Glow Layer */}
                  <Image src={order.iconUrl} alt="" fill className="object-contain p-2 blur-md opacity-60 dark:opacity-100 transition-all duration-500 dark:brightness-100 brightness-0" unoptimized />
                  {/* Main Icon */}
                  <Image src={order.iconUrl} alt={order.name} fill className="object-contain p-2 relative z-10 dark:brightness-100 brightness-0 transition-all duration-500" unoptimized />
                </div>
                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground">{order.name}</h3>
                  <span className="text-xs text-foreground/50 font-mono tracking-widest uppercase">{order.id}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 text-foreground/70 bg-primary/5 px-5 py-2.5 rounded-2xl border border-primary/10">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">{order.time}</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-5">
                <p className="text-foreground/70 leading-relaxed"><span className="font-bold text-foreground">{t("description")}:</span> {order.description}</p>
                <div className="flex items-center gap-3 text-foreground/70">
                  <User className="w-4 h-4 text-primary/60" />
                  <span className="font-bold text-foreground">{t("customerName")}:</span> {order.customerName}
                </div>
              </div>
              <div className="flex flex-col gap-4 md:items-end justify-center">
                <div className="flex items-center gap-12">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-foreground/50 uppercase tracking-widest font-bold">{t("quantity")}</span>
                    <span className="font-bold text-xl text-foreground">{order.quantity}</span>
                  </div>
                  <div className="flex flex-col items-end">
                    <span className="text-[10px] text-foreground/50 uppercase tracking-widest font-bold">{t("price")}</span>
                    <span className="font-bold text-3xl text-primary">{order.price}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold uppercase tracking-widest text-foreground/60">{t("progress")}</span>
                <span className="text-sm font-bold text-primary">{order.progress}%</span>
              </div>
              <div className="w-full h-3 bg-primary/10 rounded-full overflow-hidden border border-primary/10">
                <div
                  className="h-full bg-primary rounded-full relative"
                  style={{ width: `${order.progress}%` }}
                >
                  <div className="absolute inset-0 bg-white/20 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
