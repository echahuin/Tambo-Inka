"use client";
import React, {useEffect, useRef} from 'react'
import Image from 'next/image'
import classes from './CardService.module.css'

function CardSlider({urlImg, subTitle}) {

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
    <>
        <div ref={ShowText} className={classes.contImgService}>
            <Image  className={classes.imgService} src={`${urlImg}`} fill={true} alt={`service-`} />
            {show && 
            <div className={classes.textService}>
                <h2 >{subTitle}</h2>
            </div>}
        </div>
    </>
  )
}

export default CardSlider