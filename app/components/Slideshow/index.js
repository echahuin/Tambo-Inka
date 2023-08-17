"use client";
import React, { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'
import classes from './slideshow.module.css'

function Slideshow() {
	const images=['/images/hamburger.jpg', '/images/food.jpg', '/images/dessert.jpg']
	const [index, setIndex] = React.useState(0)
	const animationFade = useRef(null)
	
	const animationFadeIn = useCallback(() => {
			animationFade.current.classList.remove(classes.fadeIn);
	}, [animationFade])

	useEffect(() => {
		const intervalId = setInterval(() => {
			const numeroAleatorio = Math.floor(Math.random() * 3);
			setIndex(numeroAleatorio)
			animationFade.current.classList.remove(classes.fadeIn);
		}, 3000);
	
		return () => {
		  clearInterval(intervalId); 
		};
	  }, [animationFadeIn]); 
	

  return (
	<>
		<div className={classes.contImg}>
			<Image ref={animationFade}  src={images[index]} alt={`imgSlider${index}`} fill={true} style={{objectFit: 'cover'}}/>
		</div>
	</>
  )
}

export default Slideshow