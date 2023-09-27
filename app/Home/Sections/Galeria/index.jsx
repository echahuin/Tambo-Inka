import React from 'react'
import classes from './styleGaleria.module.css'
import Image from 'next/image'
import Link from 'next/link'
import dataGaleria from '../../../data/dataGaleria'

function index() {
  return (
    <div id="galeria" className={classes.contGaleria} >
      {
        dataGaleria.map((item, index) => {
          return(
            <div key={index} className={classes[`child_${index}`]} >
              <Link href={`/Home/Detail/${item.id}`}>
                  <Image style={{objectFit: "cover"}} src={item.img} alt="" fill={true} />
              </Link>
          </div>
          )
        })
      }
    </div>
  )
}

export default index