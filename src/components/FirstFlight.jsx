import { format } from 'date-fns'
import React, { useContext, useState } from 'react'
import Calendario from './Calendario'
import { HeaderContext } from './Header'

const FirstFlight = () => {
    const { showDates, modalDates } = useContext(HeaderContext)


    const confirm = () => {

        showDates()

    }





    return (
        <article className={`dates ${modalDates === false ? 'hidden' : ''}`} >
            <div className='dates__container'>
                <h1>Selecciona tus fechas</h1>

                <Calendario  />
                <section className='dates__container__footer' >
                    <small>$Precios mas bajos</small>
                    <button onClick={confirm}>Hecho</button>
                </section>
            </div>
        </article>
    )
}

export default FirstFlight