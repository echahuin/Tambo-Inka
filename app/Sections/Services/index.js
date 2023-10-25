"use client";
import React, { useEffect } from 'react'
import CardService from '../../components/CardService'
import classes from './styles.module.css'
import Aos from "aos";
import "aos/dist/aos.css";

function Services({animation}) {

  useEffect(() => {
    Aos.init({duration: 1000});
  }, [])

  const listItemService = {
    fingerFood: [" Sandwich.", "Mini causa."],
    platoPrincipal: [" Pollo al horno.", "Vacio al horno."],
    Postres: ["Mousse de maracuyá.", "Trifle de frutilla."]
  }

  return (<div id="servicios"  >
        <div className={classes.contServices}>
        <div className={classes.contCardServicesMb}>
          <div className={classes.CardServiceMb}>
            <div data-aos="fade-up"
                  data-aos-delay="0"
                  data-aos-duration="1000"  >
              <CardService  urlImg={'/images/slider5.jpeg'} subTitle={'Finger Food'} description={"'consiste en pequeñas porciones de alimentos que se pueden comer con las manos sin necesidad de cubiertos.'"} listItem={listItemService.fingerFood}/>
            </div>
            <div data-aos="fade-up"
              data-aos-delay="0"
              data-aos-duration="1500"  >
              <CardService  urlImg={'/images/slider4.jpeg'} subTitle={'Plato principal'} description={'"El plato principal suele incluir proteínas y guarniciones."'} listItem={listItemService.platoPrincipal}/>
            </div>
            <div data-aos="fade-up"
                data-aos-delay="0"
                data-aos-duration="2000"  >
              <CardService  urlImg={'/images/slider9.jpeg'} subTitle={'Postres'} description={'"El postre es un dulce o plato dulce que se sirve al final de una comida."'} listItem={listItemService.Postres}/>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Services