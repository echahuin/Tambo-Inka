import './globals.css'
import { Inter } from 'next/font/google'
import Menu from '@/app/components/Menu'

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
      </body>
    </html>
  )
}