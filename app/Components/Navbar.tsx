"use client";
import { useState, useEffect } from "react";
import Link from "next/link"; // Import Link from next/link

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Close the menu when clicking on a menu link
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle scroll event
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-800 shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold text-white">
          <Link href="/" className="hover:text-gray-300">
            Suraj Abhushan Bhandar
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-lg text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="#collections" className="text-lg text-white hover:text-gray-300">
            Collections
          </Link>
          <Link href="#about" className="text-lg text-white hover:text-gray-300">
            About Us
          </Link>
          <Link href="#contact" className="text-lg text-white hover:text-gray-300">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden focus:outline-none relative z-50"
        >
          {/* Hamburger Icon */}
          <div
            className={`w-8 h-1 bg-white rounded mb-2 transition-transform duration-300 ${
              isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-white rounded mb-2 transition-opacity duration-300 ${
              isMobileMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className={`w-8 h-1 bg-white rounded transition-transform duration-300 ${
              isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-95 z-40 flex flex-col items-center justify-center space-y-8 text-lg text-white transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <Link
          href="/"
          onClick={closeMobileMenu}
          className="hover:text-gray-300 transition duration-200"
        >
          Home
        </Link>
        <Link
          href="#collections"
          onClick={closeMobileMenu}
          className="hover:text-gray-300 transition duration-200"
        >
          Collections
        </Link>
        <Link
          href="#about"
          onClick={closeMobileMenu}
          className="hover:text-gray-300 transition duration-200"
        >
          About Us
        </Link>
        <Link
          href="#contact"
          onClick={closeMobileMenu}
          className="hover:text-gray-300 transition duration-200"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
