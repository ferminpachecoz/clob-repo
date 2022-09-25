import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import CategorySection from '../components/CategorySection';
import { useEffect, useState } from 'react';

export default function Category() {
  const [category, setCategory] = useState([])
  let query = new URLSearchParams(window.location.search);
  let id = query.get('id')
  useEffect(()=>{
    fetch('https://lm-serverless.herokuapp.com/products')
      .then(res => res.json())
      .then(data =>{
        let category = data.filter(item=>item.id_category == id)
        setCategory(category)
      })
      .catch(err => console.error(err))
  },[])
  return (
    <>
      <Header />
      <CategorySection products={category}/>
      <Footer />
    </>
  )
}
