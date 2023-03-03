import React from 'react'
import { Link } from 'react-router-dom'
import paypal from '../../assets/PayPal_Logo.svg' 

const AsideSeats = () => {
    return (
        <>
            <article>
                <div>
                    <strong>Servicios opcionales</strong>
                    <small>Selecciona tu asiento <span>$20000</span></small>
                    <small>IVA servicios <span>$ 3800</span></small>
                    <h4>Total <span>$23800</span></h4>
                </div>
                <div>
                    <strong>TUA</strong>
                    <small>Tarifa de uso de aeropuerto (TUA) <span>$ 75000</span></small>
                    <h4>Total <span>$ 75000</span></h4>
                </div>
                <div>
                    <h4>Total <span>$ 98800</span></h4>


                </div>
                <Link className='flight__right__button' to='/paypal'><img src={paypal} alt="Paypal" />Pagar con PayPal</Link>
            </article>

        </>

    )
}

export default AsideSeats