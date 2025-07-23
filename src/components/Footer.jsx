import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-center text-sm text-gray-600 py-4">
      &copy; {new Date().getFullYear()} Logic in Philosophy
    </footer>
  );
}

