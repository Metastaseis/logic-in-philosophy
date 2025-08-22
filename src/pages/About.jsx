import React from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/PageLayout";
import Prose from "../components/Prose";

export default function About() {
  const { t } = useTranslation();

  return (
    <PageLayout title={t("pages.about.title", "About")}>
      <Prose>
        <p>{t("about.intro", "Logic in Philosophy explores...")}</p>

        <h2>{t("about.mission", "Mission")}</h2>
        <p>{t("about.missionBody", "We connect logic, language, and mind...")}</p>

        <h3>{t("about.activities", "Activities")}</h3>
        <ul>
          <li>{t("about.act1", "Workshops & seminars")}</li>
          <li>{t("about.act2", "Video archive and publications")}</li>
          <li>{t("about.act3", "Teaching resources")}</li>
        </ul>

        <blockquote>
          {t("about.quote", "Clarity is the courtesy of philosophers.")}
        </blockquote>

        <hr />

        <h3>{t("about.contact", "Contact")}</h3>
        <p>
          <a href="/contact">{t("about.contactLink", "Get in touch")}</a>
        </p>
      </Prose>
    </PageLayout>
  );
}
