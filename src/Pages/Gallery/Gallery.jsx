import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './Gallery.css'

import imgCartel from '../../Assets/content/Northern Lights Neon-20251127T164416Z-1-001/Northern Lights Neon/Fotos Carteles/GOPR0653.JPG'
import slider2 from '../../Assets/slider/slider2.jpg'
import slider3 from '../../Assets/slider/slider3.jpg'
import photo3 from '../../Assets/slider/photo3.jpg'

const SLIDES = [
  { id: 1, src: slider3, caption: 'Ambientes y locales', alt: 'Cartel LED neon en ambiente interior' },
  { id: 2, src: photo3, caption: 'Diseño a medida', alt: 'Detalle de iluminación decorativa personalizada' },
  { id: 3, src: slider2, caption: 'Acabado profesional', alt: 'Segundo ejemplo de cartel decorativo' },
  { id: 4, src: imgCartel, caption: 'Proyectos reales', alt: 'Trabajo de Northern Lights' },
]

const AUTO_MS = 6500

export const Gallery = () => {
  const [index, setIndex] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)
  const n = SLIDES.length

  const go = useCallback(
    (dir) => {
      setIndex((i) => (i + dir + n) % n)
    },
    [n]
  )

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const apply = () => setReduceMotion(mq.matches)
    apply()
    mq.addEventListener('change', apply)
    return () => mq.removeEventListener('change', apply)
  }, [])

  useEffect(() => {
    if (reduceMotion) return undefined
    const t = setInterval(() => go(1), AUTO_MS)
    return () => clearInterval(t)
  }, [go, reduceMotion])

  return (
    <div className="gallery-section">
      <Container fluid className="gallery-section__wrap px-0">
        <header className="gallery-hero text-center">
          <p className="gallery-hero__kicker">Proyectos</p>
          <h2 className="gallery-hero__title">
            Galería de
            <span className="gallery-hero__title-accent"> trabajos</span>
          </h2>
          <p className="gallery-hero__deck">
            Un vistazo a carteles y ambientes reales. En la galería completa vas a ver todos los
            productos con más detalle.
          </p>
        </header>

        <div className="gallery-cta text-center mb-4">
          <Link to="/galeria" className="gallery-cta__btn">
            Ver todos nuestros trabajos
            <span className="gallery-cta__arrow" aria-hidden>
              →
            </span>
          </Link>
        </div>

        <div
          className="gallery-carousel"
          role="region"
          aria-roledescription="carrusel"
          aria-label="Destacados de la galería"
        >
          <div
            className="gallery-carousel__viewport"
            onKeyDown={(e) => {
              if (e.key === 'ArrowLeft') {
                e.preventDefault()
                go(-1)
              }
              if (e.key === 'ArrowRight') {
                e.preventDefault()
                go(1)
              }
            }}
            tabIndex={0}
          >
            <ul
              className="gallery-carousel__track"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {SLIDES.map((slide, i) => (
                <li
                  key={slide.id}
                  className="gallery-carousel__slide"
                  aria-hidden={i !== index}
                >
                  <figure className="gallery-carousel__figure">
                    <img src={slide.src} alt={slide.alt} loading={slide.id === 1 ? 'eager' : 'lazy'} />
                    <figcaption className="gallery-carousel__caption">
                      <span className="gallery-carousel__caption-text">{slide.caption}</span>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </ul>
          </div>

          <div className="gallery-carousel__nav">
            <button
              type="button"
              className="gallery-carousel__arrow gallery-carousel__arrow--prev"
              onClick={() => go(-1)}
              aria-label="Imagen anterior"
            />
            <button
              type="button"
              className="gallery-carousel__arrow gallery-carousel__arrow--next"
              onClick={() => go(1)}
              aria-label="Imagen siguiente"
            />
          </div>

          <div className="gallery-carousel__dots" role="tablist" aria-label="Seleccionar imagen">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                className={`gallery-carousel__dot${i === index ? ' is-active' : ''}`}
                aria-selected={i === index}
                tabIndex={i === index ? 0 : -1}
                onClick={() => setIndex(i)}
                aria-label={`Imagen ${i + 1} de ${n}`}
              />
            ))}
          </div>
        </div>


      </Container>
    </div>
  )
}
