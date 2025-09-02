import React from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/PageLayout";
import Prose from "../components/Prose";

export default function Workshop() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t("pages.workshop.title", "Workshop")}>
      <Prose>
        <p>{t("workshop.intro", "Weekly meetings on logic, language, and mind.")}</p>
      </Prose>

      {/* Schedule/upcoming list here */}
      {/* ... */}
    </PageLayout>
  );
}
