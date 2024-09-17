import { useState } from "react";
import Link from "next/link";
import { useWeb3 } from "@/context/Web3Context";

export const HamburgerMenu: React.FC<HamburgerMenuProps> = ({
  textColor,
  linkClass,
}) => {
  const mobileLinkClass = "text-white hover:text-gray-300";

  const { ethAccount } = useWeb3();

  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div>
      {" "}
      <button
        className={`md:hidden text-3xl ${textColor}`}
        onClick={toggleMenu}
      >
        ☰
      </button>
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
            <Link href="/login" className={`${textColor} ${linkClass}`}>
              {ethAccount ? (
                <p>Connected: 0x...{ethAccount.slice(-4)}</p>
              ) : (
                <p>Get Started</p>
              )}
            </Link>
          </li>
          <li className="pl-4">
            <Link
              href="/learn"
              onClick={toggleMenu}
              className={mobileLinkClass}
            >
              Learn
            </Link>
          </li>
          <li className="pl-4">
            <Link href="/use" onClick={toggleMenu} className={mobileLinkClass}>
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
  );
};
type HamburgerMenuProps = {
  textColor: string;

  linkClass: string;
};
