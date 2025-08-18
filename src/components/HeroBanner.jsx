
import React from "react";

export default function HeroBanner({
  image, kicker, title, body, ctaText, ctaHref = "#",
}) {
  return (
    <section className="relative text-white">
      {/* Background image */}
      <img
        src={image}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      />
      {/* Contrast overlay above image */}
      <div className="absolute inset-0 bg-black/35 z-10" aria-hidden="true" />
      {/* Optional diagonal red plane (blends with image) */}
      <div
        className="hero-diagonal absolute inset-0 z-20 pointer-events-none"
        aria-hidden="true"
      />

      {/* Foreground content */}
      <div className="relative z-30 container mx-auto px-6 py-24 md:py-32 max-w-6xl">
        {kicker && <p className="ui text-sm mb-3 opacity-90">{kicker}</p>}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-3xl">
          {title}
        </h1>
        {body && (
          <p className="mt-6 max-w-2xl text-lg md:text-xl opacity-90">
            {body}
          </p>
        )}
        {ctaText && (
          <a
            href={ctaHref}
            className="ui inline-block mt-8 px-5 py-3 bg-bauRed hover:bg-red-700 transition rounded"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}