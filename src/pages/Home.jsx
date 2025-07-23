import React from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div>

      {/* Hero – simple text for now */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center py-20 bg-gray-100 dark:bg-gray-900"
      >
        <h1 className="text-4xl font-extrabold mb-4">
          {t("home.title")}
        </h1>
        <p className="max-w-2xl text-lg text-gray-700 dark:text-gray-300">
          {t("home.intro")}
        </p>
      </motion.section>

      {/* Feature grid */}
      <section className="container mx-auto py-16 px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: "🧠", title: "Logic & Mind", text: "Exploring formal reasoning in cognitive science." },
            { icon: "📚", title: "Resources",   text: "Download readings, slides, and worksheets." },
            { icon: "🎥", title: "Media",       text: "Watch recorded lectures and panel sessions." }
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl p-6 bg-white dark:bg-gray-800 shadow-md text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

