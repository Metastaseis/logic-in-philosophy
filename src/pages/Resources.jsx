import React from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/PageLayout";
import Prose from "../components/Prose";

export default function Resources() {
   const { t } = useTranslation();
   return (
    <PageLayout title={t("pages.resources.title", "Resources")}>
     <Prose>
        <p>{t("resources.intro", "A curated set of papers, notes, and teaching materials.")}</p>
        <ul>
          <li>{t("resources.item1", "Intro to Modal Logic")}</li>
          <li>{t("resources.item2", "Semantics reading list")}</li>
          <li>{t("resources.item3", "Proof theory notes")}</li>
        </ul>
      </Prose>
    </PageLayout>
   );
  }