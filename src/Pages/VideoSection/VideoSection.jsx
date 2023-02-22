import React, { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import './VideoSection.css'
import video from '../../Assets/video.mp4'

export const VideoSection = () => {

    const handleVideoClick = (event) => {
        const video = event.target;
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    }

    return (
        <Row className='videoSection p-5'>
            <Col className='video'>
                    <video className='video rounded-circle' loop autoPlay muted id='video' controls={false} onClick={handleVideoClick}>
                        <source src={video} type="video/mp4" />
                        Tu navegador no soporta la reproducción de videos.
                    </video>

            </Col>
            <Col className='m-auto text-white p-4 border-top border-bottom border-secondary'>
                Brindamos asesoramiento personalizado para ayudarte a encontrar el cartel perfecto para tu hogar o negocio. Estaremos siempre disponible para responder a cualquier pregunta que tengas sobre nuestros productos y para ofrecerte recomendaciones personalizadas basadas en tus gustos y necesidades.

                Además, si estás buscando un cartel led estilo neon personalizado, podemos hacer presupuestos a medida para asegurarnos de que obtengas exactamente lo que estás buscando. Simplemente contáctanos y estaremos encantados de ayudarte a crear un cartel que se adapte perfectamente a tu estilo y presupuesto.

                Si tienes una idea única en mente, no dudes en compartirla con nosotros y trabajaremos juntos para hacerla realidad.
            </Col>

        </Row>
    )
}
