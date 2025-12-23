import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import WhoWeAre from './pages/WhoWeAre'
import Problem from './pages/Problem'
import Services from './pages/Services'
import CoreValues from './pages/CoreValues'
import Impact from './pages/Impact'
import Contacts from './pages/Contacts'
import Team from './pages/Team'
import FAQ from './pages/FAQ'
import { initScrollAnimations } from './utils/animations'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    // Reinitialize animations on route change
    setTimeout(() => {
      initScrollAnimations()
    }, 100)
  }, [pathname])

  return null
}

function App() {
  useEffect(() => {
    // Initialize scroll animations on mount
    initScrollAnimations()
  }, [])

  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/problem" element={<Problem />} />
          <Route path="/services" element={<Services />} />
          <Route path="/core-values" element={<CoreValues />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App

