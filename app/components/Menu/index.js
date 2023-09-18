"use client";
import React, {useRef, useState} from 'react'
import classes from './menu.module.css'
import Image from 'next/image'
import classnames from 'classnames';
import Link from 'next/link'
import useDevice from '@/app/Hooks/useDevice'

function Menu({styleScrool}) {
  const { isMobile } = useDevice()
  const [isActive, setisActive] = useState(false);
  const menuRef = useRef(null)

  const activeMenu = () => {
    !isActive ? setisActive(true) : setisActive(false)
  }
  

  return (
    <div style={styleScrool} className={classes.menu} >
      {
        isMobile && (<>
         <div className={classes.imgStyle}>
          <Image
          src="/images/logo_1.svg"
          width={55}
          height={45}
          alt="logo-tambo-inka"
          />
        </div>
          <div onClick={activeMenu} className={classnames(classes.logoMenu, {[classes.isActiveLogoMenu]: isActive })}>
            <div className={classnames(classes.indx, {[classes.isActiveIndx]: isActive })}></div>
            <div className={classnames(classes.indx, {[classes.isActiveIndx]: isActive })}></div>
            <div className={classnames(classes.indx, {[classes.isActiveIndx]: isActive })}></div>
          </div>
          <div ref={menuRef} className={classnames(classes.mobileMenu, { [classes.isActive]: isActive })}>
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
        </>
        )
      } {!isMobile && (<>
       <div className={classes.imgStyle}>
        <Image
          src="/images/logo_1.svg"
          width={100}
          height={90}
          alt="logo-tambo-inka"
        />
      </div>
       <div>
        <ul  className={classes.ul}>
          <li className={classes.li}>Servicios</li>
          <li className={classes.li}>Galeria</li>
          <li className={classes.li}>Foro</li>
          <li className={classes.li}>Contacto</li>
        </ul>
        </div>
      </>)}
      </div>
  )
}

export default Menu