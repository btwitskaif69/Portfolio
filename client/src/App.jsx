import React from 'react'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { ContactForm } from '@/components/ContactForm';
import Footer from './components/Footer';
// import { ShineBorder } from "@/components/magicui/shine-border";
import { TextReveal } from "@/components/magicui/text-reveal";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <VelocityScroll>Scroll Based Velocity</VelocityScroll>
      <TextReveal>I am dedicated to transforming ideas into impactful realities, blending creativity, precision, and a deep passion for excellence to deliver work that truly makes a difference.</TextReveal>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App