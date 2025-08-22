import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { icons } from "./icons";


import publicationImg from "../assets/promo/publication.svg";

function SolidCard({ to, colorClass, Icon, title, body, cta }) {
  return (
    <Link
      to={to}
      className={`group ${colorClass}
                  ${colorClass === "bg-bauYellow" ? "text-black" : "text-white"}
                  rounded-bau ring-1 ring-black/10 shadow-bau
                  card-pad card-hover block no-underline`}
    >
      <div className="flex items-start gap-4">
        <Icon className="w-10 h-10 opacity-90" aria-hidden="true" />
        <div>
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="opacity-90 mb-6">{body}</p>
          <span className="ui inline-block bg-white text-black px-3 py-1 rounded-bau">
            {cta}
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function PromoShowcase() {
  const { t } = useTranslation();
  const Film = icons.film;
  const Mail = icons.mail;

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        {/* IMAGE CARD (left, spans 2 cols) */}
        <Link
          to="/resources"
          className="group card-img min-h-[260px] md:min-h-[360px] md:col-span-2"
        >
          {publicationImg ? (
            <img
              src={publicationImg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              aria-hidden="true"
            />
          ) : (
            <div className="absolute inset-0 bg-bauGray" aria-hidden="true" />
          )}

          {/* contrast overlay */}
          <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
          {/* optional tint + grain (from Change 3) */}
          <div className="overlay tint-magenta" aria-hidden="true" />
          <div className="overlay grain-sm" aria-hidden="true" />
          {/* brand diagonal */}
          <div className="hero-diagonal absolute inset-0 mix-blend-multiply opacity-80" aria-hidden="true" />

          {/* content */}
          <div className="relative z-30 p-6 md:p-8 text-white max-w-xl">
            <p className="kicker">{t("promo.kicker", "New publication")}</p>
            <h3 className="text-3xl font-bold mb-3">
              {t("promo.pubTitle", "Logic & Language Reader")}
            </h3>
            <p className="opacity-90 mb-5">
              {t("promo.pubBody", "Selected texts from workshops and seminars.")}
            </p>
            <span className="ui inline-block bg-white text-black px-3 py-1 rounded-bau">
              {t("promo.pubCta", "View resources")}
            </span>
          </div>
        </Link>

        {/* SOLID COLOUR CARDS (right column) */}
        <SolidCard
          to="/media"
          colorClass="bg-bauBlue"
          Icon={Film}
          title={t("promo.watchTitle", "Watch")}
          body={t("promo.watchBody", "Talks and workshops from our archive.")}
          cta={t("promo.watchCta", "Explore videos")}
        />
        <SolidCard
          to="/contact"
          colorClass="bg-bauYellow"
          Icon={Mail}
          title={t("promo.subTitle", "Subscribe")}
          body={t("promo.subBody", "Get updates on events and calls.")}
          cta={t("promo.subCta", "Join the list")}
        />
      </div>
    </section>
  );
}