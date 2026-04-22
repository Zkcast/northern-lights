import React, { useState, useEffect } from 'react'
import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'

export const NavBar = (props) => {
  const { pathname } = useLocation()
  const isTienda = pathname === '/tienda'
  const isGaleria = pathname === '/galeria'

  const [selected, setSelected] = useState(
    isTienda ? 'tienda' : isGaleria ? 'gallery' : 'home'
  )
  const [scrolled, setScrolled] = useState(true)

  useEffect(() => {
    if (isTienda) setSelected('tienda')
    else if (isGaleria) setSelected('gallery')
    else setSelected('home')
  }, [isTienda, isGaleria])

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 200) {
        setScrolled(false)
      } else {
        setScrolled(true)
      }
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClickPresupuesto = () => {
    setSelected('presupuesto')
    props.scrollToPresupuesto?.()
  }

  const handleClickGallery = () => {
    setSelected('gallery')
    props.scrollToGallery?.()
  }

  return (
    <React.Fragment>
      <div className={`${!scrolled && 'scrolled'} navbar_custom `}>
        <nav className="navbar bg-transparent navbar-expand-lg navbar-light bg-light d-flex justify-content-end">
          <div className="d-flex justify-content-end">
            <button
              className="navbar-toggler mx-3 navbar-dark"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>

          <div
            className={`${scrolled && 'collapse'} collapse navbar-collapse px-3 mx-5 text-end justify-content-end navbar-items`}
            id="navbarNav"
          >
            <ul className="navbar-nav d-flex justify-content-end navbarItems">
              <li className="d-flex justify-content-end navItem" onClick={() => setSelected('home')}>
                <Link to="/" className="nav-link">
                  <span
                    className={selected === 'home' && !isTienda && !isGaleria ? 'neon' : 'navitem'}
                  >
                    Home
                  </span>
                </Link>
              </li>

              <li className="d-flex justify-content-end navItem">
                {isTienda || isGaleria ? (
                  <Link to="/galeria" className="nav-link" onClick={() => setSelected('gallery')}>
                    <span className={selected === 'gallery' ? 'neon' : 'navitem'}>Galería</span>
                  </Link>
                ) : (
                  <Link to="/" className="nav-link" onClick={handleClickGallery}>
                    <span className={selected === 'gallery' ? 'neon' : 'navitem'}>Galería</span>
                  </Link>
                )}
              </li>

              <li className="d-flex justify-content-end navItem">
                {isTienda || isGaleria ? (
                  <Link to="/#presupuesto" className="nav-link" onClick={() => setSelected('presupuesto')}>
                    <span className={selected === 'presupuesto' ? 'neon' : 'navitem'}>Presupuesto</span>
                  </Link>
                ) : (
                  <Link to="/" className="nav-link" onClick={handleClickPresupuesto}>
                    <span className={selected === 'presupuesto' ? 'neon' : 'navitem'}>Presupuesto</span>
                  </Link>
                )}
              </li>

              <li className="d-flex justify-content-end navItem" onClick={() => setSelected('tienda')}>
                <Link to="/tienda" className="nav-link">
                  <span className={selected === 'tienda' ? 'neon' : 'navitem'}>Tienda</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  )
}
