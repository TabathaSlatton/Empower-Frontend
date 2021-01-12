import React from 'react';

import { Carousel } from 'react-bootstrap'
import ReactPlayer from 'react-player'


const HomeCarousel = () => {
  return (
    <div>
      <Carousel>
  <Carousel.Item>
  <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1532926381893-7542290edf1d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Reward Yourself</h3>
      <p>Spend points you've earned on rewards to celebrate your accomplishments.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    {/* <img
      className="d-block w-100"
      src="./images/empowerment-cover.jpg"
      alt="Second slide"
    /> */}
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1506784242126-2a0b0b89c56a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1948&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Earn points by completing goals</h3>
      <p>Create goals, assign a point value, and earn points.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1522661067900-ab829854a57f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Empower Yourself</h3>
      <p>Empower yourself by exploring our resouces.</p>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://images.unsplash.com/photo-1555819206-7b30da4f1506?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1951&q=80"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Empower Other Women</h3>
      <p>Communicate with other women and explore ways to help.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  );
}

export default HomeCarousel;
