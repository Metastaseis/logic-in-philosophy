
import React from "react";
import { useTranslation } from "react-i18next";
import HeroBanner from "../components/HeroBanner";
import CategoryTiles from "../components/CategoryTiles";
import EventStripe from "../components/EventStripe";
import MotionFade from "../utils/MotionFade";
import hero1 from "../assets/hero/hero1.jpg";
import PromoGrid from "../components/PromoGrid";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="overflow-hidden">
      {/* Single hero (new) */}
      <HeroBanner
        image={hero1}
        kicker={t("home.kicker", "Welcome")}
        title={t("home.title", "Logic in Philosophy")}
        body={t("home.intro", "Explore the frontiers of logic, language, and mind.")}
        ctaText={t("home.cta", "See what’s on")}
        ctaHref="/workshop"
      />

      {/* Coloured tiles */}
      <MotionFade delay={0.1}>
        <CategoryTiles
          items={[
           { to: "/workshop",  label: t("nav.workshop", "Workshop"),  color: "bauYellow", icon: "calendar" },
           { to: "/media",     label: t("nav.media", "Media"),        color: "bauRed",    icon: "film" },
           { to: "/resources", label: t("nav.resources", "Resources"), color: "bauBlue",   icon: "book" },
        ]}
/>  
      </MotionFade>

      <MotionFade delay={0.12}>
        <PromoGrid />
      </MotionFade>

      {/* Events stripe (keep as-is) */}
      <MotionFade delay={0.15}>
        <EventStripe />
      </MotionFade>
    </div>
  );
}



