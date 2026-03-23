"use client";

import React from "react";
import { useLanguage } from "./language-provider";
import { useTheme } from "next-themes";
import { Moon, Sun, Globe, Home, Info, Shield, Package, ShoppingCart, Headphones } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const sectionIcons: Record<string, React.ElementType> = {
  home: Home,
  aboutUs: Info,
  policies: Shield,
  products: Package,
  orders: ShoppingCart,
  support: Headphones,
};

const NavItem = ({ sectionKey, currentSection, setCurrentSection, t, language }: { sectionKey: string, currentSection: string, setCurrentSection: (section: string) => void, t: (key: string) => string, language: string }) => {
  const isActive = currentSection === sectionKey;
  const Icon = sectionIcons[sectionKey];
  
  const renderText = () => {
    return <span>{t(sectionKey)}</span>;
  };

  return (
    <button
      onClick={() => setCurrentSection(sectionKey)}
      className={`relative px-3 py-2 flex items-center gap-2 text-sm md:text-base font-medium transition-all duration-300 rounded-xl whitespace-nowrap ${
        isActive ? "text-primary bg-primary/10 shadow-[0_0_15px_rgba(0,0,0,0.05)] dark:shadow-[0_0_15px_rgba(255,255,255,0.1)]" : "text-foreground/70 hover:text-foreground hover:bg-primary/5"
      }`}
    >
      {Icon && <Icon className="w-4 h-4 flex-shrink-0" />}
      {renderText()}
    </button>
  );
};

export function Navbar({ currentSection, setCurrentSection }: NavbarProps) {
  const { t, language, setLanguage } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 glass rounded-full px-6 py-3 flex items-center justify-between shadow-2xl border border-primary/20 bg-background/40 backdrop-blur-xl transition-all duration-500 w-[95vw] max-w-7xl">
        
        {/* Group A: Products, Orders (Left side) */}
        <div className="flex items-center gap-2 flex-1 justify-between md:justify-start md:gap-6">
          <NavItem sectionKey="products" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} language={language} />
          <NavItem sectionKey="orders" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} language={language} />
        </div>

        {/* Group B: Home Logo (Absolute Center) */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center cursor-pointer z-50 group" onClick={() => setCurrentSection("home")}>
          <div className={`relative w-10 h-10 transition-all duration-500`}>
            <Image 
              src="https://i.postimg.cc/HLzmwQxz/IMG-9248.png" 
              alt="Soon Store" 
              fill 
              className={`object-contain dark:brightness-100 brightness-0 transition-all duration-300 group-hover:scale-105`} 
              sizes="40px"
              referrerPolicy="no-referrer"
              unoptimized
            />
          </div>
        </div>

        {/* Group C: Policies, About Us, Controls + Support (Right side) */}
        <div className="flex items-center gap-2 flex-1 justify-between md:justify-end md:gap-6">
          <div className="hidden md:flex items-center gap-6">
            <NavItem sectionKey="policies" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} language={language} />
            <NavItem sectionKey="aboutUs" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} language={language} />
            <NavItem sectionKey="support" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} language={language} />
            <button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 text-foreground"
              aria-label="Toggle Language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 text-foreground"
              aria-label="Toggle Theme"
            >
              {mounted ? (
                theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>
          </div>
          
          {/* Mobile Controls */}
          <div className="md:hidden flex items-center justify-between w-full px-2 gap-1">
            <button
              onClick={() => setCurrentSection("support")}
              className={`p-2 rounded-full transition-all duration-300 ${currentSection === 'support' ? 'text-primary bg-primary/10' : 'text-foreground/70 hover:text-foreground hover:bg-primary/10'}`}
              aria-label="Support"
            >
              <Headphones className="w-5 h-5" />
            </button>
            <button
              onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
              className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 text-foreground"
              aria-label="Toggle Language"
            >
              <Globe className="w-5 h-5" />
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-primary/10 transition-all duration-300 text-foreground"
              aria-label="Toggle Theme"
            >
              {mounted ? (
                theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />
              ) : (
                <div className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </nav>
      
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 glass rounded-3xl border border-primary/20 bg-background/40 backdrop-blur-xl shadow-2xl px-2 py-2 flex items-center justify-between overflow-x-auto no-scrollbar gap-2">
        <NavItem sectionKey="home" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} language={language} />
        <NavItem sectionKey="products" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} language={language} />
        <NavItem sectionKey="orders" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} language={language} />
        <NavItem sectionKey="policies" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} language={language} />
        <NavItem sectionKey="aboutUs" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} language={language} />
      </div>
    </>
  );
}
