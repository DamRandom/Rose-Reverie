import React from "react";
import Image from "next/image";

const AboutUs = () => (
  <section className="bg-white-smoke py-16">
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center">
        {/* Columna Izquierda: Imagen */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <Image
            src="/images/salon-6964527.jpg" // Ruta de la imagen en la carpeta public
            alt="Our Salon"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg shadow-lg"
            priority // Optimiza la carga en dispositivos móviles
          />
        </div>
        {/* Columna Derecha: Texto */}
        <div className="lg:w-1/2 lg:pl-12 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold text-jet mb-4">
            Who We Are
          </h2>
          <p className="text-base sm:text-lg text-timberwolf mb-6 text-justify">
            At [Salon Name], we are passionate about enhancing your natural beauty. Our team of experienced professionals is dedicated to providing personalized services that leave you feeling confident and rejuvenated.
          </p>
          <p className="text-base sm:text-lg text-timberwolf mb-6 text-justify">
            Founded in [Year], our salon has been a sanctuary for those seeking quality beauty treatments in a serene and welcoming environment. We believe in using only the best products and the latest techniques to ensure exceptional results.
          </p>
          <p className="text-base sm:text-lg text-timberwolf text-justify">
            Our mission is to make every client feel special and valued. We strive to create a space where beauty meets relaxation, ensuring each visit is a memorable experience.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
