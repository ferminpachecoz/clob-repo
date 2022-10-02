import React from 'react';
import Header from '../layout/Header';
import Banner from '../components/Banner';
import Ofertas from '../components/Ofertas';
import BannerGender from '../components/BannerGender';
import BannerInfo from '../components/BannerInfo';
import Footer from '../layout/Footer';
import { useEffect, useState } from 'react';

export default function Home() {
  const [ofertas, setOfertas] = useState([])
  useEffect(()=>{
    fetch('https://179.61.219.130:8090/preview/fpz-server.com/products')
      .then(res => res.json())
      .then(data =>{
        let products = data.filter(item => item.discount)
        setOfertas(products)
      })
      .catch(err => console.error(err))
  },[])
  return (
    <>
      <Header />
      <Banner />
      <Ofertas products={ofertas}/>
      <BannerGender />
      <BannerInfo />
      <Footer />
    </>
  )
}
