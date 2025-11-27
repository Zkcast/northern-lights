import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { Container, Image, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as emailjs from "emailjs-com";
import './Contact.css'
import Swal from 'sweetalert2';

export const Contact = () => {


    const YOUR_EMAIL = "northernlights.iluminaciones@gmail.com"
    const YOUR_SERVICE_ID = "service_v3r7cn8"
    const YOUR_TEMPLATE_ID = "template_g68nzi9"
    const YOUR_USER_ID = "X7mle8z9EW3CxcEet"

    let timerInterval

    const notification = () => {
        Swal.fire({
            title: 'Gracias por comunicarte!',
            html: 'Te contactaremos pronto.',
            timer: 1200,
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
            }
        })
    }

    const [formData, setFormdata] = useState({
        title: "",
        email: "",
        name: "",
        lastname: "",
        message: "",
        loading: false,
        show: false,
        alertmessage: "",
        variant: "",
    });

    const handleSubmit = (e) => {

        e.preventDefault();
        setFormdata({ loading: true });

        const templateParams = {
            from_name: formData.email,
            user_name: formData.name,
            user_lastname: formData.lastname,
            to_name: YOUR_EMAIL,
            message: formData.message,
        };

        emailjs
            .send(
                YOUR_SERVICE_ID,
                YOUR_TEMPLATE_ID,
                templateParams,
                YOUR_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setFormdata({
                        title: 'SUCCESS!',
                        loading: false,
                        alertmessage: "Thank you for your message. We'll be in touch soon",
                        variant: "success",
                        show: true,
                        message: ''
                    });
                    notification()
                },
                (error) => {
                    console.log(error.text);
                    setFormdata({
                        title: "",
                        email: "",
                        name: "",
                        lastname: "",
                        message: "",
                        loading: false,
                        show: false,
                        alertmessage: "",
                        variant: "",
                    });
                }
            );
    };

    const handleChange = (e) => {
        setFormdata({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    return (

        <Container fluid className="p-4 footer">
            <Row className="d-flex justify-content-around">
                <Col lg={6} className='text-center m-auto'>
                    <h3>Contactanos!</h3>
                    <h5>Podés encontrarnos en nuestras redes</h5>

                    <Container className="my-5">
                        <Row className="justify-content-center">
                            <Row className="py-2">

                                <Col className='justify-content-end d-flex' lg={3} md={4} sm={4} xs={4} >
                                    <a target='_blank' href="https://linktr.ee/northernlights.neon">
                                        <Image src="https://img.icons8.com/color/12x/linktree.png" alt="Linktree" width={30} height={30} />
                                    </a>
                                </Col>
                                <Col lg={7} md={4} sm={4} xs={4} className='justify-content-start d-flex'>
                                    <p className='py-2'>@northernlights.neon</p>
                                </Col>
                            </Row>

                            <Row className="py-2">
                                <Col className='justify-content-end d-flex' lg={3} md={4} sm={4} xs={4} >
                                    <a target='_blank' href="https://www.instagram.com/northern_lights.neon/">
                                        <Image src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png" alt="Instagram" width={30} height={30} />
                                    </a>
                                </Col>
                                <Col lg={7} md={4} sm={4} xs={4} className='justify-content-start d-flex'>
                                    <p className='py-2 text-sm'>@northern_lights.neon</p>
                                </Col>
                            </Row>

                            <Row className="py-2">
                                <Col className='justify-content-end d-flex' lg={3} md={4} sm={4} xs={4} >
                                    <a target='_blank' href="https://www.tiktok.com/@northern_lights.neon">
                                        <Image src="https://www.tiktok.com/favicon.ico" alt="TikTok" width={30} height={30} />
                                    </a>
                                </Col>
                                <Col lg={7} md={4} sm={4} xs={4} className='justify-content-start d-flex'>
                                    <p className='py-2'>@northern_lights.neon</p>
                                </Col>
                            </Row>
                        </Row>
                    </Container>
                </Col>
                <Col lg={6} className='px-5'>
                    <hr></hr>
                    <h5 style={{ fontSize: '14px' }}>Envianos un mensaje a <Link to='mailto:northernlights.iluminaciones@gmail.com'>northernlights.iluminaciones@gmail.com</Link> o rellena el formulario y nosotros nos contactaremos contigo.</h5>
                    <Form onSubmit={handleSubmit} stye={{ maxWidth: '500px' }}>
                        <Form.Group className='my-3 border-2' controlId="formBasicName">
                            <Form.Control name="name" onChange={handleChange} value={formData.name || ""} style={{ borderRadius: '25px', fontSize: '1em' }} type="text" placeholder="Nombre" />
                        </Form.Group>

                        <Form.Group className='my-3 border-2' controlId="formBasicLastName">
                            <Form.Control name="lastname" onChange={handleChange} value={formData.lastname || ""} style={{ borderRadius: '25px', fontSize: '1em' }} type="text" placeholder="Apellido" />
                        </Form.Group>

                        <Form.Group className='my-3 border-2' controlId="formBasicEmail">
                            <Form.Control name="email" onChange={handleChange} value={formData.email || ""} style={{ borderRadius: '25px', fontSize: '1em' }} type="email" placeholder="Introduce tu email" />
                        </Form.Group>

                        <Form.Group className='my-3 border-2' controlId="formBasicMessage">
                            <Form.Control name="message" onChange={handleChange} value={formData.message || ""} style={{ borderRadius: '5px', fontSize: '1em' }} as="textarea" rows={3} placeholder="Cuentanos lo que necesitas" />
                        </Form.Group>

                        <Button disabled={formData.loading} variant="btn btn-outline-primary w-100 border-2 cambio-color" type="submit">
                            {formData.loading ? 'Cargando...' : 'Enviar'}
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}
