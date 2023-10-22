"use client";
import React from 'react'
import CardService from '../../components/CardService'
import classes from './styles.module.css'

function Services() {

  return (<div id="servicios" >
        <div className={classes.contServices}>
        <div className={classes.contCardServicesMb}>
          <div className={classes.CardServiceMb}>
            <CardService urlImg={'/images/hamburger.jpg'} subTitle={'Finger Food'} description={"'consiste en pequeñas porciones de alimentos que se pueden comer con las manos sin necesidad de cubiertos.'"}/>
            <CardService urlImg={'/images/asparagus.jpg'} subTitle={'Plato principal'} description={'"El plato principal es el plato principal de una comida, que suele incluir proteínas y guarniciones."'} />
            <CardService urlImg={'/images/dessert.jpg'} subTitle={'Postres'} description={'"El postre es un dulce o plato dulce que se sirve al final de una comida."'}/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Services