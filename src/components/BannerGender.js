import React from 'react';
import './BannerGender.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';

export default function BannerGender() {
  const [category, setCategory] = useState([])
  useEffect(()=>{
    AOS.init()
    fetch('https://179.61.219.130:8090/preview/fpz-server.com/category')
      .then(res => res.json())
      .then(data =>{
        let category = data.filter(item=>item.banner == 1)
        setCategory(category)
      })
      .catch(err => console.error(err))
  },[])

  return (
    <div className='row g-2 row-cols-2 banner-gender-container'>
      {category &&
        category.map(item=>    
          <div className='parent col' key={item.id}>
            <div className='wrapper d-flex justify-content-center align-items-center' style={{backgroundImage: `url(${'images/'+item.img_path})`}}>
              <div className='content' data-aos="zoom-in" data-aos-duration="2000" data-aos-anchor-placement="center-bottom">
                <h1>{item.title}</h1>
                <div className='d-flex justify-content-center'>
                  <a href={`/category?id=${item.id}`}>comprar ahora {'>'}</a>
                </div>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}
