import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='d-flex justify-content-center align-items-center mb-4 title-container'>
        <h1>LOUIS VUITTON</h1>
      </div>
      <div className='d-flex justify-content-center mb-4'>
        <div className='footer-content row align-items-start row-cols-2 row-cols-md-4 gy-4'>
          <div className='col d-flex flex-column justify-content-center'>
            <p className='tab-title'>descarga la aplicación</p>
            <a href="#" className='tab-nav'>Usuarios IOS</a>
            <a href="#" className='tab-nav'>Usuarios Android</a>
          </div>

          <div className='col d-flex flex-column justify-content-center'>
            <p className='tab-title'>contacta</p>
            <a href="#" className='tab-nav'>Contacta con nosotros</a>
            <a href="#" className='tab-nav'>Servicios Especiales</a>
            <a href="#" className='tab-nav'>Reserva una cita</a>
            <a href="#" className='tab-nav'>Encontrar boutiques</a>
          </div>

          <div className='col d-flex flex-column justify-content-center'>
            <p className='tab-title'>atención al cliente</p>
            <a href="#" className='tab-nav'>Todos nuestros servicios</a>
            <a href="#" className='tab-nav'>Preguntas frecuentes</a>
            <a href="#" className='tab-nav'>Rastrear pedidos y solicitudes</a>
            <a href="#" className='tab-nav'>Formulario de cambio</a>
            <a href="#" className='tab-nav'>Formulario de devolución</a>
            <a href="#" className='tab-nav'>Cuidados posventa</a>
            <a href="#" className='tab-nav'>Code Moncler</a>
          </div>

          <div className='col d-flex flex-column justify-content-center'>
            <p className='tab-title'>corporativo</p>
            <a href="#" className='tab-nav'>Información de la marca</a>
            <a href="#" className='tab-nav'>Relaciones con inversores</a>
            <a href="#" className='tab-nav'>Gerencia corporativa</a>
            <a href="#" className='tab-nav'>Sostenibilidad</a>
            <a href="#" className='tab-nav'>Empleo</a>
          </div>
        </div>
      </div>
      <div className='d-flex flex-column flex-md-row justify-content-between align-items-center footer-social mb-0'>
        <div className='icons-container ms-3'>
          <span><i className="bi bi-instagram"></i></span>
          <span><i className="bi bi-facebook"></i></span>
          <span><i className="bi bi-twitter"></i></span>
          <span><i className="bi bi-youtube"></i></span>
        </div>
        <div className='copyright-container'>
          <p>Copyright © 2000–2022 Moncler S.P.A. Todos los derechos reservados.</p>
        </div>
        <div className='version-container'>
          <p>10.1.96</p>
        </div>
      </div>
    </div>
  )
}
