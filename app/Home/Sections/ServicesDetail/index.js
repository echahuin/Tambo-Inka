"use client";
import React, { useState, useEffect, useMemo } from 'react'
import classes from './styles.module.css'
import HandleServiceDetail from '@/app/components/HandleServiceDetail'
// import ButtonSlider from '@/app/components/ButtonSlider'


function ServicesDetail() {

  const [indice, setIndice] = useState(0)
  const serviceData = useMemo(() => [
    {
      id: 1,
      index: 0,
      image: '/images/dessert.jpg',
      title: 'Primer Plato',
      paragraph: 'Menú personalizado y adaptado a las preferencias y requisitos específicos del cliente, que pueda incluir una variedad de opciones de aperitivos, entrantes, platos principales, guarniciones, postres y bebidas.'      
    },
    {
      id: 2,
      index: 1,
      image: '/images/food.jpg',
      title: 'Segundo Plato',
      paragraph: 'Menú personalizado y adaptado a las preferencias y requisitos específicos del cliente, que pueda incluir una variedad de opciones de aperitivos, entrantes, platos principales, guarniciones, postres y bebidas.'       
    },
    {
      id: 3,
      index: 2,
      image: '/images/asparagus.jpg',
      title: 'Tercer Plato',
      paragraph: 'Menú personalizado y adaptado a las preferencias y requisitos específicos del cliente, que pueda incluir una variedad de opciones de aperitivos, entrantes, platos principales, guarniciones, postres y bebidas.'       
    }
  ], []);
  
  //   const serviceData = [
  //   {
  //     id: 1,
  //     index: 0,
  //     image: '/images/dessert.jpg',
  //     title: 'Primer Plato',
  //     paragraph: 'Menú personalizado y adaptado a las preferencias y requisitos específicos del cliente, que pueda incluir una variedad de opciones de aperitivos, entrantes, platos principales, guarniciones, postres y bebidas.'      
  //   },
  //   {
  //     id: 2,
  //     index: 1,
  //     image: '/images/food.jpg',
  //     title: 'Segundo Plato',
  //     paragraph: 'Menú personalizado y adaptado a las preferencias y requisitos específicos del cliente, que pueda incluir una variedad de opciones de aperitivos, entrantes, platos principales, guarniciones, postres y bebidas.'       
  //   },
  //   {
  //     id: 3,
  //     index: 2,
  //     image: '/images/asparagus.jpg',
  //     title: 'Tercer Plato',
  //     paragraph: 'Menú personalizado y adaptado a las preferencias y requisitos específicos del cliente, que pueda incluir una variedad de opciones de aperitivos, entrantes, platos principales, guarniciones, postres y bebidas.'       
  //   }
  // ]
  useEffect(() => {
      if(indice === serviceData[serviceData.length-1].index + 1){
        setIndice(0)
      }
      // if(indice === 0){
      //   setIndice(serviceData.length - 1)
      // }
  }, [indice, serviceData])

  const ButtonSiguiente = () => <div className={classes.buttonAnterior} onClick={()=>setIndice(indice - 1)}>Anterior</div>
  const ButtonAnterior = () => <div className={classes.buttonSiguiente} onClick={()=>setIndice(indice + 1)}>Siguiente</div>

  return (
    // <div >
      <div className={classes.contentServiceDetail}>
        <HandleServiceDetail limitSlider={serviceData.length - 1} indexRender={indice} service={serviceData} buttonAnterior={ButtonAnterior} buttonSiguiente={ButtonSiguiente}/>
       
        {/* <div className={classes.img}>
          <CardSliderImg srcImage={'/images/dessert.jpg'}/>
        </div>
        <div className={classes.text}>
          <CardSliderService title={'Menús personalizados'} paragraph={'Menú personalizado y adaptado a las preferencias y requisitos específicos del cliente, que pueda incluir una variedad de opciones de aperitivos, entrantes, platos principales, guarniciones, postres y bebidas.'}/>
        </div>
        <div className={classes.contButtons}>
          <div className={classes.buttonAnterior} onClick={()=>{}}> Anterior </div>
          <div className={classes.buttonSiguiente}> Siguiente </div>
        </div> */}
      </div>
    // </div>
  )
}

export default ServicesDetail