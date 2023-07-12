'use client';
import React, { useRef, useEffect, useCallback } from 'react';
import Image from 'next/image';
import classes from './slider.module.css';

const MyCarousel = ({ images, children, controles = false, autoplay = false, velocidad="500",
    intervalo="5000" }) => {

    const slideshow = useRef(null);

    const siguiente = useCallback(() => {
		if(slideshow.current.children.length > 0){
			const primerElemento = slideshow.current.children[0];
			slideshow.current.style.transition = `${velocidad}ms ease-out all`;
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;

			const transicion = () => {
				slideshow.current.style.transition = 'none';
				slideshow.current.style.transform = `translateX(0)`;
				slideshow.current.appendChild(primerElemento);
				slideshow.current.removeEventListener('transitionend', transicion);
			}
			slideshow.current.addEventListener('transitionend', transicion);
		}
	}, [velocidad]);

    const anterior = () => {
		if(slideshow.current.children.length > 0){
			const index = slideshow.current.children.length - 1;
			const ultimoElemento = slideshow.current.children[index];
			slideshow.current.insertBefore(ultimoElemento, slideshow.current.firstChild);
			
			slideshow.current.style.transition = 'none';
			const tamañoSlide = slideshow.current.children[0].offsetWidth;
			slideshow.current.style.transform = `translateX(-${tamañoSlide}px)`;
		
			setTimeout(() => {
				slideshow.current.style.transition = `${velocidad}ms ease-out all`;
				slideshow.current.style.transform = `translateX(0)`;
			}, 30);
		}
	}

    useEffect(() => {
        setInterval(() => {
            siguiente()
        }, 5000);
    }, [siguiente]);

  return (
    <div className={classes.scroolBody}>
        <div className={classes.scroolContent} ref={slideshow}>
            <div className={classes.slider}>
                <Image className={classes.img} src={images[0]} width={500} height={500} alt='img' />
            </div>
            <div className={classes.slider}>
                <Image className={classes.img} src={images[1]} width={500} height={500} alt='img' />
            </div>    
            <div className={classes.slider}>
                <Image className={classes.img} src={images[2]} width={500} height={500} alt='img' />
            </div>    
        </div>
      
    </div>
  );
};

export default MyCarousel;
