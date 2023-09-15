"use client";
import React, { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import classes from './slideshow.module.css'

function Slideshow() {
	const images=['/images/hamburger.jpg', '/images/food.jpg', '/images/dessert.jpg']
	const [index, setIndex] = React.useState(0)
	const animationFade = useRef(null)
	
	// const animationFadeIn = useCallback(() => {
	// 		animationFade.current.classNameList.remove(classes.fadeIn);
	// }, [animationFade])

	useEffect(() => {
		const intervalId = setInterval(() => {
			const numeroAleatorio = Math.floor(Math.random() * 3);
			animationFade.current.classList.add(classes.fadeIn);
			console.log(animationFade.current.classList.add(classes.fadeIn), "data")
			setIndex(numeroAleatorio)
		}, 3000);
	
		return () => {
		  clearInterval(intervalId); 
		};
	  }, []); 
	

  return (
	<>
		<div className={classes.contImg}>
			<Image ref={animationFade} src={images[index]} alt={`imgSlider${index}`} fill={true}  style={{objectFit: 'cover'}} className={`${classes.fadeIn} ${index === 0 ? classes.active : ''}`}/>
		</div>
			<div className={classes.contText} >
				<h2 data-text="Tambo Inka">Tambo Inka</h2>
			</div>
	</>
  )
}

export default Slideshow