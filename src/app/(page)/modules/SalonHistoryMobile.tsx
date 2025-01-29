"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SalonHistoryMobile = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-12 px-6">
      <div
        className="relative bg-cover bg-center bg-no-repeat p-8 md:p-12 rounded-lg shadow-lg text-white max-w-3xl mx-auto"
        style={{
          backgroundImage: "url('/images/Pink&White/pink-hair-1450045.jpg')",
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg rounded-lg"></div>

        <div className="relative z-10 text-center">
          <h2 className="text-3xl font-bold text-[#a36f80] mb-4 text-shadow-lg">
            Notre Histoire
          </h2>
          <p className="text-md leading-relaxed text-opacity-90 text-white mb-4">
            Depuis 2025, <span className="font-semibold">Rosé Reverie</span> est devenu un lieu incontournable, alliant innovation et passion pour révéler votre élégance naturelle.
          </p>
          <h3 className="text-2xl font-semibold text-[#a36f80] mb-3 text-shadow-lg">
            Mission & Vision
          </h3>
          <p className="text-md leading-relaxed text-opacity-90 text-white">
            Offrir des soins sur mesure et une expérience unique, où chaque client se sent valorisé et inspiré.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SalonHistoryMobile;
