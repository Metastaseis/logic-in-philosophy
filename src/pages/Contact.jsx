import React from "react";
import { useTranslation } from "react-i18next";
import PageLayout from "../components/PageLayout";
import Prose from "../components/Prose";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <PageLayout title={t("pages.contact.title", "Contact")}>
      <Prose>
        <p>{t("contact.intro", "Reach out with questions, ideas, or collaboration requests.")}</p>
        <p>
          <a href="mailto:logic@tau.ac.il">logic@tau.ac.il</a>
        </p>
      </Prose>
    </PageLayout>
  );
}
