import donRouchPhoto from './assets/don_rouch.PNG'
import './Brands.css'

/** Misma referencia visual cuadrada; `focal` desplaza el encuadre (mock). */
const brands = [
  { id: 'meta', label: 'Meta', focal: '22% 48%' },
  { id: 'instagram', label: 'Instagram', focal: '58% 35%' },
  { id: 'facebook', label: 'Facebook', focal: '45% 62%' },
  { id: 'binance', label: 'Binance', focal: '70% 45%' },
  { id: 'accenture', label: 'Accenture', focal: '35% 28%' },
  { id: 'donrouch', label: 'Don Rouch', focal: '50% 48%', featured: true },
]

export const Brands = () => {
  return (
    <section className="brands" aria-labelledby="brands-heading">
      <div className="brands__inner">
        <header className="brands__header">
          <p className="brands__kicker">Alianzas y referencias</p>
          <h2 id="brands-heading" className="brands__title">
            Marcas con las que trabajamos
          </h2>
        </header>

        <ul className="brands__list">
          {brands.map((b) => (
            <li key={b.id} className="brands__cell">
              <div
                className={
                  b.featured
                    ? 'brands__frame brands__frame--featured'
                    : 'brands__frame brands__frame--mock'
                }
                {...(!b.featured && {
                  'aria-label': `${b.label}, referencia visual de ejemplo`,
                })}
              >
                <img
                  className="brands__img"
                  src={donRouchPhoto}
                  alt=""
                  style={{ objectPosition: b.focal }}
                  loading="lazy"
                  decoding="async"
                />
                <div className="brands__glow" aria-hidden />
                <p className="brands__name">{b.label}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
