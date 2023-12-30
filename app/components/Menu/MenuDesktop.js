import * as React from 'react';
import { useEffect, useState, useRef } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Image from 'next/image'
import Link from 'next/link';
import classes from './menu.module.css'


function ResponsiveAppBar({ pages }) {
  const [ setAnchorElNav] = React.useState(null);
  const ref = useRef();


  // Pasar esto a un hook
  const [scrollDirection, setScrollDirection] = useState({background: "#ffffff00", transition: "all 0.5s ease-in-out", boxShadow: "none"});
  //  const [ setIsHovered] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  useEffect(() => {
    ref.current.focus();
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrollDirection({background: "#000000", transition: "all 0.5s ease-in-out", boxShadow: "var(--cardShadowSmall)"});
      } else {
        setScrollDirection({background: "#ffffff00", transition: "all 0.5s ease-in-out", boxShadow: "none"});
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" sx={{md: 'flex', alignContent: "center", alignItems: "center", background: `${scrollDirection.background}`, height: "7rem", boxShadow:`${scrollDirection.boxShadow}` , transition: `${scrollDirection.transition}`}}>
      <Container maxWidth="xl" sx={{md: 'flex', alignContent: "center", alignItems: "center"}} >
        <Toolbar disableGutters>
             <Image
                src="/images/logo_1.svg"
                width={80}
                height={60}
                alt="logo-tambo-inka"
              />
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', justifyContent:"flex-end" } }}>
            <ul className={classes.ulItem}>
              {pages.map((page, index) => (
                    <Link
                    key={index}
                    ref={ref}
                    style={{textDecoration: "none", padding: "1rem", color: "white", fontFamily: 'Roboto Condensed, sans-serif', fontWeight: 400, letterSpacing: '.005rem'}}
                    href={`/#${page.toLowerCase()}`}
                    onClick={handleCloseNavMenu}
                    >
                      {page}
                  </Link>
              ))}
            </ul>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;