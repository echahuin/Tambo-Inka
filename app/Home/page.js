
import PrincipalSlider from './Sections/PrincipalSlider'
import Services from './Sections/Services'
import ServicesDetail from './Sections/ServicesDetail'
import Footer from './Sections/Footer'
import Galeria from './Sections/Galeria'
import Map from './Sections/Map'

export default function Home() {

   
    return(
        <div>
            {/* <div style={} >{scrollDirection}</div> */}
            <PrincipalSlider />
            <Services />
            {/* <ServicesDetail /> */}
            <Galeria />
            <Map/>
            <Footer />
        </div>
    )
}