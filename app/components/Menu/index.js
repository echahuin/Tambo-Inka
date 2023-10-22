"use client";
import React, {useRef, useState, useEffect} from 'react'
import classes from './menu.module.css'
import Image from 'next/image'
import classnames from 'classnames';
import Link from 'next/link'
import classNames from 'classnames';
import MenuDesktop from './MenuDesktop'
import useDevice from '@/app/Hooks/useDevice';
import useScrolling from '@/app/Hooks/useScrolling';


function Menu() {

  const pages = ['Inicio', 'Servicios', 'Galeria', "Contacto"];
  const [isActive, setsActive] = useState(false);
  const menuRef = useRef(null)

  // const { scrollDirection } = useScrolling();

  const activeMenu = () => {
    !isActive ? setsActive(true) : setsActive(false)
  }
  const {  isDesktop } = useDevice()
  const [scrollDirection, setScrollDirection] = useState({background: "#ffffff00", transition: "all 0.5s ease-in-out", boxShadow: "none"});

  useEffect (() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrollDirection({background: "#000000ac", transition: "all 0.5s ease-in-out", boxShadow: "var(--cardShadowSmall)"});
      } else {
        setScrollDirection({background: "#ffffff00", transition: "all 0.5s ease-in-out", boxShadow: "none"});
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      {isDesktop ? <div className={classes.menuDesktop}>
        <MenuDesktop pages={pages} />
      </div> : 
      <div style={scrollDirection} className={classes.menu}>
          <div ref={menuRef} className={classnames(classes.isActive, { [classes.mobileMenu]: isActive })}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <div className={classes.mobileMenuTitle}>MENU</div>
              <ul className={classes.ulMobile} onClick={()=>{setsActive(false)}} >
                {
                  pages.map((page, index) => {
                    return ( <div key={index}  className={classes.itemMobileMenu} style={{display: "flex", alignItems: "center"}}>
                    <span style={{color: "#e98b39", paddingRight: "2rem", fontFamily: "'Roboto Condensed', sans-serif"}} >{`0${index}.`}</span><Link style={{textDecoration: "none", color: "#e2e2e2"}} href={`/#${page.toLowerCase()}`} > <li className={classes.liMobile}>{page}</li> </Link>
                  </div>)    
                  })
                }
              </ul>
            </div>
          </div>
        <>
          <div className={classes.imgStyle}>
            <Image
              src="/images/logo_1.svg"
              width={80}
              height={50}
              alt="logo-tambo-inka"
            />
          </div>
          <div onClick={activeMenu} className={classnames(classes.logoMenu, {[classes.isActiveLogoMenu]: isActive })}>
            <div className={classnames(classes.isActiveIndx, {[classes.indx]: isActive })}></div>
            <div className={classnames(classes.isActiveIndx, {[classes.indx]: isActive })}></div>
            <div className={classnames(classes.isActiveIndx, {[classes.indx]: isActive })}></div>
          </div>
        </>
        </div>}
      </div>
  )
}

export default Menu