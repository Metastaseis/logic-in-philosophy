import React from "react";
import { useTranslation } from "react-i18next";
import ReactPlayer from "react-player";
import PageLayout from "../components/PageLayout";


export default function Media() {
  const { t } = useTranslation();

  return (
    <PageLayout title={t("pages.media.title")}>

      {/* YouTube section */}
      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">
          {t("pages.media.youtubeHeading")}
        </h2>
        <div className="aspect-video">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"  // 🔁 swap
            width="100%"
            height="100%"
            controls
          />
        </div>
      </section>

      {/* Zoom / live stream placeholder */}
      <section>
        <h2 className="text-xl font-semibold mb-4">
          {t("pages.media.zoomHeading")}
        </h2>
        <div className="w-full aspect-video bg-gray-200 flex items-center justify-center">
          {/* Replace the <p> with your Zoom embed iframes when ready */}
          <p className="text-gray-600">
            Live workshop stream will appear here.
          </p>
        </div>
      </section>
    </PageLayout>
  );
}
