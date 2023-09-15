import React from 'react'
import Image from 'next/image'
import classes from './CardSliderImg.module.css'

function CardSliderImg({srcImage}) {
  return (
    <div className={classes.contentSliderImg}>
        <Image src={srcImage}  fill={true} alt={`SliderImg-${srcImage}`}/>
    </div>
  )
}

export default CardSliderImg