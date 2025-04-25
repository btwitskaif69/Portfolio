import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Pages/Home/Hero'
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

const App = () => {
  return (
    <div className="flex flex-col space-y-4">
    <SmoothCursor />
    <Navbar/>
    <Hero/>
    <VelocityScroll>Scroll Based Velocity</VelocityScroll>

    </div>
  )
}

export default App