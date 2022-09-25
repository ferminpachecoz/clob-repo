import React from 'react';
import './Header.css';
import { useState, useEffect } from 'react';

export default function Header() {
  const [category, setCategory] = useState([])
  const [searchDisplay, setSearchDisplay] = useState(false)
  const [units, setUnits] = useState();
  const [responsiveNav, setResponsiveNav] = useState(false)
  const [search, setSearch] = useState('');
  let admin = sessionStorage.getItem('admin')

  console.log(search);

  const handleChange = query =>{
    fetch(`https://lm-serverless.herokuapp.com/search?query=${query}`)
      .then(res => res.json())
      .then(data => setSearch(data))
      .catch(err => console.error(err))
  }

  useEffect(()=>{
    fetch('https://lm-serverless.herokuapp.com/category')
      .then(res => res.json())
      .then(data =>{
        let x = data.filter(item=>item.header == 1)
        setCategory(x)
      })
      .catch(err => console.error(err))

    let x = JSON.parse(sessionStorage.getItem("products"))
    let z = 0;
    if(x){
      x.forEach(item=>{
        z += item.units;
      })
    }
    setUnits(z)
  },[])

  return (
    <div className='header-container' >
      {responsiveNav &&
        <div className='responsive-nav d-flex flex-column align-items-start'>
          <span className='close-icon' onClick={()=>setResponsiveNav(!responsiveNav)}><i className="bi bi-x"></i></span>
          <div className='nav-container'>
            <ul>
              <li><p className='nav-title'>Categorias</p></li>
              {
                category.map(item=>
                  <li key={item.id}><a href={`/category?id=${item.id}`}>{item.title}</a></li>
                )
              }
              <li><p className='nav-title mt-4'>Navegación</p></li>
              <li><a href="/contact">contacto</a></li>
              <li><a href="/login">iniciar sesión</a></li>
              <li><a href="/cart">carrito de compras</a></li>
              {admin &&
                <li><a href="/admin">admin</a></li>
              }
            </ul>
          </div>
        </div>
      }
      {!searchDisplay &&
      <div>
        <div className='top-nav d-flex justify-content-between align-items-center'>
          <div className='search-container d-flex' onClick={()=>setSearchDisplay(!searchDisplay)} >
            <span className='me-2'><i className="bi bi-search"></i></span>
            <p>Search</p>
          </div>
          <div className='logo-container'>
            <a href="/">
              <h1>LOUIS VUITTON</h1>
            </a>
          </div>
          <div className='nav'>
            {admin=="true" &&
              <a href="/admin" className='me-3'><i className="bi bi-speedometer2"></i></a>
            }
            <a href="/contact" className='me-3'><i className="bi bi-telephone"></i></a>
            <a href="/login" className='me-3'><i className="bi bi-person"></i></a>
            <a href="/cart" className='cart-icon'>
              <i className="bi bi-cart position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                  {units}
                </span>
              </i>
            </a>
            <a href="#" className='burger-menu' onClick={()=>setResponsiveNav(!responsiveNav)}><i className="bi bi-list"></i></a>
          </div>
        </div>
        <div className='bottom-nav d-flex justify-content-center align-items-center mt-4'>     
          <ul className='d-flex justify-content-evenly'>
            {category &&
              category.map(item=>
                <li key={item.id}><a href={`/category?id=${item.id}`}>{item.title}</a></li>
              )
            }
          </ul>
        </div>
      </div>
      }
      {searchDisplay &&
        <div className='search-nav d-flex flex-column justify-content-start align-items-center'>
          <div className='d-flex input-container'>
            <span><i className="bi bi-search"></i></span>
            <input type="text" onChange={e=>handleChange(e.target.value)} />
          </div>
          <div className='close-search'>
            <span onClick={()=>setSearchDisplay(!searchDisplay)}><i className="bi bi-x"></i></span>
          </div>
          <div className='mt-3 results'>
            <ul>
              {search &&
                search.map(item=>
                  <li key={item.id}><a className='link-result' href={`/product?id=${item.id}`}>{item.name}</a></li>
                )
              }
            </ul>
          </div>
        </div>
      }
    </div>
  )
}
