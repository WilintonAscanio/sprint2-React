import React, { useEffect, useState } from 'react'
import FooterFlight from './FooterFlight'
import Seats from './Seats'

const Asientos = () => {
  const [type, setType] = useState('')

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('type')) || []
    setType(data)
  }, [])

  return (
    <article className='seats'>
      <h3>Selecciona tus asientos</h3>
      <Seats />
      {type === 'Redondo' ? <>
        <FooterFlight />
        <Seats />
      </> : ''}



    </article>
  )
}

export default Asientos