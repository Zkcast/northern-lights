import React from 'react'
import slider2 from '../../Assets/slider/slider2.jpg'
import slider3 from '../../Assets/slider/slider3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import "./Home.css"

export const Home = () => {
  return (
    // <div className='slider shadowbottom'>
    <Carousel className='slider shadowbottom' controls={false}>
      <Carousel.Item >
        <img
          className="carrousel-img"
          src={slider3}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carrousel-img"
          src={slider2}
          alt="First slide"
        />
      </Carousel.Item>
    </Carousel>

    // </div>
  )
}
