import React from 'react';

const Footer = () => (
  <footer className="bg-background text-foreground py-6">
    <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
      {/* Sección de Contacto */}
      <div className="mb-4 md:mb-0">
        <h3 className="text-xl font-semibold text-accent">Contact</h3>
        <ul className="mt-2">
          <li>
            <a href="mailto:info@salon.com" className="text-muted hover:text-accent transition duration-200">
              info@salon.com
            </a>
          </li>
          <li>
            <a href="tel:+1234567890" className="text-muted hover:text-accent transition duration-200">
              +1 (234) 567-890
            </a>
          </li>
        </ul>
      </div>

      {/* Sección de Redes Sociales */}
      <div className="flex space-x-4">
        <a href="https://www.instagram.com" className="text-muted hover:text-accent transition duration-200" target="_blank" rel="noopener noreferrer">
          {/* Aquí insertas el icono de Instagram */}
        </a>
        <a href="https://www.facebook.com" className="text-muted hover:text-accent transition duration-200" target="_blank" rel="noopener noreferrer">
          {/* Aquí insertas el icono de Facebook */}
        </a>
        {/* Añade más iconos de redes sociales según sea necesario */}
      </div>
    </div>
    <div className="text-center text-muted mt-4">
      <p>© {new Date().getFullYear()} [Salon Name]. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
