import React from 'react';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap'
import contactSection from '../../Assets/contactSection.webp'
import './Contact.css'

export const Contact = () => {

    return (
        <div className='footer'>
            <Row className='footer'>
                <Col>
                    <button type="button" class="btn btn-outline-info mx-5 px-5">Conoce nuestras tiendas</button>

                </Col>
                <Col>

                    <button type="button" class="btn btn-outline-info mx-5 px-5">Conoce nuestras tiendas</button>

                </Col>
                <Col>

                    <button type="button" class="btn btn-outline-info mx-5 px-5">Conoce nuestras tiendas</button>

                </Col>

            </Row>
        </div>
    )
}
