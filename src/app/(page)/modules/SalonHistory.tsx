"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SalonHistory = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16">
      <div
        className="relative bg-cover bg-center bg-no-repeat p-12 rounded-lg shadow-lg text-white"
        style={{
          backgroundImage: "url('/images/Pink&White/pink-hair-1450045.jpg')",
        }}
        data-aos="fade-up"
      >
        <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg rounded-lg"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-start space-y-12 md:space-y-0 md:space-x-12">
            {/* Columna Izquierda: Texto */}
            <div
              className="md:w-1/2 mb-8 md:mb-0 text-left relative z-10"
              data-aos="fade-right"
              data-aos-delay="200"
            >
              <h2 className="text-4xl font-bold tracking-wide mb-6 text-[#a36f80] text-shadow-lg">
                Notre Histoire
              </h2>
              <p className="text-lg font-serif leading-relaxed text-opacity-90 mb-6 text-white v">
                Fondé en 2025, notre salon a évolué d&apos;un petit espace de beauté à un lieu de renommée, reconnu pour sa capacité à sublimer chaque personne. Nous avons bâti une réputation grâce à nos services innovants et notre attention particulière aux détails.
              </p>
              <p className="text-lg font-serif leading-relaxed text-opacity-90 mb-6 text-white  text-shadow-lg">
                À travers les années, nous avons toujours eu une volonté de repousser les limites de la beauté, en cherchant constamment à offrir des expériences de qualité, alliant confort et excellence.
              </p>
            </div>

            {/* Columna Derecha: Mission & Vision */}
            <div
              className="md:w-1/2 text-left relative z-10"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <h3 className="text-3xl font-semibold text-[#a36f80] mb-4  text-shadow-lg">
                Mission & Vision
              </h3>
              <p className="text-lg font-serif leading-relaxed text-opacity-90 mb-6 text-white  text-shadow-lg">
                Notre mission est de vous offrir des solutions de beauté sur mesure qui vous permettent de rayonner de confiance. Chaque service est conçu pour répondre à vos besoins individuels, en utilisant des techniques de pointe et des produits haut de gamme.
              </p>
              <p className="text-lg font-serif leading-relaxed text-opacity-90 text-white  text-shadow-lg">
                Nous rêvons de créer un environnement où chaque client peut se détendre et se sentir épanoui. Nous aspirons à devenir un leader dans l&apos;industrie de la beauté, en mettant en avant des valeurs d&apos;inclusivité et de bien-être.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalonHistory;
