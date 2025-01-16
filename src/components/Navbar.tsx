"use client"; // Esto indica que este es un componente de cliente

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-background text-foreground shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold">
          <Link href="/" className="text-foreground hover:text-accent">
            [Salon Name]
          </Link>
        </div>

        {/* Menú de navegación */}
        <div className="hidden md:flex space-x-6">
          <Link href="#about" className="text-lg text-muted hover:text-foreground">
            About Us
          </Link>
          <Link href="#services" className="text-lg text-muted hover:text-foreground">
            Services
          </Link>
          <Link href="#contact" className="text-lg text-muted hover:text-foreground">
            Contact
          </Link>
        </div>

        {/* Icono de menú para dispositivos móviles */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-foreground">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Menú desplegable para dispositivos móviles */}
      {isOpen && (
        <div className="md:hidden bg-background text-foreground">
          <div className="px-6 py-4">
            <Link href="#about" className="block text-lg text-muted hover:text-foreground py-2">
              About Us
            </Link>
            <Link href="#services" className="block text-lg text-muted hover:text-foreground py-2">
              Services
            </Link>
            <Link href="#contact" className="block text-lg text-muted hover:text-foreground py-2">
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
