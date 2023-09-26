"use client";
import React from 'react'
import Image from 'next/image'
import classes from './slideshow.module.css'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Slideshow = () => {
  const settings = {
    dots: true,
	fade:true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 4000,
	arrows: false,    
};

  return (
    <>
      <Slider {...settings}>
	  	<div className={classes.contImg}>
		  <Image  src={'/images/original/vocaditos.jpg'} alt={`imgSlider1`} fill={true}  style={{objectFit: 'cover'}} />
 		</div>
		 <div className={classes.contImg}>
		  <Image  src={'/images/original/roger.jpg'} alt={`imgSlider2`} fill={true}  style={{objectFit: 'cover'}} />
 		</div>
		 <div className={classes.contImg}>
		  <Image  src={'/images/original/plato.jpg'} alt={`imgSlider3`} fill={true}  style={{objectFit: 'cover'}} />
 		</div>
      </Slider>
	  <div className={classes.contText} >
 			<h2 data-text="Tambo Inka">Tambo Inka</h2>
 		</div>
    </>
  );
};

export default Slideshow;
