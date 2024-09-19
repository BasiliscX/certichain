"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useWeb3 } from "@/context/web3context/useWeb3";
import { HamburgerMenu } from "./HamburgerMenu";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { ethAccount } = useWeb3();

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

  const textColor = isScrolled ? "text-black" : "text-white";
  const linkClass = "hover:text-gray-600";

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white bg-opacity-90 shadow-lg" : "bg-blue-900 "
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className={`text-2xl font-bold ${textColor}`}>
          CertiChain
        </Link>

        <p
          className={`italic text-sm text-center font-bold hidden mx-7 md:block ${textColor}`}
        >
          Transforming credential validation with blockchain technology
        </p>

        <nav className="hidden md:flex space-x-8 items-center">
          <Link href="/login" className={`${textColor} ${linkClass}`}>
            {ethAccount ? (
              <p>Connected: 0x...{ethAccount.slice(-4)}</p>
            ) : (
              <p>Get Started</p>
            )}
          </Link>
          <Link href="/learn" className={`${textColor} ${linkClass}`}>
            Learn
          </Link>
          <Link href="/#" className={`${textColor} ${linkClass}`}>
            Use
          </Link>
          <Link href="/#" className={`${textColor} ${linkClass}`}>
            Participate
          </Link>
          <Link href="/#" className={`${textColor} ${linkClass}`}>
            Research
          </Link>
        </nav>

        <HamburgerMenu textColor={textColor} linkClass={linkClass} />
      </div>
    </header>
  );
}
