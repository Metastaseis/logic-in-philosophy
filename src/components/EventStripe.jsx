import React from "react";
import { Link } from "react-router-dom";
import events from "../data/events.json";

export default function EventStripe() {
  return (
    <div className="overflow-x-auto py-4">
      <div className="flex space-x-4 snap-x snap-mandatory scroll-smooth overflow-x-auto">
        {events.map(({ date, title, link, color }, idx) => (
          <Link
            key={idx}
            to={link}
            className={`w-64 h-64 flex-shrink-0 rounded-lg p-4 text-white snap-center flex flex-col justify-between bg-${color}`}
          >
            <span className="text-sm">{date}</span>
            <span className="text-2xl font-semibold">{title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
