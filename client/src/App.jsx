import React from 'react'
import Navbar from './components/Navbar'
import { Hero } from './components/Hero'
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <VelocityScroll>Scroll Based Velocity</VelocityScroll>
    </div>
  )
}

export default App