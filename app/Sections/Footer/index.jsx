/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import classes from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'

function index() {
  return (
    <div id="contacto" >
      <div className={classes.footer}>
        <h2>Contáctanos</h2>
        <p>Si tienes alguna duda o sugerencia, no dudes en contactarnos.</p>
        <div className={classes.infoContact} > 
          <Image src={'/images/social/mail.png'} height={20} width={20} />
          <p>tamboinkac.p@gmail.com</p>
        </div>
        <div className={classes.infoContact}>
          <Image src={'/images/social/whatsapp.png'} height={20} width={20} />
          <p>+541159343447</p>
        </div>
        <div className={classes.infoContact}>
          <Image src={'/images/social/placeholder.png'} height={20} width={20} />
          <p>Sta. Cruz, Ingeniero Budge, Provincia de Buenos Aires</p>
        </div>
        <h2>Sigamos Conectados</h2>
        <p>Si quieres estar al tanto de nuestras novedades, síguenos en nuestras redes sociales.</p>
        <div className={classes.socialContact}>
          <Link href={'https://www.facebook.com/catering.tambo.inka/'} ><Image src={'/images/social/facebook.png'} height={50} width={50} /> </Link>
          <Link href={'https://instagram.com/tambo.inka?igshid=NGVhN2U2NjQ0Yg=='} ><Image src={'/images/social/instagram.png'} height={50} width={50} /> </Link>
          <Link href={'tiktok.com/@tambo.inka'} ><Image src={'/images/social/tiktok.png'} height={50} width={50} /> </Link>
        </div>
      </div>
      <div className={classes.finFooter} >
          <p>© 2023 - Todos los derechos reservados</p>
          <p>creado por dev-chahuin</p>
      </div>
    </div>
  )
}

export default index