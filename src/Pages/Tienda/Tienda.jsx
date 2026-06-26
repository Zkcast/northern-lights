import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Offcanvas } from 'react-bootstrap'
import { NavBar } from '../../Components/NavBar/NavBar'
import { Logo } from '../../Components/Logo/Logo'
import { Whatsapp } from '../../Components/Whatsapp/Whatsapp'
import { Footer } from '../../Components/Footer/Footer'
import { productosMock, todosLosColoresMock } from '../../data/tiendaMock'
import './Tienda.css'

const PAGE_SIZE = 20

const maxPrecioData = Math.max(...productosMock.map((p) => p.precio))
const minPrecioData = Math.min(...productosMock.map((p) => p.precio))

const formatPrecio = (n) =>
  new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    maximumFractionDigits: 0,
  }).format(n)

const fotosDeProducto = (p) => [p.foto0, p.foto1, p.foto2, p.foto3, p.foto4, p.foto5]

export const Tienda = () => {
  const [busqueda, setBusqueda] = useState('')
  const [precioMin, setPrecioMin] = useState(minPrecioData)
  const [precioMax, setPrecioMax] = useState(maxPrecioData)
  const [coloresSel, setColoresSel] = useState([])
  const [orden, setOrden] = useState('precio-asc')
  const [detalle, setDetalle] = useState(null)
  const [fotoIdx, setFotoIdx] = useState(0)
  const [showFilters, setShowFilters] = useState(false)
  const [page, setPage] = useState(1)

  const filtrados = useMemo(() => {
    const q = busqueda.trim().toLowerCase()
    let list = productosMock.filter((p) => {
      if (q && !`${p.nombre} ${p.descripcion}`.toLowerCase().includes(q)) return false
      if (p.precio < precioMin || p.precio > precioMax) return false
      if (coloresSel.length) {
        const match = coloresSel.some((c) => p.colores.includes(c))
        if (!match) return false
      }
      return true
    })

    list = [...list].sort((a, b) => {
      if (orden === 'precio-asc') return a.precio - b.precio
      if (orden === 'precio-desc') return b.precio - a.precio
      return a.nombre.localeCompare(b.nombre, 'es')
    })
    return list
  }, [busqueda, precioMin, precioMax, coloresSel, orden])

  const totalPages = Math.max(1, Math.ceil(filtrados.length / PAGE_SIZE))

  const pageItems = useMemo(() => {
    const p = Math.min(page, totalPages)
    const start = (p - 1) * PAGE_SIZE
    return filtrados.slice(start, start + PAGE_SIZE)
  }, [filtrados, page, totalPages])

  useEffect(() => {
    setPage(1)
  }, [busqueda, precioMin, precioMax, coloresSel, orden])

  useEffect(() => {
    setPage((p) => Math.min(p, totalPages))
  }, [totalPages])

  const abrirDetalle = (p) => {
    setDetalle(p)
    setFotoIdx(0)
  }

  const cerrarDetalle = () => setDetalle(null)

  const toggleColor = (c) => {
    setColoresSel((prev) => (prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]))
  }

  const limpiarFiltros = () => {
    setBusqueda('')
    setPrecioMin(minPrecioData)
    setPrecioMax(maxPrecioData)
    setColoresSel([])
    setOrden('precio-asc')
    setPage(1)
  }

  const filtrosPanel = (panelId) => {
    const idPre = panelId === 'sidebar' ? 'tienda-f-sb' : 'tienda-f-dw'
    return (
    <div className="tienda-filters__inner">
      <div className="tienda-filters__block">
        <label className="tienda-filters__label" htmlFor={`${idPre}-buscar`}>
          Buscar
        </label>
        <input
          id={`${idPre}-buscar`}
          type="search"
          className="tienda-input"
          placeholder="Nombre o descripción…"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          autoComplete="off"
        />
      </div>

      <div className="tienda-filters__block">
        <span className="tienda-filters__label">Precio (ARS)</span>
        <div className="tienda-filters__row2">
          <div>
            <label className="tienda-filters__sublabel" htmlFor={`${idPre}-precio-min`}>
              Mín.
            </label>
            <input
              id={`${idPre}-precio-min`}
              type="number"
              className="tienda-input"
              min={minPrecioData}
              max={precioMax}
              value={precioMin}
              onChange={(e) => setPrecioMin(Number(e.target.value) || minPrecioData)}
            />
          </div>
          <div>
            <label className="tienda-filters__sublabel" htmlFor={`${idPre}-precio-max`}>
              Máx.
            </label>
            <input
              id={`${idPre}-precio-max`}
              type="number"
              className="tienda-input"
              min={precioMin}
              max={maxPrecioData}
              value={precioMax}
              onChange={(e) => setPrecioMax(Number(e.target.value) || maxPrecioData)}
            />
          </div>
        </div>
      </div>

      <div className="tienda-filters__block">
        <span className="tienda-filters__label">Colores</span>
        <div className="tienda-filters__chips">
          {todosLosColoresMock.map((c) => (
            <button
              key={c}
              type="button"
              className={`tienda-chip ${coloresSel.includes(c) ? 'tienda-chip--on' : ''}`}
              onClick={() => toggleColor(c)}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="tienda-filters__block">
        <label className="tienda-filters__label" htmlFor={`${idPre}-orden`}>
          Ordenar
        </label>
        <select
          id={`${idPre}-orden`}
          className="tienda-input tienda-select"
          value={orden}
          onChange={(e) => setOrden(e.target.value)}
        >
          <option value="precio-asc">Precio: menor a mayor</option>
          <option value="precio-desc">Precio: mayor a menor</option>
          <option value="nombre">Nombre A–Z</option>
        </select>
      </div>

      <button type="button" className="tienda-btn-ghost tienda-btn-ghost--full" onClick={limpiarFiltros}>
        Limpiar filtros
      </button>
    </div>
    )
  }

  const fotosDetalle = detalle ? fotosDeProducto(detalle) : []

  const pageStart = filtrados.length === 0 ? 0 : (Math.min(page, totalPages) - 1) * PAGE_SIZE + 1
  const pageEnd = filtrados.length === 0 ? 0 : Math.min(Math.min(page, totalPages) * PAGE_SIZE, filtrados.length)

  return (
    <>
      <NavBar />
      <Logo />
      <main className="tienda">
        <header className="tienda__header">
          <h1 className="tienda__title">Tienda</h1>
        </header>

        <div className="tienda__shell">
          <div className="tienda__toolbar">
            <p className="tienda__count">
              <strong>{filtrados.length}</strong> {filtrados.length === 1 ? 'producto' : 'productos'}
              {filtrados.length > 0 ? (
                <span className="tienda__count-range">
                  {' '}
                  · mostrando {pageStart}–{pageEnd}
                </span>
              ) : null}
            </p>
            <button type="button" className="tienda-btn-ghost d-lg-none" onClick={() => setShowFilters(true)}>
              Filtros
            </button>
          </div>

          <div className="tienda-matrix">
            <aside className="tienda-matrix__filters d-none d-lg-block" aria-label="Filtros">
              {filtrosPanel('sidebar')}
            </aside>
            <div className="tienda-matrix__right">
              <div className="tienda-matrix__scroll">
                {filtrados.length === 0 ? (
                  <div className="tienda-empty">
                    <p>No hay resultados con esos filtros.</p>
                    <button type="button" className="tienda-btn-primary" onClick={limpiarFiltros}>
                      Restablecer
                    </button>
                  </div>
                ) : (
                  <ul className="tienda-grid">
                    {pageItems.map((p) => (
                      <li key={p.id}>
                        <button type="button" className="tienda-card" onClick={() => abrirDetalle(p)}>
                          <div className="tienda-card__img-wrap">
                            <img src={p.foto0} alt="" className="tienda-card__img" loading="lazy" />
                          </div>
                          <div className="tienda-card__body">
                            <h2 className="tienda-card__name">{p.nombre}</h2>
                            <p className="tienda-card__price">{formatPrecio(p.precio)}</p>
                            <p className="tienda-card__dims">
                              {p.ancho} × {p.alto} cm
                            </p>
                            <div className="tienda-card__colors">
                              {p.colores.slice(0, 3).map((c) => (
                                <span key={c} className="tienda-card__color-dot" title={c}>
                                  {c}
                                </span>
                              ))}
                              {p.colores.length > 3 ? (
                                <span className="tienda-card__color-more">+{p.colores.length - 3}</span>
                              ) : null}
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                {filtrados.length > 0 && totalPages > 1 ? (
                  <nav className="tienda__pagination tienda__pagination--rail" aria-label="Paginación de productos">
                    <button
                      type="button"
                      className="tienda-btn-ghost"
                      disabled={page <= 1}
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                    >
                      Anterior
                    </button>
                    <span className="tienda__pagination-meta">
                      Página {Math.min(page, totalPages)} de {totalPages}
                    </span>
                    <button
                      type="button"
                      className="tienda-btn-ghost"
                      disabled={page >= totalPages}
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                    >
                      Siguiente
                    </button>
                  </nav>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Offcanvas show={showFilters} onHide={() => setShowFilters(false)} placement="start" className="tienda-offcanvas">
        <Offcanvas.Header closeButton closeVariant="white">
          <Offcanvas.Title>Filtros</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{filtrosPanel('drawer')}</Offcanvas.Body>
      </Offcanvas>

      <Modal show={!!detalle} onHide={cerrarDetalle} size="lg" centered className="tienda-modal" contentClassName="tienda-modal__content">
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title as="div" className="tienda-modal__title">
            {detalle?.nombre}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="tienda-modal__body">
          {detalle && (
            <div className="tienda-detail">
              <div className="tienda-detail__gallery">
                <div className="tienda-detail__main">
                  <img src={fotosDetalle[fotoIdx]} alt="" className="tienda-detail__hero-img" />
                </div>
                <div className="tienda-detail__thumbs">
                  {fotosDetalle.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      className={`tienda-detail__thumb ${i === fotoIdx ? 'tienda-detail__thumb--on' : ''}`}
                      onClick={() => setFotoIdx(i)}
                    >
                      <img src={src} alt="" />
                    </button>
                  ))}
                </div>
              </div>
              <div className="tienda-detail__info">
                <p className="tienda-detail__price">{formatPrecio(detalle.precio)}</p>
                <p className="tienda-detail__desc">{detalle.descripcion}</p>
                <dl className="tienda-detail__specs">
                  <div>
                    <dt>Ancho</dt>
                    <dd>{detalle.ancho} cm</dd>
                  </div>
                  <div>
                    <dt>Alto</dt>
                    <dd>{detalle.alto} cm</dd>
                  </div>
                </dl>
                <div className="tienda-detail__colors-block">
                  <span className="tienda-detail__colors-label">Colores</span>
                  <div className="tienda-detail__colors">
                    {detalle.colores.map((c) => (
                      <span key={c} className="tienda-detail__chip">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <Link to="/#presupuesto" className="tienda-btn-primary tienda-detail__cta" onClick={cerrarDetalle}>
                  Consultar por este modelo
                </Link>
              </div>
            </div>
          )}
        </Modal.Body>
      </Modal>

      <Whatsapp />
      <Footer />
    </>
  )
}
