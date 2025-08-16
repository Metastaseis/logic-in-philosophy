import React from "react";
import PageLayout from "../components/PageLayout";

const images = import.meta.glob(
  "../assets/archive/*.{jpg,jpeg,png,webp,gif,svg,JPG,JPEG,PNG,WEBP,GIF,SVG}",
  { eager: true, query: "?url", import: "default" }
);

export default function Archive() {
  const list = Object.values(images); // array of URLs
  return (
    <PageLayout title="Archive">
      {list.length === 0 ? (
        <p className="text-gray-500">
          Add images to <code>src/assets/archive</code> to see the gallery.
        </p>
      ) : (
        <div className="masonry">
          {list.map((src, i) => (
            <img key={i} src={src} alt={`Archive item ${i + 1}`} />
          ))}
        </div>
      )}
    </PageLayout>
  );
}

