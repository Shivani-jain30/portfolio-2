import React from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Education from './components/Education'
import Project from './components/Project'
import Skills from './components/Skills'
import Hobbies from './components/Hobbies'
import Contact from './components/Contact'
import "./App.css"
import Footer from './components/Footer'




const App = () => {
  return (
    <div>
      <Navbar/>
      <About/>
      <Education/>
      <Project/>
      <Skills/>
      <Hobbies/>
      <Contact/>
      <Footer/>

    </div>
  )
}

export default App
