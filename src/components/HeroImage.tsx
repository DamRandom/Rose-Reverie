"use client";

import React from "react";
import Image from "next/image";

const HeroImage = () => {
  return (
    <div className="relative w-full h-[400px] overflow-hidden group">
      {/* Imagen principal */}
      <Image
        src="/images/woman-5989552.jpg"
        alt="Salon Hero Image"
        width={1920}
        height={400}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
      />

      {/* Contenedor del texto que aparece al hacer hover */}
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="text-center text-white">
          <h1 className="text-3xl font-semibold">Salon Name</h1>
          <p className="text-lg mt-2">Your go-to place for style and elegance</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
