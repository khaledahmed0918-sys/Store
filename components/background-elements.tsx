"use client";

import React, { useEffect, useState } from "react";
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
  const [mounted, setMounted] = useState(false);
  const [elements, setElements] = useState<BgElement[]>([]);

  useEffect(() => {
    const newElements = [
      { src: "https://i.postimg.cc/Hkv86CRZ/gq_Oss_JR5.png", size: 96, animation: "animate-float-slow", opacity: 0.4, top: "5%", left: "10%" },
      { src: "https://i.postimg.cc/wj4Rwdnd/4REp_Nsla.png", size: 128, animation: "animate-float", opacity: 0.4, top: "20%", left: "80%" },
      { src: "https://i.postimg.cc/GmgTX16R/u_VWd2G9V.png", size: 80, animation: "animate-float-delayed", opacity: 0.3, top: "35%", left: "15%" },
      { src: "https://i.postimg.cc/3xxDjwSV/Ti_A7AOJP.png", size: 112, animation: "animate-float-slow", opacity: 0.3, top: "50%", left: "75%" },
      { src: "https://i.postimg.cc/t44VdgSF/ff_Sr_Swyx.png", size: 64, animation: "animate-float", opacity: 0.2, top: "65%", left: "20%" },
      { src: "https://i.postimg.cc/htt78Gys/d_CW6Uazt.png", size: 96, animation: "animate-float-delayed", opacity: 0.3, top: "80%", left: "85%" },
      { src: "https://i.postimg.cc/JzHRWVGn/xgb1eg1d.png", size: 80, animation: "animate-float-slow", opacity: 0.3, top: "90%", left: "10%" },
    ];
    
    setElements(newElements);
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-[-1] overflow-hidden pointer-events-none w-full h-full">
      {/* Light Mode Color Blobs */}
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-[10%] left-[10%] w-[30rem] h-[30rem] bg-blue-400 rounded-full blur-[120px] dark:hidden mix-blend-multiply" 
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, delay: 2 }}
        className="absolute bottom-[10%] right-[10%] w-[30rem] h-[30rem] bg-purple-400 rounded-full blur-[120px] dark:hidden mix-blend-multiply" 
      />
      <motion.div 
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        className="absolute top-[40%] left-[50%] w-[25rem] h-[25rem] bg-pink-400 rounded-full blur-[120px] dark:hidden mix-blend-multiply" 
      />

      {/* Floating Icons */}
      {elements.map((el, idx) => (
        <div
          key={idx}
          className={`absolute ${el.animation}`}
          style={{
            top: el.top,
            left: el.left,
            opacity: el.opacity,
            width: el.size,
            height: el.size,
          }}
        >
          <Image src={el.src} alt="bg" fill className="object-contain" unoptimized />
        </div>
      ))}
    </div>
  );
}
