"use client"
import { useEffect } from 'react'
import useDevice from '@/app/Hooks/useDevice';

export default function Home() {

  const { isDesktopOrLaptop } = useDevice();

  useEffect(() => {
    if(isDesktopOrLaptop){
      window.location.replace('/Home');
    }
  }, [isDesktopOrLaptop])

  return (
    <></>
  )
}
