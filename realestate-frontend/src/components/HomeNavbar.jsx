import React from "react";
import { Link } from "react-router-dom";

function HomeNavbar(){
  return (
    <div className="font-sans bg-[#0f0f0f] text-white">
    <nav className="bg-[#1a1a1a] shadow-md sticky top-0 z-50 py-3">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white">Property</Link>

          <ul className="hidden lg:flex space-x-6 text-sm font-medium">
            <li><Link to="/" className="hover:text-gray-300">Home</Link></li>
            <li className="group relative">
              <button className="hover:text-gray-300">Properties</button>
              <ul className="absolute hidden group-hover:block bg-[#2e2e2e] shadow-md mt-2 py-2 w-44 rounded z-20 text-sm">
                <li><Link to="/buy" className="block px-4 py-2 hover:bg-[#3a3a3a]">Buy Property</Link></li>
                <li><Link to="/sell" className="block px-4 py-2 hover:bg-[#3a3a3a]">Sell Property</Link></li>
                <li className="relative group">
                  <button className="block px-4 py-2 w-full text-left hover:bg-[#3a3a3a]">Dropdown</button>
                  <ul className="absolute hidden group-hover:block bg-[#3a3a3a] left-full top-0 ml-1 shadow-md py-2 w-44 rounded">
                    <li><Link to="/submenu1" className="block px-4 py-2 hover:bg-[#444]">Sub Menu One</Link></li>
                    <li><Link to="/submenu2" className="block px-4 py-2 hover:bg-[#444]">Sub Menu Two</Link></li>
                    <li><Link to="/submenu3" className="block px-4 py-2 hover:bg-[#444]">Sub Menu Three</Link></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to="/services" className="hover:text-gray-300">Services</Link></li>
            <li><Link to="/about" className="hover:text-gray-300">About</Link></li>
            <li><Link to="/contactSupport" className="hover:text-gray-300">Contact Us</Link></li>
          </ul>

          <div className="hidden lg:flex space-x-3">
            <Link to="/login" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-md text-sm">Login</Link>
            <Link to="/register" className="bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-md text-sm">Register</Link>
          </div>

          <button className="lg:hidden text-white text-xl">☰</button>
        </div>
      </nav>
      </div>
);
}

export default HomeNavbar;