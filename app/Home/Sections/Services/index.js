"use client";
import React from 'react'
import CardService from '../../../components/CardService'
import classes from './styles.module.css'
import useDevice from '@/app/Hooks/useDevice'

function Services() {
  const { isMobile } = useDevice();

  return (<>
    {
      isMobile && (<>
        <div className={classes.contServices}>
        <h1 className={classes.titleMb}>Servicios</h1>
        <div className={classes.contCardServicesMb}>
          <div className={classes.CardServiceMb}>
            <CardService urlImg={'/images/hamburger.jpg'} subTitle={'ENTRADA'}/>
            <CardService urlImg={'/images/asparagus.jpg'} subTitle={'PRINCIPAL'}/>
            <CardService urlImg={'/images/dessert.jpg'} subTitle={'APERITIVOS'}/>
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
           <CardService urlImg={'/images/hamburger.jpg'} subTitle={'ENTRADA'}/>
           {/* <CardService urlImg={'/images/asparagus.jpg'} subTitle={'PRINCIPAL'}/>
           <CardService urlImg={'/images/dessert.jpg'} subTitle={'APERITIVOS'}/> */}
         </div>
       </div>
     ) 
    }
    </>
  )
}

export default Services