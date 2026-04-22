import React from 'react'
import { Link } from 'react-router-dom'
import { NavBar } from '../../Components/NavBar/NavBar'
import { Logo } from '../../Components/Logo/Logo'
import { Whatsapp } from '../../Components/Whatsapp/Whatsapp'
import { Footer } from '../../Components/Footer/Footer'
import './GaleriaPage.css'

export const GaleriaPage = () => {
  return (
    <>
      <NavBar />
      <Logo />
      <main className="galeria-page" aria-label="Galería de productos y trabajos">
        <div className="galeria-page__glow" aria-hidden />
        <div className="galeria-page__inner">
          <nav className="galeria-page__crumb" aria-label="Migas de pan">
            <Link to="/">Inicio</Link>
            <span aria-hidden> / </span>
            <span className="galeria-page__crumb-here">Galería</span>
          </nav>

          <h1 className="galeria-page__title">
            Galería
            <span className="galeria-page__title-accent"> completa</span>
          </h1>
          <p className="galeria-page__lead">
            Acá vamos a mostrar fotos de todos los productos y trabajos realizados. Sección en
            construcción: pronto vas a poder recorrer el catálogo visual al detalle.
          </p>

          <div className="galeria-page__placeholder" role="status">
            <span className="galeria-page__placeholder-shine" aria-hidden />
            <p>Contenido de galería próximamente</p>
          </div>

          <p className="galeria-page__back">
            <Link to="/" className="galeria-page__back-link">
              ← Volver al inicio
            </Link>
          </p>
        </div>
      </main>
      <Whatsapp />
      <Footer />
    </>
  )
}
