'use-client'
import React from 'react'
import classes from './menu.module.css'
import Image from 'next/image'

function Menu() {
  return (
    <div className={classes.menu} >
      <div>
      <Image
      src="/images/logo.png"
      width={115}
      height={105}
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
    </div>
  )
}

export default Menu