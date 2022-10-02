import React from 'react';
import './LoginSection.css';
import { useState } from 'react';

export default function LoginSection() {
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e =>{
    e.preventDefault();
    let data={
      email: email,
      password: password
    }
    let request={
      method:"POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }
    fetch('https://179.61.219.130:8090/preview/fpz-server.com/users/create', request)
      .then(res => res.json())
      .then(data =>{
        if(data && data.email && data.password){
          sessionStorage.setItem("admin", true)
          window.location.replace('/')
        }else{
          setError('La contraseña y/o el email es incorrecto')
        }
      })
      .catch(err => console.error(err))
  }

  return (
    <div className='login-container'>
      <div className='banner-login' style={{backgroundImage: "url('images/mountains-banner.jpg')"}}>
        <div className='title'>
          <h1>Mi Cuenta</h1>
        </div>
      </div>
      <div className='d-flex justify-content-center align-items-center'>
        <div className='col-10 col-md-8 col-xl-5 login-wrapper'>
          <div className='title'>
            <p>Iniciar Sesión</p>
          </div>
          <hr/>
          <div className='description'>
            <p>Introduce tu correo electrónico y tu contraseña para iniciar sesión en tu cuenta.</p>
          </div>
          <div className='mt-4'>
            <form className='login-form' onSubmit={e => handleSubmit(e)}>
              <div className='d-flex flex-column my-2 l-input'>
                <label>Correo electrónico</label>
                <input type="email" name='email' onChange={e => setEmail(e.target.value)} />
              </div>
              <div className='d-flex flex-column my-2 l-input'>
                <label>Contraseña</label>
                <input type="password" name='password' onChange={e => setPassword(e.target.value)} />
              </div>
              <div className='my-2'>
                {error &&
                  <p className='mt-3 error-message'>*{error}</p>
                }
              </div>
              <div className='my-3 l-checkbox'>
                <label className='me-3'>Recuerdame</label>
                <input type='checkbox' />
              </div>
              <hr/>
              <div className='my-5 button-container'>
                <button type='submit'>INICIAR SESIÓN</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
