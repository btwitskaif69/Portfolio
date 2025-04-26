import React from 'react'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { ContactForm } from '@/components/ContactForm';
import Footer from './components/Footer';
// import { ShineBorder } from "@/components/magicui/shine-border";
import { TextReveal } from "@/components/magicui/text-reveal";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const App = () => {

  
  return (
    <div>
      <Navbar />
      <SmoothCursor />
      <Hero/>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <VelocityScroll>MongoDB Canva Bootstrap PHP Adobe Photoshop JavaScript Vite Express.js NodeJS TailwindCSS JWT Adobe Illustrator EJS Postman Vercel HTML5 Java React Router MySQL Netlify Python C++ React Adobe Lightroom</VelocityScroll>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
      <TextReveal>I am dedicated to transforming ideas into impactful realities, blending creativity, precision, and a deep passion for excellence to deliver work that truly makes a difference.</TextReveal>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App