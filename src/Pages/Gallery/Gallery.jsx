import React, { useState } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import './Gallery.css';

// Importar imágenes
import img1 from '../../Assets/content/Northern Lights Neon-20251127T164416Z-1-001/Northern Lights Neon/Fotos Carteles/GOPR0653.JPG';


export const Gallery = () => {
    const [showModal, setShowModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);

    const galleryImages = [
        { id: 1, src: img1, title: 'Cartel Neon Personalizado' },
        { id: 2, src: img1, title: 'Diseño Neon Custom' },
        { id: 3, src: img1, title: 'Iluminación Neon' },
        { id: 4, src: img1, title: 'Letrero Neon' },
        { id: 5, src: img1, title: 'Arte Neon' },
        { id: 6, src: img1, title: 'Cartel LED Neon' },
        { id: 7, src: img1, title: 'Neon Decorativo' },
        { id: 8, src: img1, title: 'Diseño Luminoso' }
    ];

    const handleImageClick = (image) => {
        setSelectedImage(image);
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
        setSelectedImage(null);
    };

    return (
        <div className="gallery-section">
            <Container className="py-5">
                <div className="gallery-header text-center mb-5">
                    <h2 className="gallery-title">Galería de Trabajos</h2>
                    <p className="gallery-subtitle">Descubrí nuestros diseños neon personalizados</p>
                </div>

                <div className="gallery-grid">
                    {galleryImages.map((image) => (
                        <div
                            key={image.id}
                            className="gallery-item"
                            onClick={() => handleImageClick(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.title}
                                className="gallery-image"
                            />
                            <div className="gallery-overlay">
                                <div className="gallery-overlay-content">
                                    <h5>{image.title}</h5>
                                    <p>Ver más</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Modal para ver imagen en grande */}
            <Modal
                show={showModal}
                onHide={handleClose}
                centered
                size="lg"
                className="gallery-modal"
            >
                <Modal.Header closeButton className="border-0">
                    <Modal.Title>{selectedImage?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="p-0">
                    {selectedImage && (
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.title}
                            className="w-100"
                        />
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};
