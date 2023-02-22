import React from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const PayPal = () => {
  const navigate = useNavigate()
  const confirmar = () => {
    const confirm = window.confirm('Está seguro que desea comprar?')
    if (confirm) {
      Swal.fire({
        icon : 'success',
        text : 'Gracias por su compra 😃',
        // confirmButtonText : 'Ir a página principal'
      })
      navigate('/')
      
    }
 
  }
  return (
    <article className='paypal'>
      <div>
        <section>
          <label>Nombre</label>
          <input type="text" placeholder='Ingrese su nombre' />
          <label>Apellido</label>
          <input type="text" placeholder='Ingrese su apellido' />
          <label htmlFor="">Celular</label>
          <input type="number" placeholder='Número de contacto' />
          <label htmlFor="">Correo</label>
          <input type="text" placeholder='Ingrese su correo electrónico' />
          <label htmlFor="">Nº de tarjeta</label>
          <input type="number" placeholder='Ingrese su número de tarjeta' />
          <section>
            <label htmlFor="">CVC</label>
            <input type="number" placeholder='CVC' />
            <label>Fecha</label>
            <input type="number"  placeholder='Fecha'/>
          </section>
        </section>
        <button className='flight__right__button' onClick={confirmar}>Confirmar compra</button>
      </div>
      
    </article>
  )
}

export default PayPal