'use client'
import { useEffect } from 'react'
import AOS from 'aos' // <-- ТИ ПОВИНЕН ІМПОРТУВАТИ ЦЕ!
import 'aos/dist/aos.css'

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      offset: 50,
      easing: 'ease-out-cubic'
    })
  }, [])

  return null
}
