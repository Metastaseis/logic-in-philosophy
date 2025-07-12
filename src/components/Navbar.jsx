import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-black text-white shadow-md">
      <nav className="container mx-auto flex items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold tracking-tight">Logic in Philosophy</Link>
        <ul className="flex space-x-4">
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/workshop" className="hover:underline">Workshop</Link></li>
          <li><Link to="/media" className="hover:underline">Media</Link></li>
          <li><Link to="/resources" className="hover:underline">Resources</Link></li>
          <li><Link to="/archive" className="hover:underline">Archive</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;