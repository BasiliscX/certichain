"use client"; // Add this at the top to make the component client-side

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

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

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-90 shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">CertiChain</h1>
        <nav>
          <ul className="flex space-x-8">
            <li className="group relative">
              <Link href="/" className="hover:text-blue-600">
                <span>Learn</span>
              </Link>
              {/* Dropdown */}
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
            </li>
            <li>
              <Link href="/use">
                <span className="hover:text-blue-600">Use</span>
              </Link>
            </li>
            <li>
              <Link href="/participate">
                <span className="hover:text-blue-600">Participate</span>
              </Link>
            </li>
            <li>
              <Link href="/research">
                <span className="hover:text-blue-600">Research</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
