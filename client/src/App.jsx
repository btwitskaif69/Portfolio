import React from 'react'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import { ContactForm } from '@/components/ContactForm';
import Footer from './components/Footer';
// import { ShineBorder } from "@/components/magicui/shine-border";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <VelocityScroll>Scroll Based Velocity</VelocityScroll>
      <ContactForm/>
      <Footer/>
    </div>
  )
}

export default App