"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";

import { SectionHeader } from "../section-header";

export function SupportSection() {
  const links = [
    {
      name: "Discord",
      url: "https://discord.gg/jQBXPKkZK",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127.14 96.36" className="w-12 h-12 fill-[#5865F2]">
          <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.3,46,96.19,53,91.08,65.69,84.69,65.69Z"/>
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/mtnews_?s=21",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="w-12 h-12 fill-current"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="flex flex-col items-center py-12 max-w-4xl mx-auto w-full">
      <SectionHeader />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
        {links.map((link, index) => (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="matte-card p-12 flex flex-col items-center justify-center gap-8 relative overflow-hidden group cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30"
          >
            <div className="relative w-24 h-24 p-4 rounded-full bg-primary/5 border border-primary/10 group-hover:border-primary/30 transition-all duration-300 flex items-center justify-center">
              <div className="transition-transform duration-300 group-hover:scale-110">{link.icon}</div>
            </div>
            
            <h3 className="text-3xl font-bold tracking-tight text-foreground">{link.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
}
