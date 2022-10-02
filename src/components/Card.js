import React from 'react';
import './Card.css';

export default function Card({path, title, price, discount, id}) {
  return (
    <div className='card-container'>
      <a href={`/preview/ferminpacheco.site/product?id=${id}`}>  
        <div className='card-image-container'>
          <div style={{backgroundImage: `url('/preview/ferminpacheco.site/${path}')`}} className="card-image"></div>
        </div>
        <div className='card-content'>
          <div>
            <p>{title}</p>
          </div>
          <div className='d-flex flex-column flex-md-row justify-content-between'>
            <p className={`${discount?'text-decoration-line-through':''}`}>${price},00</p>
          </div>
          {discount &&
            <div>
              <p className='discount'>${price * ((100-discount)/100)},00</p>
            </div>
          }
        </div>
      </a>
    </div>
  )
}
