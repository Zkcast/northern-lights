import { useEffect, useRef } from 'react'
import { Contact } from '../Contact/Contact'
import { Home } from '../Home/Home'
import { NavBar } from '../../Components/NavBar/NavBar'
import { VideoSection } from '../VideoSection/VideoSection'
import { Brands } from '../Brands/Brands'
import { Gallery } from '../Gallery/Gallery'
import { Whatsapp } from '../../Components/Whatsapp/Whatsapp'
import { Footer } from '../../Components/Footer/Footer'
import { Logo } from '../../Components/Logo/Logo'

export const Landing = () => {
  const contactRef = useRef(null)
  const galleryRef = useRef(null)

  const scrollToPresupuesto = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToGallery = () => {
    galleryRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    const hash = window.location.hash.replace('#', '')
    if (hash === 'galeria') {
      galleryRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
    if (hash === 'presupuesto') {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [])

  return (
    <>
      <NavBar
        scrollToPresupuesto={scrollToPresupuesto}
        scrollToGallery={scrollToGallery}
      />
      <Logo />
      <Home scrollToGallery={scrollToGallery} scrollToPresupuesto={scrollToPresupuesto} />
      <VideoSection />
      <Brands />

      <div ref={galleryRef} id="galeria">
        <Gallery />
      </div>

      <div ref={contactRef} id="presupuesto">
        <Contact />
      </div>
      <Whatsapp />
      <Footer />
    </>
  )
}
