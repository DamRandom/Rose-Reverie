"use client";

import React, { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroImage from "@/components/HeroImage";
import AboutUs from "./modules/AboutUs";
import SalonHistory from "./modules/SalonHistory";
import Footer from "@/components/Footer";
import HairServices from "./modules/HairServices";
import VideoSection from "./modules/VideoSection";
import Spinner from "@/components/Spinner";
import OurTeam from "./modules/OurTeam";
import Feedback from "./modules/Feedback";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
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

      {/* About Us Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <AboutUs />
      </section>

      {/* Parallax Section with Salon History and Hair Services */}
      <section
        className="relative bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/Pink&White/girl-2189247.jpg')",
          backgroundSize: "cover",
        }}
      >
        <div className="bg-black bg-opacity-70 py-12 px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <SalonHistory />
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

      {/* Our Team Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <OurTeam />
      </section>

      {/* Feedback Section */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <Feedback />
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-[#824E5F]">
        <Footer />
      </footer>
    </div>
  );
}
