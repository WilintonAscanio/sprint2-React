import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getCountries } from '../services/countries';

const Header = () => {
    const [data, setData] = useState([])

    const getData = async () => {
        const datos = await getCountries();
        setData(datos)
    }
    useEffect(() => {
        getData()
    }, [])




    return (
        <>
            <header className='myFlights'>

                <Link className='myFlights__mine' to='myFlights'>Mis vuelos</Link>

            </header>
            <article className='header'>
                <section className='header__left'>
                    <p className='header__left__title'>Busca un nuevo destino y comienza la aventura.</p>
                    <p className='header__left__description'>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</p>
                    <div className='header__left__buttons'>
                        <button>Viaje redondo</button>
                        <button>Viaje sencillo</button>
                    </div>
                    <div className='header__left__fly'>
                        <section>
                            <select>
                                <option value="">Ciudad origen</option>
                                {data.map((pais) => (
                                    <option value={pais.id} key={pais.id}>{pais.name}<span>{pais.ISO3}</span></option>

                                ))}
                            </select>
                            <small>Origen</small>
                        </section>
                        <section>
                            <select>
                                <option>---</option>
                                {data.map((pais) => (
                                    <option value={pais.id} key={pais.id}>{pais.name} <span>{pais.ISO3}</span></option>

                                ))}

                            </select>
                            <small>Seleccione su destino</small>
                        </section>
                    </div>
                    <div className='header__left__dates'>
                        <section>
                            <small>Salida</small>
                            <input type="date" />
                        </section>
                        <section>
                            <small>Regreso</small>
                            <input type="date" />
                        </section>
                    </div>
                    <div className='header__left__passengers'>
                        <section>
                            <small>Pasajeros</small>
                            <select>
                                <option value="">Seleccione</option>
                            </select>
                        </section>
                        <section>
                            <small>¿Tiene un código de promoción?</small>
                            <input type="text" placeholder='-- -- -- --' />
                        </section>
                    </div>
                    <Link to="selectFlight/flight" className='header__left__button'><span className="material-symbols-outlined">
                        airplanemode_active
                    </span>Buscar vuelos</Link>


                </section>
                <section className='header__right'></section>
            </article>

        </>

    )
}

export default Header