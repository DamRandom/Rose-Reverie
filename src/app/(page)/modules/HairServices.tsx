import React from "react";

const services = [
  {
    name: "Coupe de cheveux",
    description: (
      <>
        Chez <span className="text-[#824E5F]">Rosé Reverie</span>, nous offrons des
        coupes de cheveux modernes et élégantes qui reflètent votre personnalité.
        Chaque coupe est réalisée avec soin, en tenant compte de vos préférences
        et de la forme de votre visage.
      </>
    ),
    imageSrc: "/images/haircut.jpg",
  },
  {
    name: "Coiffure",
    description: (
      <>
        Nous croyons que chaque coiffure doit mettre en valeur la beauté naturelle.
        Que ce soit pour une occasion spéciale ou un look quotidien, nos experts
        stylistes transformeront vos cheveux en une œuvre d&apos;art personnalisée.
      </>
    ),
    imageSrc: "/images/styling.jpg",
  },
  {
    name: "Coloration",
    description: (
      <>
        Offrez à vos cheveux une nouvelle vie avec nos services de coloration. Nous
        utilisons des techniques de pointe et des produits de haute qualité pour
        créer des couleurs vibrantes et durables qui vous feront briller.
      </>
    ),
    imageSrc: "/images/coloring.jpg",
  },
];

const HairServices = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 space-y-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative flex flex-col items-center space-y-6"
          >
            {/* Card with Frosted Glass Effect */}
            <div className="relative p-8 w-full h-60 rounded-lg shadow-lg bg-white bg-opacity-0 backdrop-blur-lg backdrop-brightness-75 border border-white/30 z-10">
              <h3 className="text-3xl font-semibold text-white">{service.name}</h3>
              <p className="text-lg mt-4 text-white">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HairServices;
