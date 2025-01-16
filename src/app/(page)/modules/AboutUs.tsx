import React from 'react';
import Image from 'next/image';

const AboutUs = () => (
  <section className="bg-white-smoke py-16">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center">
        {/* Columna Izquierda: Imagen */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="/images/salon-6964527.jpg" // Ruta de la imagen en la carpeta public
            alt="Our Salon"
            width={1200}
            height={800}
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        {/* Columna Derecha: Texto */}
        <div className="md:w-1/2 md:pl-12">
          <h2 className="text-3xl font-semibold text-jet mb-4">Who We Are</h2>
          <p className="text-lg text-timberwolf mb-6">
            At [Salon Name], we are passionate about enhancing your natural beauty. Our team of experienced professionals is dedicated to providing personalized services that leave you feeling confident and rejuvenated.
          </p>
          <p className="text-lg text-timberwolf mb-6">
            Founded in [Year], our salon has been a sanctuary for those seeking quality beauty treatments in a serene and welcoming environment. We believe in using only the best products and the latest techniques to ensure exceptional results.
          </p>
          <p className="text-lg text-timberwolf">
            Our mission is to make every client feel special and valued. We strive to create a space where beauty meets relaxation, ensuring each visit is a memorable experience.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
