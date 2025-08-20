import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-6 py-12 grid gap-10 md:grid-cols-3">
        <div>
          <h4 className="ui text-lg mb-3">{t("site.title", "Logic in Philosophy")}</h4>
          <p className="opacity-80 text-sm">
            {t("footer.tagline", "Logic, language, and mind at TAU.")}
          </p>
        </div>

        <div>
          <h5 className="ui text-sm mb-3">{t("footer.links", "Links")}</h5>
          <ul className="space-y-2 text-sm">
            <li><Link className="hover:underline" to="/about">{t("nav.about","About")}</Link></li>
            <li><Link className="hover:underline" to="/workshop">{t("nav.workshop","Workshop")}</Link></li>
            <li><Link className="hover:underline" to="/media">{t("nav.media","Media")}</Link></li>
            <li><Link className="hover:underline" to="/resources">{t("nav.resources","Resources")}</Link></li>
            <li><Link className="hover:underline" to="/archive">{t("nav.archive","Archive")}</Link></li>
            <li><Link className="hover:underline" to="/contact">{t("nav.contact","Contact")}</Link></li>
          </ul>
        </div>

        <div>
          <h5 className="ui text-sm mb-3">{t("footer.follow", "Follow")}</h5>
          <div className="flex gap-3 text-sm">
            <a className="hover:underline" href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
            <a className="hover:underline" href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
            <a className="hover:underline" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </div>
          <form className="mt-4 flex gap-2" onSubmit={(e)=>e.preventDefault()}>
            <input
              type="email"
              placeholder={t("footer.email","Your email")}
              className="w-full px-3 py-2 rounded bg-white/10 placeholder-white/60 focus:outline-none"
            />
            <button className="ui px-4 py-2 bg-bauRed rounded hover:bg-red-700">
              {t("footer.subscribe","Subscribe")}
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-4 text-xs opacity-70 flex justify-between">
          <span>© {year} {t("site.title","Logic in Philosophy")}</span>
          <span>{t("footer.made","Built with React & Tailwind")}</span>
        </div>
      </div>
    </footer>
  );
}
