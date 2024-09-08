"use client"; // Ensure this is a client-side component

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Listen for scroll event to toggle header background opacity
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

  // Determine text color based on scroll state
  const textColor = isScrolled ? "text-black" : "text-white";
  const linkClass = "hover:text-gray-600";
  const mobileLinkClass = "text-white hover:text-gray-300";

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white bg-opacity-90 shadow-lg"
          : "bg-blue-500 bg-opacity-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Cambiar el href a "/" para redirigir a la página principal */}
        <Link href="/" className={`text-2xl font-bold ${textColor}`}>
          CertiChain
        </Link>

        {/* Subtitle - Hidden on mobile */}
        <p
          className={`italic text-sm text-center font-bold hidden mx-7 md:block ${textColor}`}
        >
          Transforming credential validation with blockchain technology
        </p>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/login" className={`${textColor} ${linkClass}`}>
            Get Started
          </Link>
          <Link href="/" className={`${textColor} ${linkClass}`}>
            Learn
          </Link>
          <Link href="/use" className={`${textColor} ${linkClass}`}>
            Use
          </Link>
          <Link href="/participate" className={`${textColor} ${linkClass}`}>
            Participate
          </Link>
          <Link href="/research" className={`${textColor} ${linkClass}`}>
            Research
          </Link>
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
              <Link
                href="/login"
                onClick={toggleMenu}
                className={mobileLinkClass}
              >
                Get Started
              </Link>
            </li>
            <li className="pl-4">
              <Link href="/" onClick={toggleMenu} className={mobileLinkClass}>
                Learn
              </Link>
            </li>
            <li className="pl-4">
              <Link
                href="/use"
                onClick={toggleMenu}
                className={mobileLinkClass}
              >
                Use
              </Link>
            </li>
            <li className="pl-4">
              <Link
                href="/participate"
                onClick={toggleMenu}
                className={mobileLinkClass}
              >
                Participate
              </Link>
            </li>
            <li className="pl-4">
              <Link
                href="/research"
                onClick={toggleMenu}
                className={mobileLinkClass}
              >
                Research
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
