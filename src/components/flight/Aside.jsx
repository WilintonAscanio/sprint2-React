import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getFlights } from '../../services/flights'
import AsideSeats from './AsideSeats'

const Aside = () => {
  const data = JSON.parse(localStorage.getItem('datos')) || []

  const [showFacture, setShowFacture] = useState(false)

  const [details, setDetails] = useState([])
  const [base, setBase] = useState(75000)
  

  const getData = async () => {
    const datos = await getFlights()
    setDetails(datos)

  }
  useEffect(() => {

    getData()

  }, [])

  const flights = details.filter(item => item.placeIn === data.origin && item.placeOut === data.destiny)

 

  const handleClick = () => {
    setShowFacture(true)
  }
  const discount = base - (10/100)
  const iva = (base *19)/100
  const total = discount+iva

  return (
    <aside className='flight__right'>
      <div>
        <strong>Tu reservación</strong>
        <section>
          <small>Pasajeros</small>
          <small>{data.passengers}</small>
        </section>

        <p>Vuelo de salida</p>
        <h3>{data.origin} __ <span>{data.destiny}</span></h3>
        {flights.map((element, index) => (
        <p key={index}>{element.hourBegin}<span>{element.hourEnd}</span></p>


        ))}


        <h4>{data.salida}</h4>


      </div>
      <div>
        <strong>Costo de vuelo</strong>
        <small>Tarifa base <span>${base}</span></small>
        <small>Tarifa base con descuento <span>$ {discount}</span></small>
        <small>IVA tarifa <span>$ {iva}</span></small>
        <small>Tarifa base <span>$ {base}</span></small>
        <h4>Total <span>$ {total}</span></h4>

      </div>
      {showFacture && (
      <AsideSeats />


      )}

      <Link to="asientos" className={`flight__right__button ${showFacture ? 'hidden': ''}`} onClick={handleClick}>Seleccionar asientos</Link>


    </aside>
  )
}

export default Aside