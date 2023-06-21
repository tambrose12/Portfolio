import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'


function App() {

  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Resume />

    </>
  )
}

export default App
