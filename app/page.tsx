"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { SectionTransition } from "@/components/section-transition";
import { HomeSection } from "@/components/sections/home";
import { AboutSection } from "@/components/sections/about";
import { PoliciesSection } from "@/components/sections/policies";
import { ProductsSection } from "@/components/sections/products";
import { OrdersSection } from "@/components/sections/orders";
import { SupportSection } from "@/components/sections/support";
import { Footer } from "@/components/footer";

export default function Page() {
  console.log("Page component mounted");
  const [currentSection, setCurrentSection] = useState("home");

  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentSection]);

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <HomeSection setCurrentSection={setCurrentSection} />;
      case "aboutUs":
        return <AboutSection />;
      case "policies":
        return <PoliciesSection />;
      case "products":
        return <ProductsSection />;
      case "orders":
        return <OrdersSection />;
      case "support":
        return <SupportSection />;
      default:
        return <HomeSection setCurrentSection={setCurrentSection} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      <Navbar currentSection={currentSection} setCurrentSection={setCurrentSection} />
      
      <main className="flex-grow relative">
        <SectionTransition sectionKey={currentSection}>
          {renderSection()}
        </SectionTransition>
      </main>

      <Footer setCurrentSection={setCurrentSection} />
    </div>
  );
}
