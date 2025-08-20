// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Workshop from "./pages/Workshop";
import Media from "./pages/Media";
import Resources from "./pages/Resources";
import Archive from "./pages/Archive";
import Contact from "./pages/Contact";


export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/media" element={<Media />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}


