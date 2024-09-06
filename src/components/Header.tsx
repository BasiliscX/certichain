"use client"; // Make this component client-side

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to handle dropdown

  // Listen for the window scroll event to change header style on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    setDropdownOpen(false); // Close the dropdown when the menu is toggled
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen); // Toggle the Learn dropdown
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CertiChain</h1>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          <div className="relative group">
            <Link href="/" className="hover:text-blue-600">
              <span>Learn</span>
            </Link>
            {/* Dropdown on hover */}
            <ul className="absolute left-0 mt-2 p-2 hidden group-hover:block bg-white shadow-lg rounded-md">
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/learn/basics">
                  <span>Basics</span>
                </Link>
              </li>
              <li className="px-4 py-2 hover:bg-gray-100">
                <Link href="/learn/advanced">
                  <span>Advanced</span>
                </Link>
              </li>
            </ul>
          </div>
          <Link href="/use" className="hover:text-blue-600">
            <span>Use</span>
          </Link>
          <Link href="/participate" className="hover:text-blue-600">
            <span>Participate</span>
          </Link>
          <Link href="/research" className="hover:text-blue-600">
            <span>Research</span>
          </Link>
        </nav>

        {/* Mobile Menu Icon */}
        <button className="md:hidden text-2xl" onClick={toggleMenu}>
          ☰
        </button>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="absolute left-0 top-16 bg-white bg-opacity-90 w-full space-y-4 py-4 shadow-lg md:hidden">
            <li className="pl-4 hover:bg-gray-100">
              <button
                onClick={toggleDropdown}
                className="flex justify-between w-full"
              >
                <span>Learn</span>
              </button>

              {/* Mobile Dropdown for Learn */}
              {dropdownOpen && (
                <ul className="pl-8 space-y-2">
                  <li>
                    <Link href="/learn/basics" onClick={toggleMenu}>
                      Basics
                    </Link>
                  </li>
                  <li>
                    <Link href="/learn/advanced" onClick={toggleMenu}>
                      Advanced
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="pl-4 hover:bg-gray-100">
              <Link href="/use" onClick={toggleMenu}>
                Use
              </Link>
            </li>
            <li className="pl-4 hover:bg-gray-100">
              <Link href="/participate" onClick={toggleMenu}>
                Participate
              </Link>
            </li>
            <li className="pl-4 hover:bg-gray-100">
              <Link href="/research" onClick={toggleMenu}>
                Research
              </Link>
            </li>
          </ul>
        )}
      </div>
    </header>
  );
}
