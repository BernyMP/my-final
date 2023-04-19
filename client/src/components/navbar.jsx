import React, { useState, useEffect } from "react";

const Navbar = ({ onLinkClick }) => {
  return (
    <div className="flex h-screen bg-gray-200">
      <div className="w-64 bg-blue-600">
        <div className="flex items-center justify-center h-16 text-white">
          Logo
        </div>
        <nav className="mt-5">
          <button
            className="block py-3 px-4 text-sm font-bold text-white hover:bg-blue-500 hover:text-white"
            onClick={() => onLinkClick("Daily Tasks")}
          >
            Daily Tasks
          </button>
          <button
            className="block py-3 px-4 text-sm font-bold text-white hover:bg-blue-500 hover:text-white"
            onClick={() => onLinkClick("Page Not Found")}
          >
            Page Not Found
          </button>
          <button
            className="block py-3 px-4 text-sm font-bold text-white hover:bg-blue-500 hover:text-white"
            onClick={() => onLinkClick("Organizations")}
          >
            Organizations
          </button>
          <button
            className="block py-3 px-4 text-sm font-bold text-white hover:bg-blue-500 hover:text-white"
            onClick={() => onLinkClick("Log Out")}
          >
            Log Out
          </button>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
