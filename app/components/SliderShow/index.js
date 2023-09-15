import React from "react";
import Slider4 from '../../../public/images/dessert.jpg';
import Slider3 from '../../../public/images/asparagus.jpg';
import Slider5 from '../../../public/images/asparagus.jpg';
import BackgroundSlider from 'react-background-slider'

const Slider4Image = Slider4;
const Slider3Image = Slider3;
const Slider5Image = Slider5;

const ImageSlider = () => {
  return (
    <>
        <BackgroundSlider images={[Slider5Image, Slider3Image, Slider4Image]} 
        duration={15} transition={2} />
    </>
  );
};

export default ImageSlider;