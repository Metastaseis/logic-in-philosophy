import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import newsItems from "../data/news.json";
import { useTranslation } from "react-i18next";

function DatePill({ date }) {
  // Render as e.g. "04 Oct 2025"
  const d = new Date(date);
  const day = d.toLocaleDateString(undefined, { day: "2-digit" });
  const mon = d.toLocaleDateString(undefined, { month: "short" });
  const yr  = d.getFullYear();
  return (
    <span className="ui inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-black text-white">
      <span>{day}</span><span>{mon}</span><span>{yr}</span>
    </span>
  );
}

export default function NewsStrip() {
  const { t } = useTranslation();

  return (
    <section className="container mx-auto px-6 py-10">
      <div className="flex items-end justify-between mb-6">
        <h2 className="text-2xl md:text-3xl font-bold">
          {t("home.newsHeading", "News & Highlights")}
        </h2>
        <Link to="/archive" className="ui link-arrow">
          {t("home.newsAll", "All updates")}
          <ArrowRight className="ml-2 inline-block w-4 h-4 rtl-flip" aria-hidden="true" />
        </Link>
      </div>

      <ul className="divide-y divide-black/10 bg-white rounded-xl ring-1 ring-black/10 overflow-hidden">
        {newsItems.map(item => {
          const isExternal = /^https?:\/\//i.test(item.href);
          const Inner = (
            <div className="flex items-start gap-4 p-4 hover:bg-black/2 transition">
              <DatePill date={item.date} />
              <div className="flex-1">
                <div className="ui text-xs opacity-70 mb-1">{item.category}</div>
                <div className="news-title nav-underline">{item.title}</div>
              </div>
              <ArrowRight className="w-5 h-5 opacity-60 group-hover:opacity-100 rtl-flip" aria-hidden="true" />
            </div>
          );
          return (
            <li key={item.id} className="group">
              {isExternal ? (
                <a href={item.href} target="_blank" rel="noreferrer" className="block">{Inner}</a>
              ) : (
                <Link to={item.href} className="block">{Inner}</Link>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}