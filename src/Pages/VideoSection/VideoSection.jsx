import React from 'react'
import { Col, Row } from 'react-bootstrap'
import './VideoSection.css'

export const VideoSection = () => {
  return (
    <section className="video-section" aria-labelledby="video-section-heading">
      <div className="video-section__glow" aria-hidden />
      <Row className="video-section__row align-items-stretch">
        <Col lg={5} xl={5} className="video-section__intro">
          <h2 id="video-section-heading" className="video-section__title">
            Asesoramiento <span className="video-section__title-em">personalizado</span>
          </h2>
          <p className="video-section__deck">
            Te ayudamos a elegir el cartel perfecto para tu hogar o negocio, con
            respuestas claras y recomendaciones según tu estilo y presupuesto.
          </p>
        </Col>
        <Col lg={7} xl={7}>
          <ul className="video-section__list">
            <li className="video-section__item">
              <span className="video-section__item-index">01</span>
              <div>
                <h3 className="video-section__item-title">Consulta y diseño</h3>
                <p className="video-section__item-text">
                  Resolvemos dudas sobre productos y orientamos según tus gustos y
                  necesidades.
                </p>
              </div>
            </li>
            <li className="video-section__item">
              <span className="video-section__item-index">02</span>
              <div>
                <h3 className="video-section__item-title">Presupuestos a medida</h3>
                <p className="video-section__item-text">
                  Carteles LED estilo neon personalizados con propuestas alineadas a
                  tu presupuesto.
                </p>
              </div>
            </li>
            <li className="video-section__item">
              <span className="video-section__item-index">03</span>
              <div>
                <h3 className="video-section__item-title">Ideas únicas</h3>
                <p className="video-section__item-text">
                  Si tenés una idea en mente, la trabajamos juntos para llevarla a la
                  realidad.
                </p>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </section>
  )
}
