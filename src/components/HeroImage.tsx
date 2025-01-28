"use client";

import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[400px] bg-[#0C1212] flex items-center justify-center sm:h-[500px] md:h-[600px]">
      {/* Imagen de fondo */}
      <Image
        src="/images/Pink&White/woman-2593366.jpg"
        alt="Image Héroïque du Salon"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover"
        priority
      />

      {/* Contenedor de texto con efecto cristal */}
      <div className="relative z-10 backdrop-blur-lg bg-[#0C1212]/50 px-6 py-4 rounded-lg shadow-lg text-center text-[#BFADB4] max-w-[90%] sm:max-w-lg border border-[#BFADB4]/30">
        <h1 className="text-3xl font-extrabold tracking-wide text-[#BFADB4] text-shadow-lg sm:text-4xl lg:text-5xl">
          <span className="text-[#824E5F]">Rosé Reverie</span>
        </h1>
        <p className="mt-3 text-lg font-medium text-[#D3B6B7] text-shadow-md sm:text-xl lg:text-2xl">
          L&apos;élégance dans chaque détail.
        </p>
        <button className="mt-5 px-6 py-2 bg-[#501823] text-[#BFADB4] font-semibold rounded-md shadow-md hover:bg-[#895354] transition-colors duration-300 sm:px-8 sm:py-3 sm:rounded-lg">
          Voir plus
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
