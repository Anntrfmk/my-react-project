import { useState } from 'react'
import './App.css';
import HeroSection from './components/HeroSection';
import ValueProp from './components/ValueProp';
import Features from './components/Features';
import SocialProof from './components/SocialProof';
import CaseStudies from './components/CaseStudies';
import FAQ from'./components/FAQ';
import CTA from './components/CTA';

function App() {
  return (
    <>
    <HeroSection/>
    <ValueProp/>
    <Features/>
    <SocialProof/>
    <CaseStudies/>
    <FAQ/>
    <CTA/>
    </>
  )
}

export default App
