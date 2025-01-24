import React from "react";

const SalonHistory = () => (
  <section className="py-16">
    <div
      className="relative bg-cover bg-center bg-no-repeat p-12 rounded-lg shadow-lg text-white"
      style={{
        backgroundImage: "url('/images/lindsay-cash-Md_DhaFsnCQ-unsplash.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-lg rounded-lg"></div>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start space-y-12 md:space-y-0 md:space-x-12">
          {/* Left Column: Text */}
          <div className="md:w-1/2 mb-8 md:mb-0 text-left relative z-10">
            <h2 className="text-4xl font-bold tracking-wide mb-6 text-shadow">
              Our History
            </h2>
            <p className="text-lg font-serif leading-relaxed text-opacity-90 mb-6 text-shadow">
              Founded in [Year], our salon began as a small space dedicated to enhancing natural beauty. Over the years, we have grown into a trusted name in the beauty industry, known for exceptional service and innovation.
            </p>
            <p className="text-lg font-serif leading-relaxed text-opacity-90 mb-6 text-shadow">
              From introducing cutting-edge techniques to expanding our offerings, every milestone has been driven by a passion for excellence and a commitment to our clients&apos; satisfaction.
            </p>
          </div>

          {/* Right Column: Mission & Vision */}
          <div className="md:w-1/2 text-left relative z-10">
            <h3 className="text-3xl font-semibold text-shadow mb-4">Mission & Vision</h3>
            <p className="text-lg font-serif leading-relaxed text-opacity-90 mb-6 text-shadow">
              Our mission is to provide personalized beauty solutions that empower our clients to look and feel their best. We believe in delivering quality services that blend creativity, skill, and care.
            </p>
            <p className="text-lg font-serif leading-relaxed text-opacity-90 text-shadow">
              Our vision is to be a leader in the beauty industry, setting standards for excellence while fostering an inclusive and inspiring environment for everyone who walks through our doors.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SalonHistory;
