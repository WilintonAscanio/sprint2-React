import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'


const PayPal = () => {
  const navigate = useNavigate()
  const { register, handleSubmit, watch, formState: { errors } } = useForm();


  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    cel: '',
    email: '',
    cardNumber: '',
    cvc: '',
    date: ''



  })

  const onSubmit = (data) => {
    const confirm = window.confirm('Está seguro que desea comprar?')
    if (confirm) {
      Swal.fire({
        icon: 'success',
        text: 'Gracias por su compra 😃',
        // confirmButtonText : 'Ir a página principal'
      })
      navigate('/')

    }

  }
  
  return (
    <article className='paypal'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <section>
          <label>Nombre</label>
          <input type="text" placeholder='Ingrese su nombre' {...register('name', {
            required: {
              value: true,
              message: 'El nombre es requerido'
            }
          })} />
          {
            errors.name && <span className='error'>{errors.name.message}</span>
          }
          <label>Apellido</label>
          <input type="text" placeholder='Ingrese su apellido' {...register('lastname', {
            required: {
              value: true,
              message: 'El apellido es requerido'
            }
          })} />
          {
            errors.lastname && <span className='error'>{errors.lastname.message}</span>
          }
          <label >Celular</label>
          <input type="number" placeholder='Número de contacto' {...register('cel', {
            required: {
              value: true,
              message: 'El celular es requerido'
            }
          })} />
          {
            errors.cel && <span className='error'>{errors.cel.message}</span>
          }
          <label >Correo</label>
          <input type="text" placeholder='Ingrese su correo electrónico' {...register('email', {
            required: {
              value: true,
              message: 'El correo es requerido'
            }
          })} />
          {
            errors.email && <span className='error'>{errors.email.message}</span>
          }
          <label >Nº de tarjeta</label>
          <input type="number" placeholder='Ingrese su número de tarjeta' {...register('cardNumber', {
            required: {
              value: true,
              message: 'El número de tarjeta es requerido'
            }
          })} />
          {
            errors.cardNumber && <span className='error'>{errors.cardNumber.message}</span>
          }
          <section>
            <label >CVC</label>
            <input type="number" placeholder='CVC' {...register('cvc', {
              required: {
                value: true,
                message: 'Su CVC es requerida'
              }
            })} />
            {
            errors.cvc && <span className='error'>{errors.cvc.message}</span>
          }
            <label>Fecha</label>
            <input type="number" placeholder='Fecha'  {...register('date', {
              required: {
                value: true,
                message: 'La fecha es requerida'
              }
            })} />
            {
            errors.date && <span className='error'>{errors.date.message}</span>
          }
          </section>
        </section>
        <button className='flight__right__button' type='submit'>Confirmar compra</button>
      </form>

    </article>
  )
}

export default PayPal