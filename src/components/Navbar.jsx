// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  // Ensure <html> dir/lang always match the current language
  useEffect(() => {
    const lang = i18n.language || "en";
    const dir = lang === "ar" || lang === "he" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [i18n.language]);

  const setLang = (lng) => {
    i18n.changeLanguage(lng);
    const dir = lng === "ar" || lng === "he" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lng);
  };

  const news = [
    t("ticker.cfp", "Call for Papers: Logic & AI"),
    t("ticker.videos", "Workshop videos now online"),
    t("ticker.hebrew", "Hebrew resources updated"),
  ];

  const links = [
    { to: "/about",     label: t("nav.about", "About") },
    { to: "/workshop",  label: t("nav.workshop", "Workshop") },
    { to: "/media",     label: t("nav.media", "Media") },
    { to: "/resources", label: t("nav.resources", "Resources") },
    { to: "/archive",   label: t("nav.archive", "Archive") },
    { to: "/contact",   label: t("nav.contact", "Contact") },
  ];

  return (
    <header className="bg-black text-white sticky top-0 z-50">
      {/* Top bar */}
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-semibold">
          {t("site.title", "Logic in Philosophy")}
        </Link>

        {/* Desktop nav + language */}
        <div className="hidden md:flex items-center gap-6">
          <ul className="flex items-center gap-6">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className="nav-underline px-2 py-1">
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <div className="flex items-center gap-2 ml-4">
            {["en", "he", "ar"].map((lng) => (
              <button
                key={lng}
                onClick={() => setLang(lng)}
                aria-pressed={i18n.language === lng}
                className={`px-2 py-1 text-xs rounded transition
                  ${i18n.language === lng ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"}`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden text-2xl"
          aria-label={t("nav.toggle", "Toggle navigation")}
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-white/10 bg-black">
          <ul className="flex flex-col px-4 py-3 gap-3">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink to={to} className="block px-2 py-1" onClick={() => setOpen(false)}>
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="px-4 pb-4 flex items-center gap-2">
            {["en", "he", "ar"].map((lng) => (
              <button
                key={lng}
                onClick={() => { setLang(lng); setOpen(false); }}
                aria-pressed={i18n.language === lng}
                className={`px-2 py-1 text-xs rounded transition
                  ${i18n.language === lng ? "bg-white text-black" : "bg-white/10 text-white hover:bg-white/20"}`}
              >
                {lng.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Blue ticker strip */}
      <div className="bg-bauBlue text-white text-sm h-8 flex items-center">
        <Marquee speed={40} gradient={false}>
          {news.map((item, i) => (
            <span key={i} className="mx-8">{item}</span>
          ))}
        </Marquee>
      </div>
    </header>
  );
}


