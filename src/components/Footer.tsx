import React from "react";
import Image from "next/image";
import { FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#0C1212] text-[#BFADB4] py-16 border-t-4 border-[#824E5F]">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
      
      {/* Sección de contacto */}
      <div className="flex flex-col items-center md:items-start">
        <h3 className="text-lg font-semibold text-[#824E5F] mb-4">Contactez-nous</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="mailto:contact@rose-reverie.com"
              className="text-[#BFADB4] hover:text-[#824E5F] transition-colors duration-300"
            >
              contact@rose-reverie.com
            </a>
          </li>
          <li>
            <a
              href="tel:+1234567890"
              className="text-[#BFADB4] hover:text-[#824E5F] transition-colors duration-300"
            >
              +1 (234) 567-890
            </a>
          </li>
        </ul>
      </div>

      {/* Logo centrado */}
      <div className="flex justify-center">
        <Image 
          src="/logo/logo.png" 
          alt="Rosé Reverie Logo" 
          width={220} 
          height={80} 
          className="w-[220px] h-auto object-contain"
        />
      </div>

      {/* Sección de redes sociales */}
      <div className="flex flex-col items-center md:items-end">
        <h3 className="text-lg font-semibold text-[#824E5F] mb-4">Suivez-nous</h3>
        <div className="flex space-x-6">
          <a
            href="https://www.tiktok.com/@rose.reverie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BFADB4] hover:text-[#824E5F] transition-colors duration-300"
          >
            <FaTiktok size={32} />
          </a>
          <a
            href="https://www.facebook.com/rose.reverie"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#BFADB4] hover:text-[#824E5F] transition-colors duration-300"
          >
            <FaFacebook size={32} />
          </a>
        </div>
      </div>
    </div>

    {/* Derechos reservados */}
    <div className="border-t border-[#333333] mt-12 pt-6 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} {" "}
        <span className="text-[#824E5F]">Rosé Reverie</span>. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
