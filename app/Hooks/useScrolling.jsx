"use Client"
import { useState, useEffect } from 'react';

function useScrolling() {
const [scrollDirection, setScrollDirection] = useState({});

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 150) {
      setScrollDirection({background: "#000000ac", transition: "all 0.5s ease-in-out", boxShadow: "var(--cardShadowSmall)"});
    } else {
      setScrollDirection({background: "#ffffff00", transition: "all 0.5s ease-in-out"});
    }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
    return scrollDirection
}

export default useScrolling;