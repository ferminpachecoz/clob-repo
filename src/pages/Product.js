import React, { useState, useEffect } from 'react';
import ModalPurchase from '../components/ModalPurchase';
import ProductSection from '../components/ProductSection';
import Footer from '../layout/Footer';
import Header from '../layout/Header';

export default function Product() {
  const [modalDisplay, setModalDisplay] = useState(false)
  const [product, setProduct] = useState({})

  let query = new URLSearchParams(window.location.search)
  let id = query.get('id');

  useEffect(()=>{
    fetch("https://lm-serverless.herokuapp.com/product/"+id)
      .then(res => res.json())
      .then(data => setProduct(data))
      .catch(err => console.error(err))
  },[])

  const display = (num) =>{

    if(num==0){
      setModalDisplay(!modalDisplay);
    }

    if(num==1){
      setModalDisplay(!modalDisplay);
      let z = []
      let x = JSON.parse(sessionStorage.getItem('products'))
      
      if(x && x.length>0){
        let repeat = x.find(item=>item.id===product.id);
        if(!repeat){
          let beta = {
            description: product.description,
            discount: product.discount,
            id: product.id,
            path: 'images/' + product.images[0].path,
            price: product.price,
            title: product.name,
            units: 1
          }
          z = [...x]
          z.push({...beta})
          /* x.forEach(item=>{
            if (item.id !== product.id) {
              let beta = {
                description: product.description,
                discount: product.discount,
                id: product.id,
                path: 'images/' + product.images[0].path,
                price: product.price,
                title: product.name,
                units: 1
              }
              z.push({...beta})
              z.push({...item})
            }
          }) */
        }
      }else{
        let beta = {
          description: product.description,
          discount: product.discount,
          id: product.id,
          path: 'images/' + product.images[0].path,
          price: product.price,
          title: product.name,
          units: 1
        }
        z.push({...beta})
      }
  
      if(z.length > 0){
        let y = JSON.stringify(z);
        sessionStorage.setItem("products", y)
      }
    }
  }
  return (
    <>
      {modalDisplay &&
        <ModalPurchase display={display} />
      }
      <Header />
      <ProductSection display={display} product={product} />
      <Footer />
    </>
  )
}
