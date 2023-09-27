import React from 'react'
import classes from './styleGaleria.module.css'
import Image from 'next/image'

const data =[
  {
    img: "",
    heightImg: [1,2],
    widhtImg: [1,3]
  },
  {
    img: "",
    heightImg: [1,2],
    widhtImg: [1,3]
  },
  {
    img: "",
    heightImg: [1,2],
    widhtImg: [1,3]
  },
  {
    img: "",
    heightImg: [1,2],
    widhtImg: [1,3]
  },
  {
    img: "",
    heightImg: [1,2],
    widhtImg: [1,3]
  }
]

function index() {
  return (
    <div id="galeria" className={classes.contGaleria} >
      <div className={classes.child_0} >
        <Image style={{objectFit: "cover"}} src={"/images/food.jpg"} alt="" fill={true} />
      </div>
      <div className={classes.child_1}>
        <Image style={{objectFit: "cover"}} src={"/images/original/plato.jpg"} alt="" fill={true} />
      </div>
      <div className={classes.child_2}>
        <Image style={{objectFit: "cover"}} src={"/images/original/roger.jpg"} alt="" fill={true} />
      </div>
      <div className={classes.child_3}>
        <Image style={{objectFit: "cover"}} src={"/images/asparagus.jpg"} alt="" fill={true} />
      </div>
      <div className={classes.child_4}>
        <Image style={{objectFit: "cover"}} src={"/images/hamburger.jpg"} alt="" fill={true} />
      </div>
      <div className={classes.child_5}>
        <Image style={{objectFit: "cover"}} src={"/images/original/vocaditos.jpg"} alt="" fill={true} />
      </div>
    </div>
  )
}

export default index