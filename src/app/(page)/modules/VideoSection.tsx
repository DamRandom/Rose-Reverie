"use client";

import React, { useEffect } from "react";
import { AiOutlineLike, AiOutlineComment, AiOutlineShareAlt } from "react-icons/ai";
import AOS from "aos";
import "aos/dist/aos.css"; // Importar los estilos de AOS

const VideoSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación
      once: true, // Para que solo se ejecute una vez
    });
  }, []);

  const videos = [
    {
      id: 1,
      videoSrc: "/videos/video1.mp4",
      title: "Les dernières tendances",
    },
    {
      id: 2,
      videoSrc: "/videos/video2.mp4",
      title: "Transformez votre style",
    },
    {
      id: 3,
      videoSrc: "/videos/video3.mp4",
      title: "L'art de la coiffure",
    },
  ];

  return (
    <section className="bg-[#0C1212] text-[#BFADB4] py-10">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-semibold text-center text-[#824E5F] mb-8" data-aos="fade-up">
          Découvrez nos vidéos
        </h2>
        <p className="text-center text-lg text-[#D3B6B7] mb-12" data-aos="fade-up" data-aos-delay="200">
          Explorez nos vidéos pour découvrir les dernières tendances et techniques qui sublimeront votre look.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative group overflow-hidden rounded-lg bg-[#2a2a2a] transition-transform duration-300 hover:scale-105"
              data-aos="zoom-in"
              data-aos-delay="300"
            >
              {/* Video */}
              <div className="relative w-full h-56">
                <video
                  src={video.videoSrc}
                  className="w-full h-full object-cover rounded-t-lg"
                  controls
                />
              </div>
              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-[#BFADB4]" data-aos="fade-up">
                  {video.title}
                </h3>
                {/* Buttons */}
                <div className="flex justify-between items-center mt-4 space-x-4">
                  <button className="flex items-center text-[#824E5F] hover:text-[#501823]">
                    <AiOutlineLike className="text-xl mr-2" />
                    <span className="text-sm font-medium">J&apos;aime</span>
                  </button>
                  <button className="flex items-center text-[#824E5F] hover:text-[#501823]">
                    <AiOutlineComment className="text-xl mr-2" />
                    <span className="text-sm font-medium">Commenter</span>
                  </button>
                  <button
                    onClick={() =>
                      navigator.share
                        ? navigator.share({ url: video.videoSrc, title: video.title })
                        : alert("Le partage n'est pas pris en charge par ce navigateur")
                    }
                    className="flex items-center text-[#824E5F] hover:text-[#501823]"
                  >
                    <AiOutlineShareAlt className="text-xl mr-2" />
                    <span className="text-sm font-medium">Partager</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
