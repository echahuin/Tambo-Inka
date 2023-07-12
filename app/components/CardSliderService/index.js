import React from 'react'
import classes from './CardSliderService.module.css'

function CardSliderService({title, paragraph}) {
  return (
    <div className={classes.ContentCardSlider}>
      <div className={classes.yellowDetail}>
        <div className={classes.backgroundText}>
          <div className={classes.contentText} >
            <h1>{title}</h1>
            <p>{paragraph}</p>
          </div>
        </div>
        <div className={classes.boxStyle1}></div>
        <div className={classes.boxStyle2}></div>
      </div>
    </div>
  )
}

export default CardSliderService