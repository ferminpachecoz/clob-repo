import React from 'react';
import './CartSection.css';
import { useEffect, useState } from 'react';

export default function CartSection() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
    let x = JSON.parse(sessionStorage.getItem("products"));
    if(x.length>0){
      setProducts(x)
    }
  },[])

  const handleClick = id =>{
    let filtered = products.filter(item =>{
      return item.id !== id
    })
    let removed = JSON.stringify(filtered)
    sessionStorage.setItem("products", removed)
    sessionStorage.setItem("cartLength", filtered.length)
    setProducts(filtered);
  }

  let total = 0;
  let totalDiscount = 0;
  let totalUnits = 0;

  if(products){
    products.forEach(item=>{
      total += (item.price * item.units)
      totalDiscount += ((item.price * item.units)*(item.discount * 0.01 ))
      totalUnits += item.units
    })
  }
  
  return (
    <div>
      <div className='cart-banner' style={{backgroundImage: "url('/preview/ferminpacheco.site/images/mountains-banner-4.jpg')"}}>
        <div className='shadow d-flex justify-content-center align-items-end'>
        </div>
      </div>
      <div className='d-flex justify-content-center my-3'>
        <h1>Carrito de Compras</h1>
      </div>
      <hr/>
      <div className='my-4 d-flex justify-content-center flex-column align-items-center cart-container'>
        {products &&
          products.map((item, i)=>    
            <div className='col-11 col-md-6 row mb-4' key={i}>
              <div className='col-4'>
                <div className='product-image' style={{backgroundImage: `url('/preview/ferminpacheco.site/${item.path}')`}}>

                </div>
              </div>
              <div className='col-8 cart-content'>
                <div className='d-flex justify-content-between align-items-center title'>
                  <p>{item.title}</p>
                  <p>${item.price},00</p>
                </div>
                <div className='size-info'>
                  <p>Cantidad: {item.units}</p>
                  <p>Talla: 1</p>
                  <p>Color: Azul Marino</p>
                </div>
                <div className='remove d-flex align-items-center' onClick={()=>handleClick(item.id)}>
                  <span>Eliminar </span>
                  <i className="bi bi-x"></i>
                </div>
              </div>
            </div>
          )
        }
        <div className='col-11 col-md-6 mt-4 purchase-info'>
          <hr/>
          <div className='row my-3 resumen fw-600'>
            <div className='col-4'>
              Cantidad
            </div>
            <div className='col-4'>
              Descuento
            </div>
            <div className='col-4'>
              Total
            </div>
          </div>
          <div className='row my-3 resumen'>
            <div className='col-4'>
              {totalUnits}
            </div>
            <div className='col-4'>
              ${totalDiscount},00
            </div>
            <div className='col-4'>
              ${total-totalDiscount},00
            </div>
          </div>
          <hr/>
          <div className='d-flex justift-content-between mt-4 button-container'>
            <button>Continuar con la compra</button>
          </div>
        </div>
      </div>
    </div>
  )
}
