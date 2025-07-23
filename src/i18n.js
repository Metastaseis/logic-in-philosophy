import "./i18n";   // 👈 initialise before <App />
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en.json";
import he from "./locales/he.json";
import ar from "./locales/ar.json";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      he: { translation: he },
      ar: { translation: ar }
    },
    fallbackLng: "en",
    detection: { order: ["querystring", "localStorage", "navigator"] },
    interpolation: { escapeValue: false }
  });

export default i18n;
