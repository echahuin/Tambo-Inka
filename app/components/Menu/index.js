"use client";
import React, {useEffect, useRef, useState} from 'react'
import classes from './menu.module.css'
import Image from 'next/image'
import classnames from 'classnames';
import Link from 'next/link'
import classNames from 'classnames';


function Menu({styleScrool}) {
  const [isActive, setisActive] = useState(false);
  const menuRef = useRef(null)

  const activeMenu = () => {
    !isActive ? setisActive(true) : setisActive(false)
  }
  
  // useEffect(() => {
  //   setisActive(false)
  // }, [isActive])

  return (
    <div style={styleScrool} className={classes.menu} >
      <>
          <div ref={menuRef} className={classnames(classes.isActive, { [classes.mobileMenu]: isActive })}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <div className={classes.mobileMenuTitle}>MENÚ</div>
              <ul className={classes.ulMobile} onClick={()=>{setisActive(false)}} >
                <div className={classes.itemMobileMenu} style={{display: "flex", alignItems: "center"}}>
                  <span style={{color: "#e98b39", paddingRight: "2rem", fontFamily: "'Roboto Condensed', sans-serif"}} >01.</span><Link style={{textDecoration: "none", color: "#e2e2e2"}} href="/Home/#servicios" > <li className={classes.liMobile}>Servicios</li> </Link>
                </div>
                <div className={classes.itemMobileMenu} style={{display: "flex", alignItems: "center"}}>
                  <span style={{color: "#e98b39", paddingRight: "2rem", fontFamily: "'Roboto Condensed', sans-serif"}} >02.</span><Link style={{textDecoration: "none", color: "#e2e2e2"}} href="/Home/#galeria"> <li className={classes.liMobile}>Galeria</li> </Link>
                </div>
                <div className={classes.itemMobileMenu} style={{display: "flex", alignItems: "center"}}>
                  <span style={{color: "#e98b39", paddingRight: "2rem", fontFamily: "'Roboto Condensed', sans-serif"}} >03.</span><Link style={{textDecoration: "none", color: "#e2e2e2"}} href="/Home/#contacto" > <li className={classes.liMobile}>Contacto</li> </Link>
                </div>
              </ul>
            </div>
          </div>
        <>
        <div className={classes.imgStyle}>
          <Image
          src="/images/logo_1.svg"
          width={55}
          height={45}
          alt="logo-tambo-inka"
          />
        </div>
        <div onClick={activeMenu} className={classnames(classes.logoMenu, {[classes.isActiveLogoMenu]: isActive })}>
          <div className={classnames(classes.isActiveIndx, {[classes.indx]: isActive })}></div>
          <div className={classnames(classes.isActiveIndx, {[classes.indx]: isActive })}></div>
          <div className={classnames(classes.isActiveIndx, {[classes.indx]: isActive })}></div>
        </div>
        </>
      </>
      </div>
  )
}

export default Menu