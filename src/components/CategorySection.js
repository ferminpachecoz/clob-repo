import React from 'react';
import './CategorySection.css';
import Card from './Card';

export default function CategorySection({products}) {
  let title = products && products[0]?products[0].category.title:'';
  return (
    <div className='category-section-container'>
      <div className='banner-category' style={{backgroundImage: "url('images/mountains-banner.jpg')"}}>
        <div className='shadow'>
          <h1>{title}</h1>
        </div>
      </div>
      <div className='row row-cols-2 row-cols-md-4 my-3 p-0 g-0'>
        {products &&
          products.map(item=>
            <div key={item.id} className="col mx-0 my-3">
              <Card path={`images/${item.images[0].path}`} title={item.name} price={item.price} discount={item.discount} id={item.id} />
            </div> 
          )
        }
      </div>
    </div>
  )
}
