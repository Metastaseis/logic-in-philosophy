import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import EventStripe from "../components/EventStripe";

// OPTIONAL placeholders – swap for real images in src/assets/
import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">

      {/* ───────── HERO (red diagonal) ───────── */}
      <section className="relative text-white">
        {/* diagonal background */}
        <div className="hero-diagonal absolute inset-0 -z-10"></div>

        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center py-24 px-6">
          {/* Logo placeholder – swap later */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
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

      {/* ───────── BAUHAUS GRID ───────── */}
      <section className="container mx-auto py-20 px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { color: "bauBlue",   icon: "🧠", text: t("pages.about.title"),     link: "/about" },
            { color: "bauYellow", icon: "📚", text: t("pages.resources.title"), link: "/resources" },
            { color: "bauRed",    icon: "🎥", text: t("pages.media.title"),     link: "/media" },
          ].map(({ color, icon, text, link }) => (
            <a
              key={link}
              href={link}
              className={`group relative aspect-square flex flex-col justify-center items-center
                          text-white text-xl font-semibold shadow-md transition-transform
                          hover:-translate-y-1 bg-${color}`}
            >
              <span className="text-5xl mb-3 transition-opacity group-hover:opacity-80">{icon}</span>
              <span className="transition-opacity group-hover:opacity-80">{text}</span>
            </a>
          ))}
        </div>
      </section>

      {/* ───────── UPCOMING EVENTS STRIPE ───────── */}
      <EventStripe />

      {/* ───────── ASYMMETRIC FEATURE SECTION ───────── */}
      <section className="bg-white py-24">
        <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
          {/* image left, text right */}
          <img src={feature1} alt="Historical poster" className="w-full shadow-lg rounded-lg" />
          <div>
            <h2 className="text-3xl font-bold mb-4">{t("home.feature1Heading")}</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              {t("home.feature1Body")}
            </p>
          </div>

          {/* text left, image right */}
          <div className="order-last md:order-none">
            <h2 className="text-3xl font-bold mb-4">{t("home.feature2Heading")}</h2>
            <p className="leading-relaxed text-gray-700 dark:text-gray-300">
              {t("home.feature2Body")}
            </p>
          </div>
          <img src={feature2} alt="Exhibition view" className="w-full shadow-lg rounded-lg" />
        </div>
      </section>
    </div>
  );
}


