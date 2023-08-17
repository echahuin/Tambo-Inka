"use client";
import React, { useState, useMemo } from 'react'
import classes from './styles.module.css'
import HandleServiceDetail from '@/app/components/HandleServiceDetail'

function ServicesDetail() {

  const [indice, setIndice] = useState(1)
  const serviceData = useMemo(() => [
    {
      id: 1,
      index: 0,
      image: '/images/dessert.jpg',
      title: 'Primer Plato',
      paragraph: 'Menú uno  personalizado y adaptado a las preferencias y requisitos específicos del cliente, que pueda incluir una variedad de opciones de aperitivos, entrantes, platos principales, guarniciones, postres y bebidas.'      
    },
    {
      id: 2,
      index: 1,
      image: '/images/food.jpg',
      title: 'Segundo Plato',
      paragraph: 'Menú dos personalizado y adaptado a las preferencias y requisitos específicos del cliente, que pueda incluir una variedad de opciones de aperitivos, entrantes, platos principales, guarniciones, postres y bebidas.'       
    },
    {
      id: 3,
      index: 2,
      image: '/images/asparagus.jpg',
      title: 'Tercer Plato',
      paragraph: 'Menú tres personalizado y adaptado a las preferencias y requisitos específicos del cliente, que pueda incluir una variedad de opciones de aperitivos, entrantes, platos principales, guarniciones, postres y bebidas.'       
    }
  ], []);

  const ButtonSiguiente = () => <div className={classes.buttonAnterior} onClick={()=>{ indice === 0 ? setIndice(serviceData.length-1) :  setIndice(indice - 1) }}>{`<-`}</div>
  const ButtonAnterior = () => <div className={classes.buttonSiguiente} onClick={()=>{ indice === serviceData.length-1 ? setIndice(0): setIndice(indice + 1) }}>{`->`}</div>

  return (
      <div className={classes.contentServiceDetail}>
        <HandleServiceDetail limitSlider={serviceData.length - 1} indexRender={indice} service={serviceData} buttonAnterior={ButtonAnterior} buttonSiguiente={ButtonSiguiente}/>
      </div>
  )
}

export default ServicesDetail