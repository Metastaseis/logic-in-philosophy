import React from "react";
import { Link } from "react-router-dom";

const colorMap = {
  bauBlue: "bg-bauBlue",
  bauYellow: "bg-bauYellow",
  bauRed: "bg-bauRed",
};

export default function CategoryTiles({ items = [] }) {
  return (
    <section className="container mx-auto py-16 px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ to, label, color = "bauBlue", emoji = "◆" }) => (
          <Link
            key={to}
            to={to}
            className={`group aspect-square rounded-2xl shadow-md flex items-center justify-center
                        text-white text-xl font-semibold hover:-translate-y-1 transition
                        ${colorMap[color] ?? "bg-bauBlue"}`}
          >
            <div className="text-center px-6">
              <div className="text-5xl mb-2 opacity-90">{emoji}</div>
              <div className="ui">{label}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}