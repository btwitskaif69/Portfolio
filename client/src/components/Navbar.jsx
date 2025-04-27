"use client";
import React from 'react';
import logo from '@/assets/logo.svg';
import { ScrollProgress } from "@/components/magicui/scroll-progress";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-14 sm:h-18">
          <img 
            src={logo} 
            alt="Logo"
            className="h-5 sm:h-7 w-auto"
          />
        </div>
      </div>
      
      {/* Scroll Progress Bar */}
      <ScrollProgress className="absolute bottom-0" />
    </nav>
  );
};

export default Navbar;