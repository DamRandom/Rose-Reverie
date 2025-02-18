"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function TikTokModal() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000); // Muestra el modal después de 2 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-black/60 backdrop-blur-sm z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white p-6 rounded-2xl shadow-lg text-center w-96 relative"
            initial={{ opacity: 0, y: -50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
