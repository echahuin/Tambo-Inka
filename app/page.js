"use client"
import { useEffect } from 'react'
import PrincipalSlider from './Sections/PrincipalSlider'
import Services from './Sections/Services'
import Footer from './Sections/Footer'
import Galeria from './Sections/Galeria'
import Map from './Sections/Map'
import AOS from "aos";


export default function Home() {

  useEffect(() => {
    AOS.init();
  }, [])
  

  return (
    <div>
      <PrincipalSlider />
      <Services />
      <Galeria animation="fade-up" />
      <Map animation="fade-up" />
      <Footer />
        
    </div>
  )
}

