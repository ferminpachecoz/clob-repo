import React from 'react';
import './Ofertas.css';
import Slider from 'react-slick';
import Card from './Card';

export default function Ofertas({products}) {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <div className='novedades-container'>
      <div className='d-flex justify-content-center'>
        <h4>Navega por las Ofertas</h4>
      </div>
      <div className='slider-ofertas'>
        <Slider {...settings} >
          {
            products.map(item =>
              <Card key={item.id} id={item.id} path={'images/'+item.images[0].path} title={item.name} price={item.price} discount={item.discount}/>  
            )
          }
        </Slider>
      </div>
    </div>
  )
}
