; a/src/App.jsx ; b/src/App.jsx

a/src/App.jsx
 b/src/App.jsx
 -0,0 +1,36 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Archive from './pages/Archive';
import Contact from './pages/Contact';
import Media from './pages/Media';
import Resources from './pages/Resources';
import Workshop from './pages/Workshop';

function App() {
  return (
    <Router>
+      <div className="flex flex-col min-h-screen">
+        <Navbar />
+        <main className="flex-grow container mx-auto p-4">
+          <Routes>
+            <Route path="/" element={<Home />} />
+            <Route path="/about" element={<About />} />
+            <Route path="/archive" element={<Archive />} />
+            <Route path="/contact" element={<Contact />} />
+            <Route path="/media" element={<Media />} />
+            <Route path="/resources" element={<Resources />} />
+            <Route path="/workshop" element={<Workshop />} />
+          </Routes>
+        </main>
+        <Footer />
+      </div>
+    </Router>
  );
}

export default App;
