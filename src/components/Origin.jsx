import React, { useContext, useEffect, useState } from 'react'
import close from "../assets/icons/x.svg"
import search from "../assets/icons/search.svg"
import { HeaderContext } from './Header'
import { set } from 'date-fns'

const Origin = ({ countries }) => {

    const { show, showModal, changeFormData } = useContext(HeaderContext)

    const [option, setOption] = useState('')

    const [searchInput, setSearchInput] = useState([])

    const [input, setInput] = useState('')


    const handleClick = ({ target }) => {
        setOption(target.value)

    }
    const confirm = () => {
        changeFormData({ name: 'origin', value: option })

        show()

    }
    const filter = ({ target }) => {
        setInput(target.value)
        const filter = countries.filter(countrie => countrie.place.toLowerCase().includes(target.value.toLowerCase()))
        setSearchInput(filter)

    }





    return (
        <article className={`modal ${showModal === false ? 'hidden' : ''}`}>
            <div className='modal__container'>
                <section className='modal__container__title'>
                    <strong>¿A dónde viajas?</strong>
                    <img src={close} alt="cerrar" onClick={show} />
                </section>
                <article className='modal__container__search'>
                    <img src={search} alt="buscar" />
                    <input type="text" placeholder='Ingrese el país de origen' onChange={(e) => { filter(e) }} />
                </article>
                <select onClick={(e) => { handleClick(e) }}>
                    {input ? <>
                        {searchInput.map((countrie, index) => (
                            <option value={countrie.name} key={index}>{`${countrie.place}`} </option>


                        ))}</> : <>
                        { countries.map((countrie,index) => (
                            <option value={countrie.name} key={index}>{`${countrie.place}`} </option>

                        )) }
                        </>}

                </select>
                <button onClick={confirm}>Confirmar</button>

            </div>



        </article>
    )
}

export default Origin