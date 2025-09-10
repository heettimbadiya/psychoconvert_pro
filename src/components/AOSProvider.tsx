"use client"
import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false,
      offset: 80,
    })

    const handleRefresh = () => {
      // Ensure new elements get animated after layout changes
      AOS.refreshHard()
    }

    window.addEventListener('load', handleRefresh)
    window.addEventListener('resize', handleRefresh)

    return () => {
      window.removeEventListener('load', handleRefresh)
      window.removeEventListener('resize', handleRefresh)
    }
  }, [])
  return null
}

