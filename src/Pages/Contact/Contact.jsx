import React, { useState } from 'react'
import { Container, Image, Row, Col, Form, Button } from 'react-bootstrap'
import * as emailjs from 'emailjs-com'
import './Contact.css'
import Swal from 'sweetalert2'

const INITIAL = {
  name: '',
  lastname: '',
  email: '',
  phone: '',
  approxSize: '',
  projectDescription: '',
  loading: false,
}

export const Contact = () => {
  const YOUR_EMAIL = 'northernlights.iluminaciones@gmail.com'
  const YOUR_SERVICE_ID = 'service_qrwmoyb'
  const YOUR_TEMPLATE_ID = 'template_xu64wh7'
  const YOUR_USER_ID = 'oL2IJq3c3eAsAD0e5'

  let timerInterval

  const notification = () => {
    Swal.fire({
      title: '¡Listo!',
      html: 'Recibimos tu pedido de cotización. Te contactamos pronto.',
      timer: 2200,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      },
    })
  }

  const [formData, setFormdata] = useState(INITIAL)

  const buildQuoteMessage = () => {
    const lines = [
      'SOLICITUD DE COTIZACIÓN — Northern Lights',
      '',
      'Descripción de lo que necesitás (ideas, texto, colores, referencias):',
      formData.projectDescription.trim(),
      '',
    ]
    if (formData.approxSize.trim()) {
      lines.push(`Medidas / tamaño aproximado o lugar de instalación: ${formData.approxSize.trim()}`)
      lines.push('')
    }
    if (formData.phone.trim()) {
      lines.push(`Teléfono / WhatsApp: ${formData.phone.trim()}`)
    }
    return lines.join('\n')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormdata((prev) => ({ ...prev, loading: true }))

    const templateParams = {
      from_name: formData.email,
      user_name: formData.name,
      user_lastname: formData.lastname,
      to_name: YOUR_EMAIL,
      message: buildQuoteMessage(),
    }

    emailjs
      .send(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, templateParams, YOUR_USER_ID)
      .then(
        () => {
          setFormdata(INITIAL)
          notification()
        },
        (error) => {
          console.error(error.text)
          setFormdata((prev) => ({ ...prev, loading: false }))
          Swal.fire({
            icon: 'error',
            title: 'No se pudo enviar',
            text: 'Probá de nuevo en unos minutos o escribinos por redes.',
          })
        }
      )
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormdata((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Container fluid className="contact-quote">
      <Row className="contact-quote__grid justify-content-center align-items-start">
        <Col xl={5} lg={6} className="contact-quote__intro">
          <p className="contact-quote__kicker">Presupuesto sin compromiso</p>
          <h2 className="contact-quote__title">Pedí tu cotización</h2>
          <p className="contact-quote__lead">
            Contanos qué cartel o idea tenés en mente: texto, estilo, colores, dónde lo
            vas a instalar o cualquier referencia. Con eso armamos un presupuesto
            ajustado a lo que buscás.
          </p>
          <ul className="contact-quote__bullets">
            <li>Respondemos con una propuesta clara y plazos orientativos.</li>
            <li>Podés adjuntar links o referencias en la descripción.</li>
            <li>También estamos en redes si preferís escribir por ahí.</li>
          </ul>

          <div className="contact-quote__social">
            <p className="contact-quote__social-title">Seguinos</p>
            <div className="contact-quote__social-row">
              <a
                className="contact-quote__social-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://linktr.ee/northernlights.neon"
              >
                <Image
                  src="https://img.icons8.com/color/12x/linktree.png"
                  alt="Linktree"
                  width={28}
                  height={28}
                />
                <span>@northernlights.neon</span>
              </a>
              <a
                className="contact-quote__social-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/northern_lights.neon/"
              >
                <Image
                  src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
                  alt="Instagram"
                  width={28}
                  height={28}
                />
                <span>@northern_lights.neon</span>
              </a>
              <a
                className="contact-quote__social-link"
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.tiktok.com/@northern_lights.neon"
              >
                <Image src="https://www.tiktok.com/favicon.ico" alt="TikTok" width={28} height={28} />
                <span>@northern_lights.neon</span>
              </a>
            </div>
          </div>
        </Col>

        <Col xl={5} lg={6}>
          <div className="contact-quote__form-card">
            <p className="contact-quote__form-hint">
              Completá el formulario o escribinos a{' '}
              <a className="contact-quote__mail" href={`mailto:${YOUR_EMAIL}`}>
                {YOUR_EMAIL}
              </a>
            </p>
            <Form onSubmit={handleSubmit} className="contact-quote__form">
              <Row className="g-3">
                <Col sm={6}>
                  <Form.Group controlId="quoteName">
                    <Form.Label className="contact-quote__label">Nombre</Form.Label>
                    <Form.Control
                      name="name"
                      onChange={handleChange}
                      value={formData.name}
                      type="text"
                      placeholder="Tu nombre"
                      required
                      className="contact-quote__control"
                    />
                  </Form.Group>
                </Col>
                <Col sm={6}>
                  <Form.Group controlId="quoteLastname">
                    <Form.Label className="contact-quote__label">Apellido</Form.Label>
                    <Form.Control
                      name="lastname"
                      onChange={handleChange}
                      value={formData.lastname}
                      type="text"
                      placeholder="Tu apellido"
                      required
                      className="contact-quote__control"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="quoteEmail">
                    <Form.Label className="contact-quote__label">Email</Form.Label>
                    <Form.Control
                      name="email"
                      onChange={handleChange}
                      value={formData.email}
                      type="email"
                      placeholder="correo@ejemplo.com"
                      required
                      className="contact-quote__control"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="quotePhone">
                    <Form.Label className="contact-quote__label">
                      Teléfono o WhatsApp
                    </Form.Label>
                    <Form.Control
                      name="phone"
                      onChange={handleChange}
                      value={formData.phone}
                      type="tel"
                      placeholder="+54 …"
                      className="contact-quote__control"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="quoteApprox">
                    <Form.Label className="contact-quote__label">
                      Medidas{' '}
                    </Form.Label>
                    <Form.Control
                      name="approxSize"
                      onChange={handleChange}
                      value={formData.approxSize}
                      type="text"
                      placeholder="Ej.: 80 cm de ancho, vidriera del local…"
                      className="contact-quote__control"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group controlId="quoteDescription">
                    <Form.Label className="contact-quote__label">
                      Contanos tu idea o lo que necesitás
                    </Form.Label>
                    <Form.Control
                      name="projectDescription"
                      onChange={handleChange}
                      value={formData.projectDescription}
                      as="textarea"
                      rows={6}
                      required
                      placeholder="Ej.: cartel con la frase “…”, estilo neon rosa y blanco, para colgar en el living / logo del negocio / referencia: link o @ de Instagram…"
                      className="contact-quote__control contact-quote__textarea"
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                disabled={formData.loading}
                type="submit"
                className="contact-quote__submit w-100 mt-4"
              >
                {formData.loading ? 'Enviando…' : 'Enviar'}
              </Button>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
