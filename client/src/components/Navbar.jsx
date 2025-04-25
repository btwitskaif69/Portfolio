import React from 'react';
import logo from '@/assets/logo.png'; // Adjust path based on your file structure

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-14 sm:h-18">
          <img 
            src={logo} 
            alt="Logo"
            className="h-4 sm:h-6 w-auto"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;