
import PrincipalSlider from './Sections/PrincipalSlider'
import Services from './Sections/Services'
import About from './Sections/About'
import ServicesDetail from './Sections/ServicesDetail'

export default function Home() {
    return(
        <>
            <PrincipalSlider />
            <Services/>
            <About/>
            <ServicesDetail/>
            {/* <ServicesDetail/> */}

        </>
    )
}