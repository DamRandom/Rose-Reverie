"use client";

import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[400px] bg-[#0C1212] flex items-center justify-center">
      {/* Imagen de fondo */}
      <Image
        src="/images/Pink&White/woman-2593366.jpg"
        alt="Salon Hero Image"
        width={1920}
        height={400}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />

      {/* Contenedor del texto con efecto cristal */}
      <div className="relative z-10 backdrop-blur-lg bg-[#0C1212]/40 px-8 py-6 rounded-xl shadow-2xl text-center text-[#BFADB4] max-w-3xl border border-[#BFADB4]/20">
        <h1 className="text-5xl font-extrabold tracking-wide text-shadow">
          Welcome to <span className="text-[#824E5F]">Elegance</span>
        </h1>
        <p className="mt-4 text-xl font-medium text-[#D3B6B7] text-shadow">
          Discover a world where beauty meets sophistication. Transform your style with us.
        </p>
        <button className="mt-6 px-8 py-3 bg-[#501823] text-[#BFADB4] font-semibold rounded-lg shadow-md hover:bg-[#895354] transition-colors duration-300">
          Explore More
        </button>
      </div>
    </div>

  );
};

export default HeroImage;
