import React from 'react'
import blue from '../assets/Amex.svg'
import paypal from '../assets/paypal.svg'
import invex from '../assets/banco.jpg'
import master from '../assets/Mastercard.svg'
import visa from '../assets/Visa.svg'
import oxxo from '../assets/oxxo.svg'
import seven from '../assets/7-eleven.svg'
import walmart from '../assets/walmart.svg'
import ahorro from '../assets/farmacias.svg'

const Pay = () => {
  return (

    <>
    <article className='payMethods'>
      <h2>Pago Seguro</h2>
      <section>
        <div>
          <p>Tarjeta de créedito, tarjeta de débito y pago electrónico</p>
          <figure>
            <img src={blue} alt="blue"/>
            <img src={paypal} alt="paypal" />
            <img src={invex} alt="invex" />
            <img src={master} alt="master" />
            <img src={visa} alt="visa" />
          </figure>
        </div>
        <div>
          <p>Efectivo en cualquiera de las sucursales participantes</p>
          <figure>
            <img src={oxxo} alt="oxxo" />
            <img src= {seven} alt="7" />
            <img src= {walmart} alt="walmart" />
            <img src= {ahorro} alt="Ahorro" />
          </figure>
        </div>
      </section>
    </article>
    </>
  )
}

export default Pay