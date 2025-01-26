"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-[#0C1212] border-t-4 border-[#824E5F]">
  <div className="container mx-auto px-6 lg:px-8">
    <div className="flex flex-col lg:flex-row items-center">
      {/* Columna Izquierda: Imagen */}
      <div
        className="lg:w-1/2 mb-8 lg:mb-0"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <Image
          src="/images/Pink&White/5a199921-7783-4d04-890c-8ee34c032a99.jpg"
          alt="Notre Salon"
          width={1200}
          height={800}
          className="w-full h-auto rounded-lg shadow-lg"
          priority
        />
      </div>

      {/* Columna Derecha: Texto */}
      <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left" data-aos="fade-left">
        <h2 className="text-3xl font-semibold text-[#BFADB4] mb-4">
          Qui sommes-nous
        </h2>
        <p className="text-lg text-[#D3B6B7] mb-6 text-justify">
          Chez <span className="text-[#824E5F]">Rosé Reverie</span>, nous
          sommes passionnés par la mise en valeur de votre beauté naturelle.
          Notre équipe de professionnels expérimentés s&apos;engage à fournir des
          services personnalisés qui vous laisseront vous sentir confiante et
          revitalisée.
        </p>
        <p className="text-lg text-[#D3B6B7] mb-6 text-justify">
          Fondé en 2025, notre salon est un sanctuaire pour ceux qui recherchent
          des traitements de beauté de qualité dans un environnement serein et
          accueillant. Nous croyons en l&apos;utilisation des meilleurs produits et
          des techniques les plus récentes pour garantir des résultats exceptionnels.
        </p>
        <p className="text-lg text-[#D3B6B7] text-justify">
          Notre mission est de faire en sorte que chaque client se sente spécial et
          apprécié. Nous nous efforçons de créer un espace où la beauté rencontre
          la relaxation, en veillant à ce que chaque visite soit une expérience
          mémorable.
        </p>
      </div>
    </div>
  </div>
</section>

  );
};

export default AboutUs;
