import React from 'react'
import './Home.css'
import Navbar from './Navbar/Navbar'
import Hero from './HeroSection/Hero'
import Categories from './Categories/Categories'
import Recomnded from './RecomndedProducts/Recomnded'
import Footer from './Footer/Footer'
function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Categories/>
    <Recomnded/>
    <Footer/>
    </>
  )
}

export default Home
