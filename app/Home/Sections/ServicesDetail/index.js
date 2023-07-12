import React from 'react'
import classes from './styles.module.css'
import CardSliderImg from '@/app/components/CardSliderImg'
import CardSliderService from '@/app/components/CardSliderService'

function ServicesDetail() {

  



  return (
    // <div >
      <div className={classes.contentServiceDetail}>
        <div className={classes.img}>
          <CardSliderImg srcImage={'/images/dessert.jpg'}/>
        </div>
        <div className={classes.text}>
          <CardSliderService title={'Menús personalizados'} paragraph={'Menú personalizado y adaptado a las preferencias y requisitos específicos del cliente, que pueda incluir una variedad de opciones de aperitivos, entrantes, platos principales, guarniciones, postres y bebidas.'}/>
        </div>
        <div className={classes.contButtons}>
          <div className={classes.buttonAnterior}> Anterior </div>
          <div className={classes.buttonSiguiente}> Siguiente </div>
        </div>
      </div>
    // </div>
  )
}

export default ServicesDetail