import './globals.css'
import { Inter } from 'next/font/google'
import Menu from '@/app/components/Menu'
import Link from 'next/link'
import Image from 'next/image'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Tambo Inka',
  description: 'Servicio de catering para eventos en Buenos Aires',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body style={{padding: '0', margin: '0'}} class="custom-variables" className={inter.className}>
        <Menu/>
          {children}
        <Link href={"https://api.whatsapp.com/send/?phone=5491125599997&text&type=phone_number&app_absent=0"} style={{position: "fixed", bottom: "0", right: "0", margin: "1rem"}}>
          <Image alt="linkWhatsApp" src={"/images/social/whatsappLogo.png"} height={55} width={55} style={{boxShadow: "var(--cardShadowSmall)",  borderRadius: "100px",}}/>
        </Link>
      </body>
    </html>
  )
}