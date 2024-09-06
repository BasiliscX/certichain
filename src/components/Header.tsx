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

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-blue-500 bg-opacity-90 shadow-lg"
          : "bg-blue-500 bg-opacity-50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">CertiChain</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/" className="text-white hover:text-gray-300">
            Learn
          </Link>
          <Link href="/use" className="text-white hover:text-gray-300">
            Use
          </Link>
          <Link href="/participate" className="text-white hover:text-gray-300">
            Participate
          </Link>
          <Link href="/research" className="text-white hover:text-gray-300">
            Research
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-3xl text-white" onClick={toggleMenu}>
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul
            className="absolute left-0 top-16 w-full bg-blue-500 bg-opacity-90 space-y-4 py-4 shadow-lg"
            style={{ backdropFilter: "blur(8px)" }}
          >
            <li className="pl-4">
              <Link
                href="/"
                onClick={toggleMenu}
                className="text-white hover:text-gray-300"
              >
                Learn
              </Link>
            </li>
            <li className="pl-4">
              <Link
                href="/use"
                onClick={toggleMenu}
                className="text-white hover:text-gray-300"
              >
                Use
              </Link>
            </li>
            <li className="pl-4">
              <Link
                href="/participate"
                onClick={toggleMenu}
                className="text-white hover:text-gray-300"
              >
                Participate
              </Link>
            </li>
            <li className="pl-4">
              <Link
                href="/research"
                onClick={toggleMenu}
                className="text-white hover:text-gray-300"
              >
                Research
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
