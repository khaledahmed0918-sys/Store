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
  const elements = React.useMemo(() => [
    { src: "https://i.postimg.cc/Hkv86CRZ/gq_Oss_JR5.png", size: 96, opacity: 0.3, top: "20%", left: "15%", duration: 25 },
    { src: "https://i.postimg.cc/wj4Rwdnd/4REp_Nsla.png", size: 128, opacity: 0.3, top: "30%", left: "70%", duration: 30 },
    { src: "https://i.postimg.cc/GmgTX16R/u_VWd2G9V.png", size: 80, opacity: 0.2, top: "60%", left: "20%", duration: 22 },
    { src: "https://i.postimg.cc/3xxDjwSV/Ti_A7AOJP.png", size: 112, opacity: 0.2, top: "70%", left: "65%", duration: 28 },
  ], []);

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
            y: [0, -15, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Image src={el.src} alt="bg" fill className="object-contain" unoptimized />
        </motion.div>
      ))}
    </div>
  );
}
