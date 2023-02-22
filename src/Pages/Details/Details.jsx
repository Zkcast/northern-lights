import React from 'react'
import photo3 from '../../Assets/slider/photo3.jpg'
import { Col, Row } from 'react-bootstrap'

export const Details = () => {
    return (
        <Col className='p-5 shadowbottom'>
            <Row className='m-auto'>
                ¡Bienvenidos a nuestro sitio web de carteles simil led neon! En nuestra tienda en línea encontrarás una gran variedad de carteles de alta calidad, diseñados para ofrecerte una experiencia única y llamativa en la decoración de tu hogar o negocio. Nos enorgullece ofrecer una amplia gama de opciones de diseños para que puedas encontrar el cartel que mejor se adapte a tus necesidades y gustos personales. Además, nos esforzamos en ofrecer un excelente trato con el cliente, proporcionando un servicio de atención al cliente profesional y amable. Nuestro objetivo es que nuestros clientes estén 100% satisfechos con su compra y que puedan disfrutar de su cartel led estilo neon por mucho tiempo. ¡Explora nuestro sitio web y descubre cómo nuestros carteles pueden agregar una chispa de brillo a tu vida!
            </Row>
            <Row className='mb-0 mt-5'>
                <Col>
                    <button type="button" class="btn btn-outline-dark mx-5 px-5">Mercado Pago</button>
                    <button type="button" class="btn btn-outline-dark mx-5 px-5">Conoce nuestras tiendas</button>
                </Col>
            </Row>

        </Col>
    )
}
