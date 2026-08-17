import React from 'react'
import Header from './sections/Header'
import About from './sections/About'
import Hero from './sections/Hero'
import Serveces from './sections/Serveces'
import CatOne from './sections/CatOne'
import Packages from './sections/Packages'
import Features from './sections/Features'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Serveces />
      <CatOne />
      <Packages />
      <Features />
      <Footer />
    </>
  )
}

export default App