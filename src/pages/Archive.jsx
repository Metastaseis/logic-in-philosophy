// src/pages/Archive.jsx
import React from "react";
import PageLayout from "../components/PageLayout";

// Eager-import all images in src/assets/archive
const images = import.meta.glob("../assets/archive/*.{jpg,png,webp}", {
  eager: true,
  as: "url",
});

export default function Archive() {
  return (
    <PageLayout title="Archive">
      <div className="masonry">
        {Object.values(images).map((src, i) => (
          <img key={i} src={src} alt="Archive item" />
        ))}
      </div>
    </PageLayout>
  );
}

