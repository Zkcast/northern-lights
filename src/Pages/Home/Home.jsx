import React from 'react'
import slider2 from '../../Assets/slider/slider2.jpg'
import slider3 from '../../Assets/slider/slider3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"

export const Home = () => {
  return (
    <div className='w-100 slider m-auto shadowbottom'>
      <Carousel controls={false}>
      <Carousel.Item>
        <img
          className="d-block h-100 carrousel-img"
          src={slider2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block h-100 carrousel-img"
          src={slider3}
          alt="Second slide"
        />
      </Carousel.Item>
    </Carousel>

    </div>
  )
}
