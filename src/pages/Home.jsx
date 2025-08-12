// src/pages/Home.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import MotionFade from "../utils/MotionFade";
import EventStripe from "../components/EventStripe";
import feature1 from "../assets/feature1.jpg";
import feature2 from "../assets/feature2.jpg";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">

      {/* ───────── HERO ───────── */}
      <MotionFade delay={0.05} y={10}>
        <section className="relative text-white">
          <div className="hero-diagonal absolute inset-0 -z-10"></div>

          <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center py-24 px-6">
            {/* Logo spot (keep blank box until SVG) */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-end"
            >
              <div className="w-48 h-48 md:w-64 md:h-64 bg-white"></div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left space-y-6"
            >
              <h1 className="text-4xl md:text-5xl leading-tight">{t("home.title")}</h1>
              <p className="text-lg md:text-xl text-bauGray">{t("home.intro")}</p>
            </motion.div>
          </div>
        </section>
      </MotionFade>

      {/* ───────── COLOURED TILE GRID ───────── */}
      <MotionFade delay={0.1}>
        <section className="container mx-auto py-20 px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { color: "bauBlue",   icon: "🧠", text: t("pages.about.title"),     link: "/about" },
              { color: "bauYellow", icon: "📚", text: t("pages.resources.title"), link: "/resources" },
              { color: "bauRed",    icon: "🎥", text: t("pages.media.title"),     link: "/media" },
            ].map(({ color, icon, text, link }) => (
              <Link
                key={link}
                to={link}
                className={`group relative aspect-square flex flex-col justify-center items-center
                            text-white text-xl font-semibold shadow-md transition-transform
                            hover:-translate-y-1 bg-${color}`}
              >
                <span className="text-5xl mb-3 transition-opacity group-hover:opacity-80">{icon}</span>
                <span className="transition-opacity group-hover:opacity-80">{text}</span>
              </Link>
            ))}
          </div>
        </section>
      </MotionFade>

      {/* ───────── UPCOMING EVENTS STRIPE ───────── */}
      <MotionFade delay={0.15}>
        <EventStripe />
      </MotionFade>

      {/* ───────── FEATURE SECTION WITH REAL IMAGES ───────── */}
      <MotionFade delay={0.2}>
        <section className="bg-white py-24">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center px-6">
            {/* image left */}
            <img
              src={feature1}
              alt="Feature illustration one"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />

            {/* text right */}
            <div>
              <h2 className="text-3xl font-bold mb-4">{t("home.feature1Heading")}</h2>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {t("home.feature1Body")}
              </p>
            </div>

            {/* text left */}
            <div className="order-last md:order-none">
              <h2 className="text-3xl font-bold mb-4">{t("home.feature2Heading")}</h2>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {t("home.feature2Body")}
              </p>
            </div>

            {/* image right */}
            <img
              src={feature2}
              alt="Feature illustration two"
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </section>
      </MotionFade>
    </div>
  );
}



