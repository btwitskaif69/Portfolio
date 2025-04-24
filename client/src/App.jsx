import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Pages/Home/Hero'
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const App = () => {
  return (
    <>
    <SmoothCursor />
    <Navbar/>
    <Hero/>
    </>
  )
}

export default App