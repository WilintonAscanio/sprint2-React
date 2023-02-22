import React from 'react'
import { Link } from 'react-router-dom'
import paypal from '../../assets/PayPal_Logo.svg' 

const AsideSeats = () => {
    return (
        <>
            <article>
                <div>
                    <strong>Servicios opcionales</strong>
                    <small>Selecciona tu asiento <span>$284 MXN</span></small>
                    <small>IVA servicios <span>$284 MXN</span></small>
                    <h4>Total <span>$329 MXN</span></h4>
                </div>
                <div>
                    <strong>TUA</strong>
                    <small>Tarifa de uso de aeropuerto (TUA) <span>$1189 MXN</span></small>
                    <h4>Total <span>$1189 MXN</span></h4>
                </div>
                <div>
                    <h4>Total <span>$2941 MXN</span></h4>


                </div>
                <Link className='flight__right__button' to='paypal'><img src={paypal} alt="Paypal" />Pagar con PayPal</Link>
            </article>

        </>

    )
}

export default AsideSeats