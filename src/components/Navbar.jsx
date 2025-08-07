import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";

function Navbar() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/about", label: t("nav.about") },
    { to: "/workshop", label: "Workshop" },
    { to: "/media", label: "Media" },
    { to: "/resources", label: "Resources" },
    { to: "/archive", label: "Archive" },
    { to: "/contact", label: "Contact" },
  ];

  const announcements = [
    "Call for Papers: Logic in AI",
    "Video: 2024 Workshop recordings live",
    "New! Hebrew translations of resources",
  ];

  return (
    <header
      className={`sticky top-0 w-full z-50 text-white transition-colors ${
        scrolled ? "bg-black/80" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-semibold">
          Logic in Philosophy
        </Link>

        <button
          className="ml-auto block md:hidden"
          onClick={() => setOpen(true)}
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

        <ul className="hidden md:flex md:items-center">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="nav-underline ml-6 md:ml-0"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <LanguageSwitcher />
      </nav>

      <Marquee speed={40} className="bg-bauBlue text-white">
        {announcements.map((item, idx) => (
          <span key={idx} className="mx-4">
            {item}
          </span>
        ))}
      </Marquee>

      <div
        className={`fixed inset-y-0 right-0 w-64 bg-black/80 p-6 transition-transform duration-300 transform ${
          open ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="mb-4 ml-auto block"
          onClick={() => setOpen(false)}
          aria-label="Close navigation"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul>
          {links.map((link) => (
            <li key={link.to} className="py-2">
              <Link
                to={link.to}
                className="nav-underline ml-6 md:ml-0"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
