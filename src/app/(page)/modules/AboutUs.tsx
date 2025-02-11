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
    <section className="py-12 bg-[#0C1212] border-t-4 border-[#824E5F]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center">
          {/* Left Column: Image */}
          <div
            className="lg:w-1/2 mb-6 lg:mb-0"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <Image
              src="/images/Pink&White/5a199921-7783-4d04-890c-8ee34c032a99.jpg"
              alt="Our Salon"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg shadow-lg"
              priority
            />
          </div>

          {/* Right Column: Text */}
          <div
            className="lg:w-1/2 lg:pl-12 text-center lg:text-left"
            data-aos="fade-left"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#BFADB4] mb-4">
              Qui sommes-nous
            </h2>
            <p className="text-sm sm:text-lg text-[#D3B6B7] mb-4 text-justify sm:text-center lg:text-left">
              At <span className="text-[#824E5F]">Rosé Reverie</span>, we are
              passionate about enhancing your natural beauty. Our team of
              experienced professionals is committed to providing personalized
              services that will leave you feeling confident and revitalized.
            </p>
            <p className="text-sm sm:text-lg text-[#D3B6B7] mb-4 text-justify sm:text-center lg:text-left">
              Founded in 2025, our salon is a sanctuary for those seeking
              high-quality beauty treatments in a serene and welcoming
              environment. We believe in using the best products and the latest
              techniques to ensure exceptional results.
            </p>
            <p className="text-sm sm:text-lg text-[#D3B6B7] text-justify sm:text-center lg:text-left">
              Our mission is to ensure that every client feels special and
              appreciated. We strive to create a space where beauty meets
              relaxation, making sure that each visit is a memorable experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
