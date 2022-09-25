import React from 'react';
import './Banner.css';
import { useEffect } from 'react';
import AOS from 'aos';

export default function Banner() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <div className='banner-container d-flex justify-content-center align-items-center'>
      <div className='content' data-aos="zoom-in" data-aos-duration="2000" >
        <h1>Lorem ipsum dolor sit amet</h1>
        <div className='d-flex justify-content-center'>
          <button>Lorem Ipsum</button>
        </div>
      </div>
    </div>
  )
}
