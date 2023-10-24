import PrincipalSlider from './Sections/PrincipalSlider'
import Services from './Sections/Services'
import Footer from './Sections/Footer'
import Galeria from './Sections/Galeria'
import Map from './Sections/Map'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {

  return (
    <div>
      <PrincipalSlider />
      <Services />
      <Galeria />
      <Map/>
      <Footer />
      {/* <div> */}
        <Link href={"https://api.whatsapp.com/send/?phone=5491125599997&text&type=phone_number&app_absent=0"} style={{position: "fixed", bottom: "0", right: "0", margin: "1rem"}}>
          {/* click me */}
          <Image alt="linkWhatsApp" src={"/images/social/whatsappLogo.png"} height={55} width={55} style={{boxShadow: "var(--cardShadowSmall)",  borderRadius: "100px",}}/>
        </Link>
      {/* </div> */}
    </div>
  )
}

