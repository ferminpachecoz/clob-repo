import React from 'react';
import './SandBox.css';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import Slider from 'react-slick';

export default function SandBox() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  }
  return (
    <>
      <Header />
      <div className='sandbox-banner' style={{backgroundImage: "url('images/mountains-banner-3.jpg')"}}>
      </div>
      <div className='sandbox-carousel'>
        <Slider {...settings} >
          <div>
            <h1>lorem</h1>
          </div>
          <div>
            <h1>ipsum</h1>
          </div>
          <div>
            <h1>dolor</h1>
          </div>
          <div>
            <h1>sit</h1>
          </div>
          <div>
            <h1>amet</h1>
          </div>
        </Slider>
      </div>
      <Footer />
    </>
  )
}
