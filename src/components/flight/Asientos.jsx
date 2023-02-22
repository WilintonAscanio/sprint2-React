import React from 'react'
import FooterFlight from './FooterFlight'
import Seats from './Seats'

const Asientos = () => {
  return (
    <article className='seats'>
      <h3>Selecciona tus asientos</h3>
      <Seats />
      <FooterFlight />
      <Seats />
      

    </article>
  )
}

export default Asientos