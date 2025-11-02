// pages/Home.jsx
import React from 'react'
import Navbar from '../components/Navbar'
import ReviewCard from '../components/ReviewCard'
import ExpertiseCard from '../components/ExpertiseCard'
import WhoAmI from '../components/WhoAmI'
import HeroSection from '../components/Herosection'
import MySkills from '../components/Myskills'
import Contact from '../components/Contact'
import MyProjects from '../components/Project'

const Home = () => {
  return (
    <div className="relative bg-black">
      {/* Hero Section with gradient overlays */}
      <div className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/30 via-black to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/10 via-transparent to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
        
        <Navbar />
        
        <main className="relative">
          <HeroSection />
          
          {/* Side Cards - Hidden on mobile */}
          <div className="hidden lg:block">
            {/* <ReviewCard /> */}
            {/* <ExpertiseCard /> */}
          </div>
        </main>
      </div>

      {/* Who Am I Section */}
      <WhoAmI />
<MyProjects />
      {/* My Skills Section */}
      <MySkills />
      <Contact />
    </div>
  )
}

export default Home