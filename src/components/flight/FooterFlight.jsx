import { DateTime } from 'luxon'
import React from 'react'

const FooterFlight = () => {
  const data = JSON.parse(localStorage.getItem('datos'))||[]



  return (
    <><div className='backFlight__title'>
    <h2>Vuelo de regreso</h2>
    <button>Cambiar vuelo</button>

  </div>
  <strong>{data.secondDate}</strong>
  <small>{data.destiny} a {data.origin} (AICM)</small>
    </>
    )
}

export default FooterFlight