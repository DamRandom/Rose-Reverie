import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurTeamMobile() {
  const teamMembers = [
    {
      name: "Sophie Laurent",
      role: "Styliste Capillaire",
      aosDelay: 0,
    },
    {
      name: "Camille Dubois",
      role: "Styliste Capillaire",
      aosDelay: 200,
    },
    {
      name: "Isabelle Morel",
      role: "Spécialiste des Ongles",
      aosDelay: 400, 
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out", 
      once: true,
    });
  }, []);

  return (
    <section
      className="relative h-auto py-16 bg-cover bg-center flex flex-col items-center text-center"
      style={{
        backgroundImage: "url('/images/Pink&White/OurTeamMobile.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay para oscurecer el fondo */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      {/* Contenido */}
      <div className="relative z-10 w-full px-6 flex flex-col items-center">
        {/* Título */}
        <h2
          className="text-4xl font-bold text-[#501823] text-shadow-lg mb-8"
          data-aos="fade-up"
        >
          Notre Équipe
        </h2>

        {/* Lista de Miembros del Equipo */}
        <div className="w-full flex flex-col gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={member.aosDelay}
              className="w-full bg-white bg-opacity-10 backdrop-blur-md backdrop-brightness-75 border border-white/30 shadow-lg rounded-lg p-6"
            >
              <h3 className="text-lg font-semibold text-[#501823] text-shadow-md">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-[#BFADB4] text-shadow-md">
                {member.role}
              </p>
            </div>
          ))}
        </div>

        {/* Descripción en la parte inferior */}
        <div
          className="mt-8 bg-white bg-opacity-10 backdrop-blur-md backdrop-brightness-75 border border-white/30 px-6 py-4 rounded-lg shadow-lg max-w-xs"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <p className="text-sm text-[#BFADB4] text-shadow-md">
            Chez <span className="text-[#824E5F]">Rosé Reverie</span>, nous croyons
            que chaque individu est unique. Notre équipe dévouée est là pour révéler
            votre élégance naturelle, avec créativité et passion.
          </p>
        </div>
      </div>
    </section>
  );
}
