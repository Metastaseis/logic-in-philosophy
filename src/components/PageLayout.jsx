// src/components/PageLayout.jsx
import React from "react";
import { motion } from "framer-motion";

export default function PageLayout({ title, children }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="container mx-auto max-w-3xl p-6"
    >
      <h1 className="text-3xl font-bold mb-6">{title}</h1>
      {children}
    </motion.section>
  );
}

