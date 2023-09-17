"use client";
import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import classes from './CardService.module.css'

function CardSlider({urlImg, subTitle, description}) {

    const [show, doShow] = React.useState(false)
    const ShowText = useRef(null)

    const functionShow = () => {
        ShowText.current.addEventListener('mouseover', function() {
            doShow(true)
        });
        ShowText.current.addEventListener('mouseout', function() {
            doShow(false)
        });
    }
    useEffect(() => {
        functionShow()
    },[])

  return (
    <div style={{textAlign: "start" }}>
        <div ref={ShowText} className={classes.contImgService}>
            <Image  className={classes.imgService} src={`${urlImg}`} fill={true} alt={`service-`} />
            {show && 
            <div className={classes.textService}>
                <h2 >{subTitle}</h2>
            </div>}
        </div>
        <div style={{position: "relative", margin: "0 1rem", borderBottom: " 1px rgb(113, 113, 113) solid",  color: "black", fontSize: ".8rem" }}>{description}</div>
    </div>
  )
}

export default CardSlider