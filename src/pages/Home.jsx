import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
// import logo from "../assets/logo.svg"; // re-enable once the SVG is uploaded

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">

      {/* HERO */}
      <section className="bg-bauRed text-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center py-24 px-6">
          {/* Logo placeholder – swap when SVG issue is solved */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            {/* <img src={logo} alt="Logo" className="w-48 md:w-64" /> */}
            <div className="w-48 h-48 md:w-64 md:h-64 bg-white"></div>
          </motion.div>

          {/* Title + intro */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-left space-y-6"
          >
            <h1 className="text-4xl md:text-5xl leading-tight">
              {t("home.title")}
            </h1>
            <p className="text-lg md:text-xl text-bauGray">
              {t("home.intro")}
            </p>
          </motion.div>
        </div>
      </section>

      {/* BAUHAUS GRID */}
      <section className="container mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { color: "bauBlue",  icon: "🧠", text: t("pages.about.title"), link: "/about" },
            { color: "bauYellow",icon: "📚", text: t("pages.resources.title"), link: "/resources" },
            { color: "bauRed",   icon: "🎥", text: t("pages.media.title"), link: "/media" },
          ].map(({ color, icon, text, link }) => (
            <a
              key={link}
              href={link}
              className={`relative rounded-2xl aspect-square flex flex-col justify-center items-center text-white text-center text-xl font-semibold shadow-md bg-${color}`}
            >
              <span className="text-5xl mb-3">{icon}</span>
              {text}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}


