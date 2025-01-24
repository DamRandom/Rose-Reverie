import React from "react";
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => (
  <footer className="bg-[#1c1c1c] text-[#f0eae0] py-6">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Contact Section */}
      <div className="mb-4 md:mb-0">
        <h3 className="text-xl font-semibold text-[#a07855]">Contact</h3>
        <ul className="mt-2 space-y-1">
          <li>
            <a
              href="mailto:info@salon.com"
              className="text-[#f0eae0] hover:text-[#a07855] transition-colors duration-300"
            >
              info@salon.com
            </a>
          </li>
          <li>
            <a
              href="tel:+1234567890"
              className="text-[#f0eae0] hover:text-[#a07855] transition-colors duration-300"
            >
              +1 (234) 567-890
            </a>
          </li>
        </ul>
      </div>

      {/* Social Media Section */}
      <div className="flex space-x-6">
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f0eae0] hover:text-[#a07855] transition-colors duration-300"
        >
          <FaInstagram size={24} />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#f0eae0] hover:text-[#a07855] transition-colors duration-300"
        >
          <FaFacebook size={24} />
        </a>
      </div>
    </div>

    <div className="border-t border-[#333333] mt-6 pt-4 text-center">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-[#a07855]">[Salon Name]</span>. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
