"use client"; // Ensure this is a client-side component

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function MoreInfoSection() {
  const [isOpen, setIsOpen] = useState(false); // State to control the summary
  const [height, setHeight] = useState("0px"); // State for dynamic height
  const contentRef = useRef<HTMLDivElement>(null); // Reference for the content

  // Toggle function to open/close the summary
  const toggleSummary = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? "0px" : `${contentRef.current?.scrollHeight}px`);
  };

  // Adjust height dynamically on component updates (for smoother transitions)
  useEffect(() => {
    setHeight(isOpen ? `${contentRef.current?.scrollHeight}px` : "0px");
  }, [isOpen]);

  return (
    <section className="max-w-4xl px-4 my-12">
      <div
        onClick={toggleSummary}
        className="cursor-pointer text-blue-500 hover:text-blue-700 font-semibold"
      >
        {isOpen ? "▼ Want to Know More?" : "▶ Want to Know More?"}
      </div>

      {/* Smooth transition container */}
      <div
        ref={contentRef}
        className={`overflow-hidden transition-all duration-500 ease-in-out p-4 rounded-lg ${
          isOpen ? "bg-gray-200" : ""
        }`}
        style={{ height }}
      >
        <div className="mt-4 text-left space-y-4">
          <h3 className="text-xl font-semibold">Why CertiChain?</h3>
          <p className="text-gray-600">
            CertiChain offers a revolutionary approach to credential validation.
            By utilizing the power of Soulbound Tokens (SBTs), students and
            educators can ensure the integrity and authenticity of academic
            records. This decentralized system guarantees the security and
            verification of student achievements, making it an essential tool
            for modern education.
          </p>

          <h3 className="text-xl font-semibold">How SBTs Work</h3>
          <p className="text-gray-600">
            Soulbound Tokens (SBTs) are attached to your digital identity and
            cannot be transferred, ensuring that the credentials or achievements
            they represent remain authentic. This allows students to present
            their accomplishments with confidence across institutions and to
            future employers.{" "}
            <Link href="/more-info">
              <span className="text-blue-500 hover:underline">
                ...know more
              </span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
