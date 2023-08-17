
import React from 'react'
import CardSliderImg from '@/app/components/CardSliderImg'
import CardSliderService from '@/app/components/CardSliderService'
import classes from './styles.module.css'


function HandleServiceDetail({indexRender, service, buttonAnterior: ButtonAnterior, buttonSiguiente: ButtonSiguiente}) {
    return (
        <>
            <div className={classes.contentServiceDetail}>
                <div className={classes.img}>
                    <CardSliderImg srcImage={`${service[indexRender].image}`}/>
                </div>
                <div className={classes.text}>
                    <CardSliderService title={`${service[indexRender].title}`} paragraph={`${service[indexRender].paragraph}`}/>
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