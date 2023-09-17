"use client";
import React from 'react'
import CardService from '../../../components/CardService'
import classes from './styles.module.css'
import useDevice from '@/app/Hooks/useDevice'

function Services() {
  const { isMobile } = useDevice();

  return (<div id="servicios" >
    {
      isMobile && (<>
        <div className={classes.contServices}>
        <div className={classes.contCardServicesMb}>
          <div className={classes.CardServiceMb}>
            <CardService urlImg={'/images/hamburger.jpg'} subTitle={'Finger Food'} description={"'consiste en pequeñas porciones de alimentos que se pueden comer con las manos sin necesidad de cubiertos.'"}/>
            <CardService urlImg={'/images/asparagus.jpg'} subTitle={'Plato principal'} description={'"El plato principal es el plato principal de una comida, que suele incluir proteínas y guarniciones."'} />
            <CardService urlImg={'/images/dessert.jpg'} subTitle={'Postres'} description={'"El postre es un dulce o plato dulce que se sirve al final de una comida."'}/>
          </div>
        </div>
        </div>
      </>
      )
    }
    {
      !isMobile && (
        <div className={classes.contCardServices}>
         <h1 className={classes.title}>Servicios</h1>
         <div className={classes.CardService}>
           <CardService urlImg={'/images/hamburger.jpg'} subTitle={'Entrada'}/>
         </div>
       </div>
     ) 
    }
    </div>
  )
}

export default Services