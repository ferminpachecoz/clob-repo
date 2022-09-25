import React from 'react';
import './Ofertas.css';
import Carousel from 'react-elastic-carousel';
import Card from './Card';

export default function Ofertas({products}) {
  const breakpoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 }
  ]
  return (
    <div className='novedades-container'>
      <div className='d-flex justify-content-center'>
        <h4>Navega por las Ofertas</h4>
      </div>
      <Carousel itemsToShow={4} breakPoints={breakpoints} >
        {
          products.map(item =>
            <Card key={item.id} id={item.id} path={'images/'+item.images[0].path} title={item.name} price={item.price} discount={item.discount}/>  
          )
        }
      </Carousel>
    </div>
  )
}
