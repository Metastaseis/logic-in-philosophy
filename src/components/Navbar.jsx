import React, { useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher"; 
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();

  return (
    <header className="bg-black text-white">
      <nav className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Link to="/" className="text-xl font-semibold">
          Logic in Philosophy
        </Link>

        {/* mobile toggle */}
        <button
          className="ml-auto block md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* links */}
        <ul
          className={`w-full md:flex md:items-center md:space-x-4 md:w-auto ${
            open ? "block" : "hidden"
          }`}
        >
          <li><Link to="/about" className="block py-1 px-2 hover:underline">About</Link></li>
          <li><Link to="/workshop" className="block py-1 px-2 hover:underline">Workshop</Link></li>
          <li><Link to="/media" className="block py-1 px-2 hover:underline">Media</Link></li>
          <li><Link to="/resources" className="block py-1 px-2 hover:underline">Resources</Link></li>
          <li><Link to="/archive" className="block py-1 px-2 hover:underline">Archive</Link></li>
          <li><Link to="/contact" className="block py-1 px-2 hover:underline">Contact</Link></li>
          <li><Link to="/about">{t("nav.about")}</Link></li>
        </ul>
        <LanguageSwitcher />
      </nav>
    </header>
  );
}
