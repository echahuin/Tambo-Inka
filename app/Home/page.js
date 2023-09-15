
import PrincipalSlider from './Sections/PrincipalSlider'
import Services from './Sections/Services'
import ServicesDetail from './Sections/ServicesDetail'
import Footer from './Sections/Footer'

export default function Home() {
    return(
        <>
            <PrincipalSlider />
            <Services/>
            <ServicesDetail/>
            <Footer/>
        </>
    )
}