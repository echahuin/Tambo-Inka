"use client"
import { useEffect, useState } from 'react';
import Menu from '../components/Menu'

export default function RootLayout({ children }) {

  const [scrollDirection, setScrollDirection] = useState({}); // Estado para rastrear la dirección del scroll

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        console.log(window.scrollY)
        // Scroll hacia abajo
        setScrollDirection({background: "#000000ac", transition: "all 0.5s ease-in-out", boxShadow: "var(--cardShadowSmall)"});
      } else {
        // Scroll hacia arriba o en la parte superior de la página
        setScrollDirection({background: "#ffffff00", transition: "all 0.5s ease-in-out"});
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Limpia el evento cuando el componente se desmonta
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <>
      <Menu styleScrool={scrollDirection}/>
      {children}
    </>
  )
}
