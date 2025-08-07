import React from "react";
import { Link } from "react-router-dom";
import events from "../data/events.json";

export default function EventStripe() {
  return (
    <section className="overflow-x-auto py-12 bg-bauGray/20">
      <div
        className="flex gap-6 px-6"
        style={{ scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}
      >
        {events.map(({ title, date, color, link }) => (
          <Link
            key={title}
            to={link}
            className={`flex-none w-64 h-64 rounded-2xl p-6 shadow-lg text-white
                        bg-${color} transition-transform hover:-translate-y-1`}
            style={{ scrollSnapAlign: "center" }}
          >
            <p className="text-sm opacity-80 mb-4">{date}</p>
            <h3 className="text-2xl font-bold leading-snug">{title}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}