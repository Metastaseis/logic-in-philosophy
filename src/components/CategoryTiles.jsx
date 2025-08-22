import React from "react";
import { Link } from "react-router-dom";
import { icons } from "./icons";

// Keep fixed color mapping (Tailwind-safe)
const colorMap = {
  bauBlue: "bg-bauBlue",
  bauYellow: "bg-bauYellow",
  bauRed: "bg-bauRed",
};

export default function CategoryTiles({ items = [] }) {
  return (
    <section className="container mx-auto py-16 px-6">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map(({ to, label, color = "bauBlue", icon = "calendar" }) => {
          const Icon = icons[icon] ?? icons.calendar;
          return (
            <Link
              key={to}
              to={to}
              className={`group aspect-square rounded-bau ring-1 ring-black/10 shadow-bau
            flex items-center justify-center text-white text-xl font-semibold
            card-hover ${colorMap[color] ?? "bg-bauBlue"}`}
            >
              <div className="text-center px-6">
                <Icon className="w-12 h-12 mb-3 opacity-90" aria-hidden="true" />
                <div className="ui">{label}</div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}