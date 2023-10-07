"use client"
import React, {useEffect} from 'react'

function Map() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyC-7Y6sW9fIj2m8Vv2LjYrjK3ZjN6j3n1g&callback=initMap&libraries=&v=weekly"
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, [])

  return (
    <div style={{display: "flex", alignItems: "center", padding: "5rem 0rem", justifyContent: "center"}} >       
        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d204.9238241043464!2d-58.49014997869312!3d-34.735909526147694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sar!4v1695075959473!5m2!1ses-419!2sar" width="400" height="250" style={{position: "relative" ,  border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d409.8483050472905!2d-58.490106461585235!3d-34.73577709184263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccf88fdd839eb%3A0x5d30c2bb5f6a4843!2sTambo%20Inka%20Restaurante!5e0!3m2!1ses-419!2sar!4v1696650227188!5m2!1ses-419!2sar" width="600" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  )
}

export default Map;