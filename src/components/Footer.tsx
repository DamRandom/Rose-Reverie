import React from "react";
import { FaFacebook, FaTiktok } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#0C1212] text-[#BFADB4] py-12 border-t-4 border-[#824E5F]">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Contact Section */}
      <div className="mb-6 md:mb-0 text-center md:text-left">
        <h3 className="text-lg font-semibold text-[#824E5F]">Contactez-nous</h3>
        <ul className="mt-2 space-y-2">
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

      {/* Social Media Section */}
      <div className="flex space-x-6 mb-6 md:mb-0">
        <a
          href="https://www.tiktok.com/@rose.reverie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#BFADB4] hover:text-[#824E5F] transition-colors duration-300"
        >
          <FaTiktok size={24} />
        </a>
        <a
          href="https://www.facebook.com/rose.reverie"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#BFADB4] hover:text-[#824E5F] transition-colors duration-300"
        >
          <FaFacebook size={24} />
        </a>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="border-t border-[#333333] mt-8 pt-4 text-center">
      <p className="text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#824E5F]">Rosé Reverie</span>. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
