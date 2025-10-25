// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold">Khaledur Rahman</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-300">
          <li>
            <Link to="/cv" className="hover:text-white transition">
              CV
            </Link>
          </li>
          <li>
            <Link to="/certificates" className="hover:text-white transition">
              Certificates
            </Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-white transition">
              Projects
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 px-4 pb-4 space-y-2 text-gray-300">
          <li>
            <Link
              to="/cv"
              onClick={() => setIsOpen(false)}
              className="block hover:text-white transition"
            >
              CV
            </Link>
          </li>
          <li>
            <Link
              to="/certificates"
              onClick={() => setIsOpen(false)}
              className="block hover:text-white transition"
            >
              Certificates
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              onClick={() => setIsOpen(false)}
              className="block hover:text-white transition"
            >
              Projects
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
