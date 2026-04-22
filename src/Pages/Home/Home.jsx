import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import slider2 from '../../Assets/slider/slider2.jpg'
import slider3 from '../../Assets/slider/slider3.jpg'
import heroVideo from '../../Assets/video.mp4'
import './Home.css'

export const Home = ({ scrollToGallery, scrollToPresupuesto }) => {
  const videoRef = useRef(null)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (reduceMotion || !videoRef.current) return
    const v = videoRef.current
    const play = () => {
      v.play().catch(() => {})
    }
    play()
  }, [reduceMotion])

  return (
    <section className="home-hero" aria-label="Inicio">
      <div
        className="home-hero__static-bg"
        style={{ backgroundImage: `url(${slider3})` }}
        aria-hidden
      />
      {!reduceMotion && (
        <video
          ref={videoRef}
          className="home-hero__video"
          autoPlay
          muted
          loop
          playsInline
          poster={slider3}
          aria-hidden
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      )}
      <div className="home-hero__scrim" aria-hidden />
      <div className="home-hero__grain" aria-hidden />

      <div className="home-hero__inner">
        <p className="home-hero__kicker">Northern Lights</p>
        <h1 className="home-hero__title">
          Carteles LED neon
          <span className="home-hero__title-accent"> a medida</span>
        </h1>
        <p className="home-hero__lead">
          Iluminación que define espacios. Diseños propios, acabado profesional y
          asesoramiento en cada paso.
        </p>
        <div className="home-hero__actions">
          <button
            type="button"
            className="home-hero__btn home-hero__btn--primary"
            onClick={scrollToGallery}
          >
            Ver galería
          </button>
          <button
            type="button"
            className="home-hero__btn home-hero__btn--ghost"
            onClick={scrollToPresupuesto}
          >
            Pedir presupuesto
          </button>
          <Link to="/tienda" className="home-hero__btn home-hero__btn--ghost home-hero__btn--link">
            Ver tienda
          </Link>
        </div>

        <div className="home-hero__strip">
          <article className="home-hero__card">
            <img src={slider3} alt="Ejemplo de cartel neon en ambiente" loading="lazy" />
            <div className="home-hero__card-meta">
              <span className="home-hero__card-label">Ambientes</span>
              <span className="home-hero__card-hint">Hogar y locales</span>
            </div>
          </article>
          <article className="home-hero__card">
            <img src={slider2} alt="Segundo ejemplo de iluminación decorativa" loading="lazy" />
            <div className="home-hero__card-meta">
              <span className="home-hero__card-label">Personalizado</span>
              <span className="home-hero__card-hint">Tu texto, tu estilo</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
