"use client";
import React, {useRef, useState} from 'react'
import classes from './menu.module.css'
import Image from 'next/image'
import classnames from 'classnames';
import useDevice from '@/app/Hooks/useDevice'

function Menu() {
  const { isMobile } = useDevice()
  const [isActive, setisActive] = useState(false);
  const menuRef = useRef(null)

  const activeMenu = () => {
    !isActive ? setisActive(true) : setisActive(false)
  }
  

  return (
    <div className={classes.menu} >
      <div className={classes.imgStyle}>
        <Image
        src="/images/logo.png"
        width={100}
        height={90}
        alt="logo-tambo-inka"
        />
      </div>
      {
        isMobile && (<>
        <div onClick={activeMenu} className={classnames(classes.logoMenu, {[classes.isActiveLogoMenu]: isActive })}>
          <div className={classnames(classes.indx, {[classes.isActiveIndx]: isActive })}></div>
          <div className={classnames(classes.indx, {[classes.isActiveIndx]: isActive })}></div>
          <div className={classnames(classes.indx, {[classes.isActiveIndx]: isActive })}></div>
        </div>
        <div ref={menuRef} className={classnames(classes.mobileMenu, { [classes.isActive]: isActive })}>
          <ul className={classes.ulMobile}>
            <li className={classes.liMobile}>Servicios</li>
            <li className={classes.liMobile}>Galeria</li>
            <li className={classes.liMobile}>Foro</li>
            <li className={classes.liMobile}>Contacto</li>
          </ul>
        </div>
        </>
        )
      } {!isMobile && (<>
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