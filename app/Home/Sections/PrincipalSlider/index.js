import React from 'react'
import Box from '../../../components/Box'
import Slideshow from '../../../components/Slideshow'

function PrincipalSlider() {
  return (
    <div>
        <Slideshow />
        <Box styleBox={{position: 'absolute', top: '9.5rem', left: '2rem'}}  type={'paragraph'} content={'"En Tambo Inka Katering nos dedicamos a crear experiencias culinarias excepcionales para tus eventos especiales."'}/>
        <Box styleBox={{position: 'absolute', bottom: '2rem', right: '2rem'}} type={'title'} content={'TAMBO INKA KATERING'}/>
    </div>
  )
}

export default PrincipalSlider