import React from 'react';
import './ModalPurchase.css';

export default function ModalPurchase({display}) {

  const handleDelete = () =>{
    sessionStorage.removeItem("products");
  }
  let products = JSON.parse(sessionStorage.getItem("products"));

  let totalDiscount = 0;

  if(products){
    products.forEach(item=>{
      totalDiscount += (item.price * ((100-item.discount)/100))
    })
  }

  return (
    <div className='modal-container'>
      <div className='modal-shadow'>
        <div className='modal-content'>
          <div className='content'>
            <div className='d-flex justify-content-between'>
              <p>Resumen {"(1)"}</p>
              <span onClick={()=>display(0)} className="close-icon"><i className="bi bi-x"></i></span>
            </div>
            <hr/>
            <div className='row'>
              <div className='col-12'>
                {products.length>0 &&
                  products.map((item, i) =>  
                    <div className='product-info d-flex my-3' key={i}>
                      <div className='col-4 product-image' style={{backgroundImage: `url('/preview/ferminpacheco.site/${item.path}')`}}>

                      </div>
                      <div className='col-8 p-2'>
                        <div className='d-flex justify-content-between title'>
                          <p>{item.title}</p>
                          <p className={`${item.discount?'text-decoration-line-through':''}`}>${item.price},00</p>
                        </div>
                        <div className='size d-flex justify-content-between'>
                          <p>Talla: 1</p>
                          {item.discount &&
                            <p className="font-green">${item.price * ((100-item.discount)/100)},00</p>
                          }
                        </div>
                        <div className='color'>
                          <p>Color: Azul marino</p>
                        </div>
                        <div className='d-flex justify-content-between quantity'>
                          <a href="#" onClick={handleDelete}>Eliminar X</a>
                          <p>Cantidad: 1</p>
                        </div>
                      </div>
                    </div>
                  )
                }
                <hr/>
                <div className='d-flex justify-content-between price mt-3'>
                  <p>Total</p>
                  <p>${totalDiscount},00</p>
                </div>
                <div className='d-flex flex-column button-container'>
                  <button className='cart mb-3'><a href="/preview/ferminpacheco.site/cart">Ver carrito</a></button>
                  <button className='pay'><a href="/preview/ferminpacheco.site/cart">Pagar</a></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
