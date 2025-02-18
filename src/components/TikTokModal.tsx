"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

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
                    className="fixed inset-0 flex items-center justify-center bg-[#0a0a0a]/60 backdrop-blur-sm z-50"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-[#171717] p-6 rounded-2xl shadow-2xl text-center w-96 relative"
                        initial={{ opacity: 0, y: -50, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -50, scale: 0.9 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        <button
                            onClick={() => setShowModal(false)}
                            className="absolute top-2 right-2 text-[#ededed] text-sm hover:text-[#ffffff]"
                        >
                            <X size={18} />
                        </button>
                        <h2 className="text-2xl font-bold text-[#ededed] mb-4">Tu nous suis sur TikTok ?</h2>
                        <p className="text-sm sm:text-lg text-[#ededed] mb-4">Découvre nos dernières nouveautés !</p>

                        <div className="bg-[#501823] rounded-xl shadow-md p-4 mb-4">
                            <Image
                                src="/images/TikTok.jpeg"
                                alt="TikTok"
                                className="rounded-md w-full h-auto"
                                width={500}
                                height={300}
                            />
                            <p className="text-[#ffffff] text-center mt-2">Explorez notre contenu exclusif sur TikTok !</p>
                        </div>

                        <a
                            href="https://www.tiktok.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-block bg-[#501823] text-[#ffffff] px-4 py-2 rounded-md font-medium hover:bg-[#e60045] transition"
                        >
                            Voir sur TikTok
                        </a>
                        <button
                            onClick={() => setShowModal(false)}
                            className="block mt-3 text-xs text-[#ededed] hover:text-[#ffffff]"
                        >
                            Non, merci
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
