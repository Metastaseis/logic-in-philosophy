import React from "react";

export default function Prose({ children, className = "" }) {
  return (
    <article className={`prose prose-bauhaus max-w-none ${className}`}>
      {children}
    </article>
  );
}