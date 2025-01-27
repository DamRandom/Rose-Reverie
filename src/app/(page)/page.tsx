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

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula la carga de la página o espera la carga de los recursos
    setTimeout(() => {
      setLoading(false); // Después de 3 segundos (o el tiempo que prefieras), cambiar a false
    }, 1000); // Ajusta el tiempo de carga si es necesario
  }, []);

  if (loading) {
    return <Spinner />; // Muestra el spinner mientras se carga
  }

  return (
    <div className="min-h-screen bg-[#0C1212] text-[#BFADB4] font-[family-name:var(--font-geist-sans)]">
      <HeroImage />
      <Navbar />

      {/* About Us Section */}
      <section className="pb-32">
        <AboutUs />
      </section>

      {/* Combined Salon History and Hair Services with Parallax Effect */}
      <section
        className="relative bg-cover bg-center bg-fixed parallax"
        style={{
          backgroundImage: "url('/images/Pink&White/girl-2189247.jpg')",
        }}
      >
        <div className="container mx-auto">
          {/* Salon History Section */}
          <SalonHistory />
        </div>

        <div className="container mx-auto">
          {/* Hair Services Section */}
          <HairServices />
        </div>
      </section>

      <section>
        <VideoSection />
      </section>

      <section>
        <OurTeam/>
      </section>

      <Footer />
    </div>
  );
}
