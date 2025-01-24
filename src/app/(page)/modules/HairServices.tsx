import React from "react";

const services = [
  {
    name: "Haircut",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque ut efficitur arcu. Vestibulum non neque in nunc facilisis malesuada.",
    imageSrc: "/images/haircut.jpg",
  },
  {
    name: "Styling",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet est nec libero lacinia suscipit. Nulla facilisi.",
    imageSrc: "/images/styling.jpg",
  },
  {
    name: "Coloring",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vel risus nec leo pretium aliquam non sit amet purus.",
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
              <p className="text-lg mt-4 text-white">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HairServices;
