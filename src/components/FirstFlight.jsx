import { format } from 'date-fns'
import React, { useState } from 'react'
import Calendario from '../Calendario'

const FirstFlight = () => {

    



    return (
        <article className='dates' >
            <div className='dates__container'>
                <h1>Selecciona tus fechas</h1>

                <Calendario />
                <section className='dates__container__footer'>
                    <small>$Precios mas bajos</small>
                    <button>Hecho</button>
                </section>
            </div>
        </article>
    )
}

export default FirstFlight