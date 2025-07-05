import React from 'react'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'
import HeroSection from './pages/HeroSection'
import MyServices from './pages/Myservice'
import WorkExperience from './pages/WorkExperience'
import Portfolio from './pages/Portfolio'

const App = () => {
  return (
    <>
      <NavBar/>
      <HeroSection/>
      <MyServices/>
      <WorkExperience/>
      <Portfolio/>
      <Footer/>
    </>
  )
}

export default App
