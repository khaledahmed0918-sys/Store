"use client";

import React from "react";
import { useLanguage } from "./language-provider";
import { useTheme } from "next-themes";
import { Moon, Sun, Globe } from "lucide-react";
import Image from "next/image";

interface NavbarProps {
  currentSection: string;
  setCurrentSection: (section: string) => void;
}

const NavItem = ({ sectionKey, currentSection, setCurrentSection, t }: { sectionKey: string, currentSection: string, setCurrentSection: (section: string) => void, t: (key: string) => string }) => {
  const isActive = currentSection === sectionKey;
  return (
    <button
      onClick={() => setCurrentSection(sectionKey)}
      className={`relative px-3 py-2 text-sm md:text-base font-medium transition-colors duration-300 ${
        isActive ? "text-primary" : "text-foreground/70 hover:text-foreground"
      }`}
    >
      {t(sectionKey)}
      {isActive && (
        <div
          className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
        />
      )}
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

  const rightOfLogo = ["aboutUs", "policies"];
  const leftOfLogo = ["products", "orders"];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile Logo/Title */}
            <div className="flex items-center gap-3 md:hidden">
              <div className="relative w-10 h-10 rounded-full overflow-hidden shadow-sm">
                <Image 
                  src="https://i.postimg.cc/HLzmwQxz/IMG-9248.png" 
                  alt="Soon Store" 
                  fill 
                  className="object-cover" 
                  sizes="40px"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-bold text-xl tracking-tight text-gradient">Soon Store</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex flex-1 items-center justify-center gap-8">
              {/* Left Group (Products, Orders) */}
              <div className="flex items-center gap-4 rtl:flex-row-reverse">
                {leftOfLogo.map((s) => (
                  <NavItem key={s} sectionKey={s} currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} />
                ))}
              </div>

              {/* Centered Logo */}
              <div className="flex flex-col items-center justify-center cursor-pointer px-4" onClick={() => setCurrentSection("home")}>
                <div className="relative w-14 h-14">
                  <div 
                    className={`relative w-full h-full rounded-full overflow-hidden transition-all duration-300 ${currentSection === 'home' ? 'border-2 border-primary' : 'border-2 border-transparent'}`}
                  >
                    <Image 
                      src="https://i.postimg.cc/HLzmwQxz/IMG-9248.png" 
                      alt="Soon Store" 
                      fill 
                      className="object-cover" 
                      sizes="56px"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <span className={`text-[10px] mt-1 font-bold tracking-widest uppercase transition-colors duration-300 ${currentSection === 'home' ? 'text-primary' : 'text-foreground/40'}`}>
                  {t("home")}
                </span>
              </div>

              {/* Right Group (About Us, Policies) */}
              <div className="flex items-center gap-4 rtl:flex-row-reverse">
                {rightOfLogo.map((s) => (
                  <NavItem key={s} sectionKey={s} currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} />
                ))}
              </div>
            </div>

            {/* Controls + Support */}
            <div className="flex items-center gap-2">
              <div className="hidden md:flex items-center gap-4 me-4 border-e border-primary/10 pe-4 rtl:border-e-0 rtl:border-s rtl:pe-0 rtl:ps-4">
                <NavItem sectionKey="support" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} />
              </div>
              
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 rounded-xl hover:bg-primary/5 transition-all duration-300"
                  aria-label="Toggle Theme"
                >
                  {mounted ? (
                    theme === "dark" ? <Sun className="w-5 h-5 text-foreground/70" /> : <Moon className="w-5 h-5 text-foreground/70" />
                  ) : (
                    <div className="w-5 h-5" />
                  )}
                </button>
                <button
                  onClick={() => setLanguage(language === "ar" ? "en" : "ar")}
                  className="p-2 rounded-xl hover:bg-primary/5 transition-all duration-300"
                  aria-label="Toggle Language"
                >
                  <Globe className="w-5 h-5 text-foreground/70" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-6 left-4 right-4 z-50 glass rounded-3xl border border-primary/10 shadow-2xl px-2 py-2 flex items-center justify-around no-scrollbar overflow-x-auto">
        <NavItem sectionKey="home" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} />
        {rightOfLogo.map((s) => <NavItem key={s} sectionKey={s} currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} />)}
        {leftOfLogo.map((s) => <NavItem key={s} sectionKey={s} currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} />)}
        <NavItem sectionKey="support" currentSection={currentSection} setCurrentSection={setCurrentSection} t={t} />
      </div>
    </>
  );
}
