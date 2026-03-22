"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";

interface SectionTransitionProps {
  children: React.ReactNode;
  sectionKey: string;
}

export function SectionTransition({ children, sectionKey }: SectionTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={sectionKey}
        initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        exit={{ 
          opacity: 0, 
          y: -20, 
          filter: "blur(10px)",
          transition: { 
            duration: 0.3, 
            ease: "easeIn" 
          } 
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        }}
        className="w-full min-h-[calc(100vh-160px)] pt-24 md:pt-32 pb-32 md:pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
