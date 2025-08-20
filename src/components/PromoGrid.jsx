import React from "react";
import { Link } from "react-router-dom";

const colorMap = {
  bauRed: "bg-bauRed",
  bauBlue: "bg-bauBlue",
  bauYellow: "bg-bauYellow",
};

function PromoCard({ to, color = "bauRed", title, body, cta }) {
  return (
    <Link
      to={to}
      className={`block rounded-2xl shadow-md text-white p-6 md:p-8
                  transition hover:-translate-y-1 ${colorMap[color] ?? "bg-bauBlue"}`}
    >
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="opacity-90 mb-6">{body}</p>
      <span className="ui inline-block bg-white text-black px-3 py-1 rounded">
        {cta}
      </span>
    </Link>
  );
}

export default function PromoGrid() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="grid gap-6 md:grid-cols-3">
        <PromoCard
          to="/media"
          color="bauRed"
          title="Watch"
          body="Talks and workshops from our archive."
          cta="Explore videos"
        />
        <PromoCard
          to="/resources"
          color="bauBlue"
          title="Read"
          body="Papers, notes, and teaching materials."
          cta="Browse resources"
        />
        <PromoCard
          to="/contact"
          color="bauYellow"
          title="Subscribe"
          body="Get updates on new events and calls."
          cta="Join the list"
        />
      </div>
    </section>
  );
}