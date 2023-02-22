import React from 'react'
import photo from '../../Assets/slider/photo.jpg'
import photo2 from '../../Assets/slider/photo2.jpg'
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"

export const Home = () => {
  return (
    <div className='w-100 slider m-auto shadowbottom'>
      <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block h-100 carrousel-img"
          src={photo2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-100 carrousel-img"
          src={photo}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>

    </div>
  )
}
