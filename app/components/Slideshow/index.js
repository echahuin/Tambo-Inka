"use client";
import React, { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import classes from './slideshow.module.css'

function Slideshow() {
	// const images=['/images/hamburger.jpg', '/images/food.jpg', '/images/dessert.jpg']
	// const [index, setIndex] = React.useState(0)  
	// 123 213 231
	const animationFade = useRef(null)
	
	const animationFadeIn = useCallback(() => {
		animationFade.current
	}, [animationFade])
	
	
	useEffect(() => {
		setInterval(() => {
			console.log('entrmoas')
			animationFadeIn();
		}, 3000)
	}, [animationFadeIn])
	

  return (
	<>
	  {/* {images.map((img, index) => {
		  return ( */}
			  <div className={classes.contImg}>
				<Image ref={animationFade}  src={'/images/food.jpg'} alt={`ImgSlider`} fill={true} />
				<Image src={'/images/dessert.jpg'} alt={`ImgSlider`} fill={true} />
				<Image  src={'/images/hamburger.jpg'} alt={`ImgSlider`} fill={true} />
			  </div>
		{/* // 	)
		// })} */}
		</>
  )
}

export default Slideshow