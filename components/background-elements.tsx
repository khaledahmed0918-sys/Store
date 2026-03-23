"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface BgElement {
  src: string;
  size: number;
  animation: string;
  opacity: number;
  top: string;
  left: string;
}

export function BackgroundElements() {
  const elements = [
    { src: "https://i.postimg.cc/Hkv86CRZ/gq_Oss_JR5.png", size: 96, opacity: 0.3, top: "15%", left: "10%" },
    { src: "https://i.postimg.cc/wj4Rwdnd/4REp_Nsla.png", size: 128, opacity: 0.3, top: "25%", left: "75%" },
    { src: "https://i.postimg.cc/GmgTX16R/u_VWd2G9V.png", size: 80, opacity: 0.2, top: "55%", left: "15%" },
    { src: "https://i.postimg.cc/3xxDjwSV/Ti_A7AOJP.png", size: 112, opacity: 0.2, top: "65%", left: "70%" },
    { src: "https://i.postimg.cc/t44VdgSF/ff_Sr_Swyx.png", size: 64, opacity: 0.2, top: "35%", left: "5%" },
    { src: "https://i.postimg.cc/htt78Gys/d_CW6Uazt.png", size: 96, opacity: 0.2, top: "80%", left: "20%" },
    { src: "https://i.postimg.cc/JzHRWVGn/xgb1eg1d.png", size: 80, opacity: 0.2, top: "85%", left: "80%" },
  ];

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none w-full h-full">
      {/* Floating Icons */}
      {elements.map((el, idx) => (
        <motion.div
          key={idx}
          className="absolute"
          style={{
            top: el.top,
            left: el.left,
            opacity: el.opacity,
            width: el.size,
            height: el.size,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, 15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: idx * 1.5,
          }}
        >
          <Image src={el.src} alt="bg" fill className="object-contain" unoptimized />
        </motion.div>
      ))}
    </div>
  );
}
