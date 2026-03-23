"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "ar" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "rtl" | "ltr";
}

const translations = {
  ar: {
    home: "الرئيسية",
    products: "المنتجات",
    productsDesc: "استعرض أحدث منتجاتنا وخدماتنا الرقمية",
    orders: "الطلبات",
    ordersDesc: "تابع حالة طلباتك الحالية والسابقة",
    support: "الدعم",
    supportDesc: "تواصل معنا للحصول على المساعدة",
    policies: "السياسات",
    policiesDesc: "تعرف على سياسات المتجر والخدمات",
    aboutUs: "من نحن",
    aboutUsDesc: "تعرف على سون ستور وفريق عملنا",
    welcome: "مرحباً بك في سون ستور",
    welcomeDesc: "وجهتك الأولى لجميع الخدمات الرقمية والحلول المبتكرة",
    orderNow: "اطلب الآن",
    viewSection: "عرض القسم",
    tagline: "كل شيء في سون ستور",
    allRightsReserved: "جميع الحقوق محفوظة © 2026",
    customBots: "بوتات مخصصة",
    customBotsDesc: "بوتات مخصصة حسب طلب المستخدم",
    websites: "مواقع إلكترونية",
    websitesDesc: "مواقع مخصصة مع خدمات كاملة",
    discordDesigns: "تصاميم ديسكورد",
    discordDesignsDesc: "تصاميم ديسكورد مخصصة تشمل الصور والميزات",
    discordBoosts: "بوستات ديسكورد",
    discordBoostsDesc: "بوستات سيرفرات بكميات محددة",
    discordNitros: "ديسكورد نيترو",
    discordNitrosDesc: "ديسكورد نيترو مع ميزات محسنة",
    stock: "المخزون",
    unlimited: "غير محدود",
    left: "متبقٍ",
    price: "السعر",
    goToLink: "الذهاب للرابط",
    servicesPolicy: "سياسة الخدمات",
    paymentPolicy: "نظام الدفع",
    refundPolicy: "الاسترجاع",
    conductPolicy: "التعامل",
    rightsPolicy: "الحقوق",
    policy1: "يتم الدفع كاملاً قبل البدء في العمل.",
    policy2: "المبالغ المدفوعة غير قابلة للاسترداد (إلا في حال وجود خطأ من طرف المتجر، يتم التعويض).",
    policy3: "نرجو احترام موظفي المتجر في جميع الأوقات لضمان استمرار الخدمة.",
    policy4: "جميع الحقوق محفوظة لـ سون ستور.",
    aboutDesc: "سون ستور هو وجهتك الأولى لجميع الخدمات الرقمية. نحن نقدم حلولاً مبتكرة من بوتات ديسكورد، وتطوير المواقع، وتصاميم احترافية لتلبية احتياجاتك بأعلى جودة.",
    orderName: "اسم الطلب",
    quantity: "الكمية",
    description: "الوصف",
    customerName: "اسم العميل",
    orderTime: "وقت الطلب",
    progress: "نسبة الإنجاز",
  },
  en: {
    home: "Home",
    products: "Products",
    productsDesc: "Browse our latest digital products and services",
    orders: "Orders",
    ordersDesc: "Track the status of your current and past orders",
    support: "Support",
    supportDesc: "Contact us for assistance",
    policies: "Policies",
    policiesDesc: "Learn about store policies and services",
    aboutUs: "About Us",
    aboutUsDesc: "Learn about Soon Store and our team",
    welcome: "Welcome to Soon Store",
    welcomeDesc: "Your premier destination for all digital services and innovative solutions",
    orderNow: "Order Now",
    viewSection: "View Section",
    tagline: "All in Soon Store",
    allRightsReserved: "All rights reserved © 2026",
    customBots: "Custom Bots",
    customBotsDesc: "Customized bots per user request",
    websites: "Websites",
    websitesDesc: "Custom websites with full services",
    discordDesigns: "Discord Designs",
    discordDesignsDesc: "Custom Discord designs including images and features",
    discordBoosts: "Discord Boosts",
    discordBoostsDesc: "Server boosts with specified quantity",
    discordNitros: "Discord Nitros",
    discordNitrosDesc: "Discord Nitro with enhanced features",
    stock: "Stock",
    unlimited: "Unlimited",
    left: "left",
    price: "Price",
    goToLink: "Go to link",
    servicesPolicy: "Services Policy",
    paymentPolicy: "Payment System",
    refundPolicy: "Refund Policy",
    conductPolicy: "Conduct",
    rightsPolicy: "Rights",
    policy1: "Payment is made in full before starting work.",
    policy2: "Paid amounts are non-refundable (unless there is an error on the store side, compensation is provided).",
    policy3: "Please respect store staff at all times to ensure continued service.",
    policy4: "All rights reserved to Soon Store.",
    aboutDesc: "Soon Store is your premier destination for all digital services. We provide innovative solutions from Discord bots, web development, and professional designs to meet your needs with the highest quality.",
    orderName: "Order Name",
    quantity: "Quantity",
    description: "Description",
    customerName: "Customer Name",
    orderTime: "Order Time",
    progress: "Progress",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("language") as Language;
      if (savedLang && (savedLang === "ar" || savedLang === "en")) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setLanguage(savedLang);
      }
    } catch (e) {
      console.warn("localStorage is not available:", e);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    try {
      localStorage.setItem("language", lang);
    } catch (e) {
      console.warn("localStorage is not available:", e);
    }
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = lang;
  };

  const t = (key: string) => {
    return (translations[language] as any)[key] || key;
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage: handleSetLanguage, t, dir: language === "ar" ? "rtl" : "ltr" }}
    >
      <div dir={language === "ar" ? "rtl" : "ltr"} className="w-full h-full min-h-screen">
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
