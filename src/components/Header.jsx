import React from 'react'
import plane from '../assets/icons/plane.svg'

const Header = () => {
    return (
        <>
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
                                <option value="1">Colombia</option>
                            </select>
                            <small>Origen</small>
                        </section>
                        <section>
                            <select>
                                <option>---</option>
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
                    <button className='header__left__button'><img src={plane} alt="avion" />Buscar vuelos</button>


                </section>
                <section className='header__right'></section>
            </article>

        </>

    )
}

export default Header