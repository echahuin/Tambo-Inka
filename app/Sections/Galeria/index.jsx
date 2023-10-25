"use client"
import React, {useState, useRef, useEffect} from 'react'
import classes from './styleGaleria.module.css'
import Image from 'next/image'
import Link from 'next/link'
import dataGaleria from '../../data/dataGaleria'
import Aos from "aos";
import "aos/dist/aos.css";


const ItemGaleria = ({itemData, indexData, animation}) => {

  const [show, doShow] = useState(false)
  const ShowText = useRef(null)


  //pasar a un hook
  const functionShow = () => {
      ShowText.current.addEventListener('mouseover', function() {
          doShow(true)
      });
      ShowText.current.addEventListener('mouseout', function() {
          doShow(false)
      });
  }
  useEffect(() => {
    Aos.init({ duration: 1000 });
      functionShow()
  },[])

  return (
    <div data-aos={animation} ref={ShowText}>
    <Link  href={`/Detail/${itemData.id}`}>
      <div   className={classes.child}>

      <Image className={classes.imgService} style={{objectFit: "cover", zIndex:"200" }} src={itemData.img} alt="" fill={true} />
      {!show &&
        <div className={classes.textService}>
            <h2>{itemData.title}</h2>
        </div>}
          </div>
    </Link>
</div>
  )
}

function Galeria({animation}) {

  return (
    <div id="galeria" className={classes.contGaleria} >
      {
        dataGaleria.map((item, index) => {
          return(
            <ItemGaleria key={index} itemData={item} indexData={index} animation={animation} />
          )
        })
      }
    </div>
  )
}



export default Galeria