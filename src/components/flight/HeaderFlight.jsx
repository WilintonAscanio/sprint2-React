import React from 'react'
import { Link } from 'react-router-dom'

const HeaderFlight = () => {

    const data = JSON.parse(localStorage.getItem('datos'))||[]
    
    return (
        <>
            <section className='flight__left__top'>
                <h2>Vuelo de salida</h2>
                <Link to='/' className='flight__left__top__link'>Cambiar vuelo</Link>
            </section>
            <strong>{data.firstDate}</strong>
            <small>{data.origin} (AIICM) a {data.destiny}</small>
        </>
    )
}

export default HeaderFlight