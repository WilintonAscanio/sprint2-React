import React, { useEffect, useState } from 'react'
import close from "../assets/icons/x.svg"
import search from "../assets/icons/search.svg"

const Origin = ({ countries, setShowModal }) => {
    const handleModal = () => {
      setShowModal(false)
    }
    


    return (
        <article className='modal'>
            <div className='modal__container'>
                <section className='modal__container__title'>
                    <strong>¿A dónde viajas?</strong>
                    <img src={close} alt="cerrar"/>
                </section>
                <article className='modal__container__search'>
                    <img src={search} alt="buscar" />
                    <input type="text" placeholder='Ingrese el país de origen' />
                </article>
                <select>
                    {countries.map((countrie, index) => (
                        <option value={countrie.id} key={index}>{`${countrie.name}--(${countrie.ISO3})`} </option>


                    ))}
                </select>
                <button>Confirmar</button>

            </div>



        </article>
    )
}

export default Origin