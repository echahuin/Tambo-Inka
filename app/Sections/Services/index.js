"use client";
import React from 'react'
import CardService from '../../components/CardService'
import classes from './styles.module.css'

function Services() {

  const listItemService = {
    fingerFood: [" Sandwich.", "Mini causa."],
    platoPrincipal: [" Pollo al horno.", "Vacio al horno."],
    Postres: ["Mousse de maracuyá.", "Trifle de frutilla."]
  }

  return (<div id="servicios" >
        <div className={classes.contServices}>
        <div className={classes.contCardServicesMb}>
          <div className={classes.CardServiceMb}>
            <CardService urlImg={'/images/slider5.jpeg'} subTitle={'Finger Food'} description={"'consiste en pequeñas porciones de alimentos que se pueden comer con las manos sin necesidad de cubiertos.'"} listItem={listItemService.fingerFood}/>
            <CardService urlImg={'/images/slider4.jpeg'} subTitle={'Plato principal'} description={'"El plato principal es el plato principal de una comida, que suele incluir proteínas y guarniciones."'} listItem={listItemService.platoPrincipal}/>
            <CardService urlImg={'/images/dessert.jpg'} subTitle={'Postres'} description={'"El postre es un dulce o plato dulce que se sirve al final de una comida."'} listItem={listItemService.Postres}/>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Services