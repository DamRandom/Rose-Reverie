"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Closes the menu when a link is clicked (for mobile)
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="bg-[#0C1212] text-[#BFADB4] shadow-lg fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link
            href="/"
            className="hover:text-[#824E5F] transition-colors duration-300"
          >
            Rosé Reverie
          </Link>
        </div>

        {/* Navigation menu (Desktop) */}
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="nav-link">
            À propos de nous
          </Link>
          <Link href="#services" className="nav-link">
            Services
          </Link>
          <Link href="#team" className="nav-link">
            Notre Équipe
          </Link>
          <Link href="#contact" className="nav-link">
            Contact
          </Link>
        </div>

        {/* Menu icon for mobile devices */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#BFADB4]">
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Dropdown menu for mobile devices */}
      {isOpen && (
        <div className="md:hidden bg-[#0C1212] text-[#BFADB4]">
          <div className="px-6 py-4 flex flex-col space-y-4">
            <Link href="#about" className="nav-link" onClick={closeMenu}>
              À propos de nous
            </Link>
            <Link href="#services" className="nav-link" onClick={closeMenu}>
              Services
            </Link>
            <Link href="#team" className="nav-link" onClick={closeMenu}>
              Notre Équipe
            </Link>
            <Link href="#contact" className="nav-link" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
