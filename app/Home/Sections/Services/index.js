
import React from 'react'
import CardService from '../../../components/CardService'
import classes from './styles.module.css'

function Services() {
  return (
    <div className={classes.contCardServices}>
      <h1 className={classes.title}>Servicios</h1>
      <div className={classes.CardService}>
        <CardService urlImg={'/images/hamburger.jpg'} subTitle={'ENTRADA'}/>
        <CardService urlImg={'/images/asparagus.jpg'} subTitle={'PRINCIPAL'}/>
        <CardService urlImg={'/images/dessert.jpg'} subTitle={'APERITIVOS'}/>
      </div>
    </div>
  )
}

export default Services