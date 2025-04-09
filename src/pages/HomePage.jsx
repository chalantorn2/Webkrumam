import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import HeroSection from "../components/sections/HeroSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import TimelineSection from "../components/sections/TimelineSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import ContactSection from "../components/sections/ContactSection";

const HomePage = () => {
  // ใช้ useEffect เพื่อเลื่อนไปที่ด้านบนของหน้าเมื่อหน้าถูกโหลด
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <TimelineSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
};

export default HomePage;
