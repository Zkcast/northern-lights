import React from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Image, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import contactSection from '../../Assets/contactSection.webp'
import './Contact.css'

export const Contact = () => {

    return (

        <Container className=" p-4">
            <Row className="d-flex justify-content-around">
                <Col lg={6} className='text-center m-auto'>
                    <h3>Contactanos!</h3>
                    <h5>Podés encontrarnos en nuestras redes</h5>

                    <Container className="my-5">
                        <Row className="justify-content-center">
                            <Row className="py-2">

                                <Col className='justify-content-end d-flex' lg={3} md={5} sm={5} xs={5} >
                                    <a href="https://linktr.ee/mi_linktree/">
                                        <Image src="https://img.icons8.com/color/12x/linktree.png" alt="Linktree" width={30} height={30} />
                                    </a>
                                </Col>
                                <Col lg={7} md={7} sm={5} xs={5} className='justify-content-start d-flex'>
                                    <p className='py-2'>@linktree link</p>
                                </Col>
                            </Row>

                            <Row className="py-2">
                                <Col className='justify-content-end d-flex' lg={3} md={5} sm={5} xs={5} >
                                    <a href="https://www.instagram.com/northern_lights.neon/">
                                        <Image src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png" alt="Instagram" width={30} height={30} />
                                    </a>
                                </Col>
                                <Col lg={7} md={7} sm={5} xs={5} className='justify-content-start d-flex'>
                                    <p className='py-2 text-sm'>@northern_lights.neon</p>
                                </Col>
                            </Row>

                            <Row className="py-2">
                                <Col className='justify-content-end d-flex' lg={3} md={5} sm={5} xs={5} >
                                    <a href="https://www.tiktok.com/@mi_cuenta_de_tiktok/">
                                        <Image src="https://www.tiktok.com/favicon.ico" alt="TikTok" width={30} height={30} />
                                    </a>
                                </Col>
                                <Col lg={7} md={7} sm={5} xs={5} className='justify-content-start d-flex'>
                                    <p className='py-2'>@TikTok Link</p>
                                </Col>
                            </Row>
                        </Row>
                    </Container>
                </Col>
                <Col lg={6} className='px-5'>
                    <hr></hr>
                    <h5 style={{ fontSize: '14px' }}>Envianos un mensaje a <Link to='mailto:northernlights.iluminaciones@gmail.com'>northernlights.iluminaciones@gmail.com</Link> o rellena el formulario y nosotros nos contactaremos contigo.</h5>
                    <Form stye={{ maxWidth: '500px' }}>
                        <Form.Group className='my-3 border-2' controlId="formBasicName">
                            <Form.Control style={{ borderRadius: '25px', fontSize: '1em' }} type="text" placeholder="Nombre" />
                        </Form.Group>

                        <Form.Group className='my-3 border-2' controlId="formBasicLastName">
                            <Form.Control style={{ borderRadius: '25px', fontSize: '1em' }} type="text" placeholder="Apellido" />
                        </Form.Group>

                        <Form.Group className='my-3 border-2' controlId="formBasicEmail">
                            <Form.Control style={{ borderRadius: '25px', fontSize: '1em' }} type="email" placeholder="Introduce tu email" />
                        </Form.Group>

                        <Form.Group className='my-3 border-2' controlId="formBasicMessage">
                            <Form.Control style={{ borderRadius: '5px', fontSize: '1em' }} as="textarea" rows={3} placeholder="Cuentanos lo que necesitas" />
                        </Form.Group>

                        <Button variant="btn btn-outline-primary w-100 border-2 cambio-color" type="submit">
                            Enviar
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
