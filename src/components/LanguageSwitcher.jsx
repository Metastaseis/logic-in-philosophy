import React from "react";
import { useTranslation } from "react-i18next";

const langs = [
  { code: "en", label: "EN", dir: "ltr" },
  { code: "he", label: "HE", dir: "rtl" },
  { code: "ar", label: "AR", dir: "rtl" }
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const changeLang = (code, dir) => {
    i18n.changeLanguage(code);
    document.documentElement.dir = dir;          // sets RTL/LTR
    localStorage.setItem("dir", dir);            // remember preference
  };

  return (
    <div className="flex space-x-2">
      {langs.map(({ code, label, dir }) => (
        <button
          key={code}
          onClick={() => changeLang(code, dir)}
          className={`px-2 py-1 rounded ${
            i18n.language === code ? "bg-yellow-400 text-black" : "bg-gray-700"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
