import React from 'react'
import FooterFlight from './FooterFlight'

const Flight = () => {
  return (
    <>
      <h3>Selección de horarios y equipajes</h3>
      <section className='flight__left__details'>
        <p>05:50 PM</p>
        <div className='flight__left__details__scale'>
          <small>1h 57min</small>
          <span className="material-symbols-outlined">
            width
          </span>
          <small>Sin escalas</small>
        </div>
        <p>06:47 PM</p>
        <div className='flight__left__details__price'>
          <span className="material-symbols-outlined">
            business_center
          </span>
          <small>1 objeto personal</small>
          <small>$5.48 MXN</small>
        </div>
        <div className='flight__left__details__price'>
          <span className="material-symbols-outlined">
            business_center
          </span>
          <small>Equipaje de mano</small>
          <small>$1,048 MXN</small>
        </div>
        <div className='flight__left__details__price'>
          <span className="material-symbols-outlined">
            business_center
          </span>
          <small>Equipaje de 25 Kg</small>
          <small>$1,945 MXN</small>
        </div>
      </section>
      <section className='flight__left__details'>
        <p>11:39 PM</p>
        <div className='flight__left__details__scale'>
          <small>1h 57min</small>
          <span className="material-symbols-outlined">
            width
          </span>
          <small>Sin escalas</small>
        </div>
        <p>11:43 AM</p>
        <div className='flight__left__details__price'>
          <span className="material-symbols-outlined">
            business_center
          </span>
          <small>1 objeto personal</small>
          <small>$5.48 MXN</small>
        </div>
        <div className='flight__left__details__price'>
          <span className="material-symbols-outlined">
            business_center
          </span>
          <small>Equipaje de mano</small>
          <small>$1,048 MXN</small>
        </div>
        <div className='flight__left__details__price'>
          <span className="material-symbols-outlined">
            business_center
          </span>
          <small>Equipaje de 25 Kg</small>
          <small>$1,945 MXN</small>
        </div>
      </section>
      <section className='backFlight'>
        <FooterFlight />
        <h3>Selección de horario y equipajes</h3>

        <section className='flight__left__details'>
          <p>05:50 PM</p>
          <div className='flight__left__details__scale'>
            <small>1h 57min</small>
            <span className="material-symbols-outlined">
              width
            </span>
            <small>Sin escalas</small>
          </div>
          <p>06:47 PM</p>
          <div className='flight__left__details__price'>
            <span className="material-symbols-outlined">
              business_center
            </span>
            <small>1 objeto personal</small>
            <small>$5.48 MXN</small>
          </div>
          <div className='flight__left__details__price'>
            <span className="material-symbols-outlined">
              business_center
            </span>
            <small>Equipaje de mano</small>
            <small>$1,048 MXN</small>
          </div>
          <div className='flight__left__details__price'>
            <span className="material-symbols-outlined">
              business_center
            </span>
            <small>Equipaje de 25 Kg</small>
            <small>$1,945 MXN</small>
          </div>
        </section>
        <section className='flight__left__details'>
          <p>11:39 PM</p>
          <div className='flight__left__details__scale'>
            <small>1h 57min</small>
            <span className="material-symbols-outlined">
              width
            </span>
            <small>Sin escalas</small>
          </div>
          <p>11:43 AM</p>
          <div className='flight__left__details__price'>
            <span className="material-symbols-outlined">
              business_center
            </span>
            <small>1 objeto personal</small>
            <small>$5.48 MXN</small>
          </div>
          <div className='flight__left__details__price'>
            <span className="material-symbols-outlined">
              business_center
            </span>
            <small>Equipaje de mano</small>
            <small>$1,048 MXN</small>
          </div>
          <div className='flight__left__details__price'>
            <span className="material-symbols-outlined">
              business_center
            </span>
            <small>Equipaje de 25 Kg</small>
            <small>$1,945 MXN</small>
          </div>
        </section>

      </section>
    </>
  )
}

export default Flight