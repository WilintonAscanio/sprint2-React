import React, { useEffect, useState } from 'react'
import { getFlights } from '../../services/flights'
import FooterFlight from './FooterFlight'

const Flight = () => {
  const [type, setType] = useState('')
  const [details, setDetails] = useState([])
  const data = JSON.parse(localStorage.getItem('datos')) || []

  const [maletin, setMaletin] = useState('')
  const [maletin2, setMaletin2] = useState('')
  const [maletin3, setMaletin3] = useState('')
  const [select, setSelect] = useState('')





  const getData = async () => {
    const datos = await getFlights()
    setDetails(datos)

  }
  useEffect(() => {

    getData()
    const data = JSON.parse(localStorage.getItem('type')) || []
    setType(data)

  }, [])

  const selectMaletin = (e, maletin) => {
    console.log(e.target.id);
    if (maletin === Number( e.target.id)) {
      setSelect('select')
      setMaletin2('')
      setMaletin3('')
      
    }
    
  }

 

  const flights = details.filter(item => item.placeIn === data.origin && item.placeOut === data.destiny)

  localStorage.setItem('flightIn', JSON.stringify(flights))

  const flightsBack = details.filter(item => item.placeIn === data.destiny && item.placeOut === data.origin)
  localStorage.setItem('flightOut', JSON.stringify(flights))




  return (
    <>
      <h3>Selección de horarios y equipajes</h3>
      {
        flights.map((element, index) => (

          <section className='flight__left__details' key={index}>
            <p>{element.hourBegin}</p>
            <div className='flight__left__details__scale'>
              <small>1h 57min</small>
              <span className="material-symbols-outlined">
                width
              </span>
              <small>{element.scale ? element.scale : 'Sin escalas'}</small>
            </div>
            <p>{element.hourEnd}</p>
            <div className={`flight__left__details__price ${select}`} onClick={(e) => selectMaletin(e, element.id)}>
              <span className="material-symbols-outlined">
                business_center
              </span>
              <small id = {element.id}>1 objeto personal</small>
              <small>$15000</small>
            </div>
            <div className='flight__left__details__price'>
              <span className="material-symbols-outlined">
                business_center
              </span>
              <small>Equipaje de mano</small>
              <small>$20000</small>
            </div>
            <div className='flight__left__details__price'>
              <span className="material-symbols-outlined">
                business_center
              </span>
              <small>Equipaje de 25 Kg</small>
              <small>$75000</small>
            </div>
          </section>

        ))

      }
      {type === 'Redondo' ?   <section className='backFlight'>
        <FooterFlight />
        <h3>Selección de horario y equipajes</h3>

        {flightsBack.map((element, index) => (
          <section className='flight__left__details' key={index}>
          <p>{element.hourBegin}</p>
          <div className='flight__left__details__scale'>
            <small>1h 57min</small>
            <span className="material-symbols-outlined">
              width
            </span>
            <small>{element.scale ? element.scale : 'Sin escalas'}</small>
          </div>
          <p>{element.hourEnd}</p>
          <div className='flight__left__details__price'>
            <span className="material-symbols-outlined">
              business_center
            </span>
            <small>1 objeto personal</small>
            <small>$15000</small>
          </div>
          <div className='flight__left__details__price'>
            <span className="material-symbols-outlined">
              business_center
            </span>
            <small>Equipaje de mano</small>
            <small>$20000</small>
          </div>
          <div className='flight__left__details__price'>
            <span className="material-symbols-outlined">
              business_center
            </span>
            <small>Equipaje de 25 Kg</small>
            <small>$75000</small>
          </div>
        </section>



        ))}



      </section> : '' }
    

    </>
  )
}

export default Flight