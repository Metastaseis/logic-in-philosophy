import React from "react";

export default function SectionHeading({ color = "bauRed", children }) {
  return (
    <h1 className="relative text-3xl md:text-4xl font-bold mb-12 pl-4">
      <span
        className={`absolute inset-0 -z-10 h-2/3 bg-${color} rounded-r-xl`}
      />
      {children}
    </h1>
  );
}
