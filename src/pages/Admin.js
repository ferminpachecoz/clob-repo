import React from 'react';
import Header from '../layout/Header';
import Footer from '../layout/Footer';
import SideBar from '../components/SideBar';
import Box from '../components/AdminSections/Box';
import './Admin.css';
import { useState } from 'react';

export default function Admin() {
  const [tab, setTab] = useState(0)

  const handleClick = (num) =>{
    setTab(num)
  }

  return (
    <div>
      <Header />
      <div className='admin-banner-container' style={{backgroundImage: "url('/preview/ferminpacheco.site/images/mountains-banner-3.jpg')"}}>
        
      </div>
      <main className='row'>
        <SideBar func={handleClick} />
        <Box tab={tab} />
      </main>
      <Footer />
    </div>
  )
}

