import React from 'react'
import Image from 'next/image'
import classes from './styles.module.css'

function About() {
  return (
    <div className={classes.description} >
        <div className={classes.contImgDescription} >
            <Image src={'/images/chef.png'} fill={true} alt={'description'} />
        </div>
        <div className={classes.descriptionText}>
            <h1>
                TAMBO INKA KATERING
            </h1>
            <p>
                Somos una empresa dedicada a la organización de eventos sociales y corporativos, con más de 10 años de experiencia en el rubro. Nuestro objetivo es brindar un servicio de calidad, con un trato personalizado y una atención de primera, para que tu evento sea inolvidable.
            </p>
        </div>
        <div className={classes.boxBackgroundOne}></div>
        <div className={classes.boxBackgroundTwo}></div>
    </div>
  )
}

export default About