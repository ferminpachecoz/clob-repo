import React from 'react';
import './AdminLayout.css';
import { useRef, useState, useEffect } from 'react';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().min(5, "Debe tener al menos 5 caracteres").max(100, "Máximo de 100 caracteres").required("Debe tener un email"),
  password: yup.string().min(5, "Debe tener al menos 5 caracteres").max(20, "Máximo de 20 caracteres").required("Debe tener una contraseña"),
})

export default function AdminLayout() {

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })

  const handleCreate = (data) =>{
    let body = {
      email: data.email,
      password: data.password
    }
    let request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    }
    fetch("https://179.61.219.130:8090/preview/fpz-server.com/users/admin", request)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.error(err))
  }

  console.log(errors);
  return (
    <div className='px-5'>
      <div className='mb-4'>
        <h1>Agregar administrador</h1>
      </div>
      <form className='admin-form-container' onSubmit={handleSubmit(handleCreate)}>
        <div className='input-wrapper'>
          <label>Email</label>
          <input type="text" name='email' {...register('email')} />
          {errors.email && <p className='error-message'>{errors.email.message}</p>}
        </div>
        <div className='input-wrapper'>
          <label>Password</label>
          <input type="password" name='password' {...register('password')} />
          {errors.password && <p className='error-message'>{errors.password.message}</p>}
        </div>
        <div className='button-wrapper'>
          <button className='bg-green-gradient' type='submit'>Agregar</button>
        </div>
      </form>
    </div>
  )
}
