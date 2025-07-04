import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import ServicesSection from './components/ServicesSection';
import WorkflowSection from './components/WorkflowSection';
import CaseStudySection from './components/CaseStudySection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <WhatWeDoSection />
      <ServicesSection />
      <WorkflowSection />
      <CaseStudySection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App; 