"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ContactForm from "@/components/ContactForm"; // Asegúrate de importar el formulario

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false); // Estado para controlar el formulario

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const textColor = isScrolled ? "text-black" : "text-white";

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-90 shadow-lg" : "bg-blue-900"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Cambiar el href a "/" para redirigir a la página principal */}
        <Link href="/" className={`text-2xl font-bold ${textColor}`}>
          Guillermo Navarro
        </Link>

        {/* Subtitle - Hidden on mobile */}
        <p
          className={`italic text-sm text-center font-bold hidden mx-7 md:block ${textColor}`}
        >
          Software Developer
        </p>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          {/* Botón para descargar el CV */}
          <a
            href="/Guillermo Navarro CV.pdf" // Ruta del archivo dentro de /public
            download="Guillermo Navarro CV.pdf" // Activar descarga
            className={`hover:text-gray-600 ${textColor}`}
          >
            Download CV
          </a>

          {/* Botón para desplegar el formulario de contacto */}
          <button
            className={`hover:text-gray-600 ${textColor}`}
            onClick={() => setShowContactForm(true)} // Mostrar el formulario al hacer clic
          >
            Contact
          </button>
        </nav>

        {/* Mobile Menu Icon */}
        <button
          className={`md:hidden text-3xl ${textColor}`}
          onClick={toggleMenu}
        >
          ☰
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute left-0 top-16 w-full bg-blue-500 bg-opacity-90 space-y-4 py-4 shadow-lg transform transition-all duration-300 ease-in-out ${
            menuOpen
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-8 pointer-events-none"
          }`}
          style={{ backdropFilter: "blur(8px)" }}
        >
          <ul className="space-y-4">
            <li className="pl-4">
              <a
                href="/Guillermo Navarro CV.pdf"
                download="Guillermo Navarro CV.pdf"
                className="text-white hover:text-gray-300"
              >
                Download CV
              </a>
            </li>
            <li className="pl-4">
              <button
                onClick={() => {
                  toggleMenu();
                  setShowContactForm(true); // Mostrar el formulario en modo móvil
                }}
                className="text-white hover:text-gray-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Formulario de contacto como modal */}
      {showContactForm && (
        <ContactForm onClose={() => setShowContactForm(false)} />
      )}
    </header>
  );
}
