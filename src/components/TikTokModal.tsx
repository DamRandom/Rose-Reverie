"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

export default function TikTokModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const halfPage = document.body.scrollHeight / 2;

      if (scrollPosition >= halfPage) {
        setShowModal(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white p-6 rounded-2xl shadow-lg text-center w-96 relative">
        <button
          onClick={() => setShowModal(false)}
          className="absolute top-2 right-2 text-gray-600 text-sm hover:text-gray-800"
        >
          <X size={18} />
        </button>
        <h2 className="text-xl font-bold text-gray-900">Tu nous suis sur TikTok ?</h2>
        <p className="text-gray-600 mt-2">Découvre nos dernières nouveautés !</p>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-[#FF0050] text-white px-4 py-2 rounded-md font-medium hover:bg-[#e60045] transition"
        >
          Voir sur TikTok
        </a>
        <button
          onClick={() => setShowModal(false)}
          className="block mt-3 text-xs text-gray-500 hover:text-gray-700"
        >
          Non, merci
        </button>
      </div>
    </div>
  );
}
