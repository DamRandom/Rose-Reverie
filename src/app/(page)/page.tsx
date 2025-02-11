"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroImage from "@/components/HeroImage";
import AboutUs from "./modules/AboutUs";
import SalonHistoryDesktop from "./modules/SalonHistoryDesktop";
import SalonHistoryMobile from "./modules/SalonHistoryMobile";
import Footer from "@/components/Footer";
import HairServices from "./modules/HairServices";
import VideoSection from "./modules/VideoSection";
import Spinner from "@/components/Spinner";
import OurTeamDesktop from "./modules/OurTeamDesktop";
import OurTeamMobile from "./modules/OurTeamMobile";
import Feedback from "./modules/Feedback";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Prevent execution on the server side
    if (typeof window !== "undefined") {
      const checkScreenSize = () => {
        setIsMobile(window.innerWidth < 768);
      };

      checkScreenSize();
      window.addEventListener("resize", checkScreenSize);

      return () => {
        window.removeEventListener("resize", checkScreenSize);
      };
    }
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="min-h-screen bg-[#0C1212] text-[#BFADB4] font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <header className="relative">
        <Navbar />
        <div className="overflow-hidden">
          <HeroImage />
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="py-8 px-4 sm:px-6 lg:px-8">
        <AboutUs />
      </section>

      {/* Parallax Section with Salon History and Services */}
      <section
        id="services"
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Pink&White/girl-2189247.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black bg-opacity-70 py-12 px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            {isMobile ? <SalonHistoryMobile /> : <SalonHistoryDesktop />}
          </div>
          <div>
            <HairServices />
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <VideoSection />
      </section>

      {/* Our Team Section (Responsive) */}
      <section id="team" className="py-8 px-4 sm:px-6 lg:px-8">
        {isMobile ? <OurTeamMobile /> : <OurTeamDesktop />}
      </section>

      {/* Feedback Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <Feedback />
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t-4 border-[#824E5F]">
        <Footer />
      </footer>
    </div>
  );
}
