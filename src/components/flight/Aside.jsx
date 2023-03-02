import React from 'react'
import { Link } from 'react-router-dom'
import AsideSeats from './AsideSeats'

const Aside = () => {
  const data = JSON.parse(localStorage.getItem('data')) || []

  return (
    <aside className='flight__right'>
      <div>
        <strong>Tu reservación</strong>
        <section>
          <small>Pasajeros</small>
          <small>1 adulto</small>
        </section>

        <p>Vuelo de salida</p>
        <h3>{data.origin} __ <span>{data.destiny}</span></h3>
        <p>05:45 PM <span>06:47 PM</span></p>


        <h4>{data.salida}</h4>


      </div>
      <div>
        <strong>Costo de vuelo</strong>
        <small>Tarifa base <span>$1,505 MXN</span></small>
        <small>Tarifa base con descuento <span>$1,505 MXN</span></small>
        <small>IVA tarifa <span>$1,505 MXN</span></small>
        <small>Tarifa base <span>$1,505 MXN</span></small>
        <h4>Total <span>$548 MXN</span></h4>

      </div>
      <AsideSeats />

      <Link to="asientos" className='flight__right__button'>Seleccionar asientos</Link>


    </aside>
  )
}

export default Aside