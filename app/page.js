import PrincipalSlider from './Sections/PrincipalSlider'
import Services from './Sections/Services'
import Footer from './Sections/Footer'
import Galeria from './Sections/Galeria'
import Map from './Sections/Map'

export default function Home() {

  return (
    <div>
      <PrincipalSlider />
      <Services />
      <Galeria />
      <Map/>
      <Footer />
    </div>
  )
}

