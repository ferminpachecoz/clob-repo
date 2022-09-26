import React from 'react';
import './ProductSection.css';
import Slider from 'react-slick';
import { useState } from 'react';

export default function ProductSection({display, product}) {
  const [discount, setDiscount] = useState(0);
  let images = product?product.images:[];

  let count;
  if(product && product.discount){
    count = product.price * ((100-product.discount)/100)
  }
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  return (
    <div>
      <div className='only-product-banner' style={{backgroundImage:"url('images/mountains-banner-5.jpg')"}}>
        <div className='shadow'>

        </div>
      </div>
      <div className='product-container row row-cols-1 row-cols-md-2'>
        <div className='col mb-3'>
          <Slider {...settings}>
            {images &&
              images.map(item=>
              <div key={item.id} className="image-container">
                <div className='background-img' style={{backgroundImage: `url(${'images/'+item.path})`}}>

                </div>
              </div>
              )
            }
            {!images &&
              <div></div>
            }
          </Slider>
        </div>
        <div className='col d-flex justify-content-center align-items-center'>
          <div className='col-8 product-nav'>
            <div className='category-title'>
              <a href="/product">{`< ${product && product.category?product.category.title:''}`}</a>
            </div>
            <hr/>
            <div className="d-flex justify-content-between align-items-center product-info mt-4">
              <h4>{product?product.name:''}</h4>
              <h4 className={`${product && product.discount?'text-decoration-line-through':''}`}>${product?product.price:''},00</h4>
            </div>
            {count &&
              <div className='d-flex justify-content-end align-items-center product-info mb-4 '>
                <h4 className="font-green">${count},00</h4>
              </div>
            }
            <div className='product-description'>
              <p>{product?product.description:''}.</p>
            </div>
            <hr/>
            <div className='d-flex product-color'>
              <p className='me-4 color'>COLOR</p>
              <p>Azul Marino</p>
            </div>
            <div className='color-icon'>
              <span><i className="bi bi-square-fill"></i></span>
            </div>
            <hr/>
            <div className='d-flex justify-content-between size-info'>
              <p>TALLA</p>
              <a href="#">ENCUENTRA MI TALLA <i className="bi bi-rulers ms-2"></i></a>
            </div>
            <div className='d-flex justify-content-start size-numbers mb-3'>
              <span className='me-2'>1</span>
              <span className='mx-2'>2</span>
              <span className='mx-2'>3</span>
              <span className='mx-2'>4</span>
              <span className='mx-2'>5</span>
            </div>
            <div className='size-description'>
              <p><b>Corte:</b> Corte ajustado</p>
            </div>
            <div className='button-purchase'>
              <button onClick={()=>display(1)}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
