import { DateTime } from 'luxon';
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { getCountries } from '../services/countries';
import Destiny from './Destiny';
import FirstFlight from './FirstFlight';
import Origin from './Origin';
import Passengers from './Passengers';

const Header = () => {

    const { register, handleSubmit, watch } = useForm();

    const navigation = useNavigate()

    const [showModal, setShowModal] = useState(false);

    const [modalDestiny, setmModalDestiny] = useState(false)
    const [modalPassengers, setmModalPassengers] = useState(false)
    const [modalDates, setModalDates] = useState(false)

    const origin = watch('origin')
    const destiny = watch('destiny')
    const fecha = watch('salida')
    // console.log(fecha);
    // // const time = DateTime.now()
    // const t = DateTime.fromJSDate(fecha);
    // console.log(t.toLocaleString(DateTime.DATE_HUGE));
    // // console.log(t.toLocaleString(DateTime.DATE_HUGE));

    // // console.log(time.toLocaleString(DateTime.DATE_HUGE));

    const [data, setData] = useState([])

    const [boton, setBoton] = useState("boton1")
    const [boton2, setBoton2] = useState("boton2")
    const [type, setType] = useState('')

    const getData = async () => {
        const datos = await getCountries();
        setData(datos)
    }
    useEffect(() => {
        getData()
    }, [])

    const changeClassBotton = (boton) => {
        if (boton === "boton1") {
            setBoton("colorButton");
            setBoton2("colorPrimary");
            setType('Sencillo')

        } else {
            setBoton("colorPrimary");
            setBoton2("colorButton");
            setType('Redondo')
        }
    };
    const dataFlight = JSON.parse(localStorage.getItem('data')) || []


    const onSubmit = (data) => {

        localStorage.setItem('data', JSON.stringify(data))
        navigation('selectFlight/flight')
    }



    return (
        <>
            <header className='myFlights'>

                <Link className='myFlights__mine' to='myFlights'>Mis vuelos</Link>

            </header>
            <article className='header'>
                <form className='header__left' onSubmit={handleSubmit(onSubmit)}>
                    <p className='header__left__title'>Busca un nuevo destino y comienza la aventura.</p>
                    <p className='header__left__description'>Descubre vuelos al mejor precio y perfectos para cualquier viaje.</p>
                    <div className='header__left__buttons'>
                        <small className={boton} onClick={() => changeClassBotton("boton1")}>Viaje redondo</small>
                        <small className={boton2} onClick={() => changeClassBotton("boton2")}>Viaje sencillo</small>
                    </div>
                    <div className='header__left__fly'>
                        <section onClick={() => {
                            setShowModal(true)}}>
                            <select  {...register('origin')}>
                                <option value="">Ciudad origen</option>

                            </select>

                            {showModal && <Origin countries={data} setShowModal={setShowModal} />

                            }
                            <small>Origen</small>
                        </section>
                        <section onClick={() => setmModalDestiny(true)}>
                            <select {...register('destiny')}>
                                <option>---</option>
                            </select>
                            {modalDestiny && <Destiny countries={data} setShowModal={setShowModal} />

                            }
                            <small>Seleccione su destino</small>
                        </section>
                    </div>
                    <div className='header__left__dates'>
                        <section onClick={() => setModalDates(true)}>
                            <small>Salida</small>
                            <input type="date" {...register('salida')} />
                        </section>
                        <section onClick={() => setModalDates(true)}>
                            <small>Regreso</small>
                            <input type="date" {...register('regreso')} />
                        </section>
                        {modalDates && (
                            <FirstFlight />
                        )}
                    </div>
                    <div className='header__left__passengers'>
                        <section onClick={() => setmModalPassengers(true)}>
                            <small>Pasajeros</small>
                            <select>
                                <option value="">Seleccione</option>
                            </select>
                            {modalPassengers && (
                                <Passengers />
                            )}
                        </section>
                        <section>
                            <small>¿Tiene un código de promoción?</small>
                            <input type="text" placeholder='-- -- -- --'
                                {...register('promocional')} />
                        </section>
                    </div>
                    <button type='submit'>
                        <Link to="selectFlight/flight" className='header__left__button'><span className="material-symbols-outlined">
                        airplanemode_active
                    </span>Buscar vuelos</Link>
                    </button>



                </form>
                <section className='header__right'></section>
            </article>
            


        </>

    )
}

export default Header