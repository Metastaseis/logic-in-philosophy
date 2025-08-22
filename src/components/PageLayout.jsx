// src/components/PageLayout.jsx
import React from "react";

export default function PageLayout({ title, children }) {
  return (
    <div className="container mx-auto px-6 py-12">
      {title ? <h1 className="section-title text-3xl md:text-4xl font-bold mb-8">{title}</h1> : null}
      {children}
    </div>
  );
}



