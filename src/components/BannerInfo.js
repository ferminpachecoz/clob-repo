import React from 'react';
import './BannerInfo.css';
import AOS from 'aos';
import { useEffect } from 'react';

export default function BannerInfo() {
  useEffect(()=>{
    AOS.init()
  },[])
  return (
    <div className='d-flex justify-content-evenly banner-info-container'>
      <div className='content'>
        <div className='content-image' style={{backgroundImage: "url('/preview/ferminpacheco.site/images/banner-info-1.webp')"}}>
          <div 
          data-aos="fade-up" 
          data-aos-duration="2000" 
          data-aos-anchor-placement="bottom-bottom"
          className='d-flex flex-column justify-content-center align-items-center content-text'>
            <h1>contacta con nosotros</h1>
            <div>
              <a href="/preview/ferminpacheco.site/contact">descubre mas {">"}</a>
            </div>
          </div>
        </div>
      </div>

      <div className='content'>
        <div className='content-image' style={{backgroundImage: "url('/preview/ferminpacheco.site/images/banner-info-2.webp')"}}>
          <div 
          data-aos="fade-up" 
          data-aos-duration="2000" 
          data-aos-anchor-placement="bottom-bottom"
          className='d-flex flex-column justify-content-center align-items-center content-text'>
            <h1>localizador de tiendas</h1>
            <div>
              <a href="/preview/ferminpacheco.site/contact">descubre mas {">"}</a>
            </div>
          </div>
        </div>
      </div>

      <div className='content'>
        <div className='content-image' style={{backgroundImage: "url('/preview/ferminpacheco.site/images/banner-info-3.webp')"}}>
          <div 
          data-aos="fade-up" 
          data-aos-duration="2000" 
          data-aos-anchor-placement="bottom-bottom"
          className='d-flex flex-column justify-content-center align-items-center content-text'>
            <h1>reserva una cita</h1>
            <div>
              <a href="#">descubre mas {">"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
