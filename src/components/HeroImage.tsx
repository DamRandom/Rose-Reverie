"use client";

import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[400px] bg-black flex items-center justify-center">
      {/* Imagen de fondo con opacidad reducida */}
      <Image
        src="/images/alexander-krivitskiy-fANekVYgCB0-unsplash.jpg"
        alt="Salon Hero Image"
        width={1920}
        height={400}
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        priority
      />

      {/* Contenedor del texto central */}
      <div className="relative z-10 text-center text-white max-w-2xl px-4">
        <h1 className="text-4xl font-bold tracking-wide">
          Welcome to <span className="text-[#d4af37]">Elegance</span>
        </h1>
        <p className="mt-4 text-lg">
          Discover a world where beauty meets sophistication. Transform your style with us.
        </p>
        <button className="mt-6 px-6 py-3 bg-[#d4af37] text-black font-medium rounded hover:bg-[#b5892e] transition-colors duration-300">
          Explore More
        </button>
      </div>
    </div>
  );
};

export default HeroImage;
