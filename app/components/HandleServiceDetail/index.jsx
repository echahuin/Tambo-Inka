
import React from 'react'
import CardSliderImg from '@/app/components/CardSliderImg'
import CardSliderService from '@/app/components/CardSliderService'
import classes from './styles.module.css'


function HandleServiceDetail({indexRender, service, buttonAnterior: ButtonAnterior, buttonSiguiente: ButtonSiguiente}) {
    console.log('this', service[indexRender].image)
    return (
        <>
            <div className={classes.contentServiceDetail}>
                <div className={classes.img}>
                    <CardSliderImg srcImage={`${service[indexRender].image}`}/>
                </div>
                <div className={classes.text}>
                    <CardSliderService title={`${service[indexRender].title}`} paragraph={'Menú personalizado y adaptado a las preferencias y requisitos específicos del cliente, que pueda incluir una variedad de opciones de aperitivos, entrantes, platos principales, guarniciones, postres y bebidas.'}/>
                </div>
                <div className={classes.contButtons}>
                    <ButtonAnterior />
                    <ButtonSiguiente />
                </div>
            </div>
        </>
  )
}

export default HandleServiceDetail