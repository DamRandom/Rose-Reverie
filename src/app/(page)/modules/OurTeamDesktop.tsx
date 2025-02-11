import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function OurTeamBubble() {
  const teamMembers = [
    {
      name: "Sophie Laurent",
      role: "Styliste Capillaire",
      position: { top: "30%", left: "20%" },
      aosDelay: 0,
    },
    {
      name: "Camille Dubois",
      role: "Styliste Capillaire",
      position: { top: "50%", left: "60%" },
      aosDelay: 200,
    },
    {
      name: "Isabelle Morel",
      role: "Spécialiste des Ongles",
      position: { top: "40%", left: "90%" },
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
      className="relative h-[900px] bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/Pink&White/OurTeam.jpg')",
        backgroundPosition: "top",
      }}
    >
      {/* Overlay to darken the background */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto h-full flex flex-col justify-between px-6">
        {/* Title at the top */}
        <div className="flex justify-center pt-16">
          <h2
            className="text-7xl font-bold text-[#501823] text-shadow-lg"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Notre Équipe
          </h2>
        </div>

        {/* Names positioned on the image */}
        <div className="relative w-full h-full mt-10">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              data-aos="fade-up" // Fade-up animation
              data-aos-delay={member.aosDelay} // Individual delay
              className="absolute text-center"
              style={{
                top: member.position.top,
                left: member.position.left,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div className="relative bg-white bg-opacity-10 backdrop-blur-md backdrop-brightness-75 border border-white/30 shadow-lg rounded-lg p-6">
                <h3 className="text-xl font-semibold text-[#501823] text-shadow-md">
                  {member.name}
                </h3>
                <p className="mt-1 text-sm text-[#BFADB4] text-shadow-md">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Paragraph in the bottom-left corner */}
        <div
          className="absolute bottom-10 left-10 bg-white bg-opacity-10 backdrop-blur-md backdrop-brightness-75 border border-white/30 px-6 py-4 rounded-lg shadow-lg max-w-sm"
          data-aos="fade-up"
          data-aos-delay="600" // Appears after the cards
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
