import React, { createContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom'
import { getCountries } from '../services/countries';
import Destiny from './Destiny';
import FirstFlight from './FirstFlight';
import Origin from './Origin';
import Passengers from './Passengers';

export const HeaderContext = createContext({})

const Header = () => {

    const { register, handleSubmit, watch } = useForm();

    const navigation = useNavigate()

    const [showModal, setShowModal] = useState(false);

    const [modalDestiny, setModalDestiny] = useState(false)

    const [modalDates, setModalDates] = useState(false)

    const [passengers, setPassengers] = useState(false)

    const [boton, setBoton] = useState("boton1")

    const [boton2, setBoton2] = useState("boton2")

    const [type, setType] = useState('')

    const [dataFlight, setDataFlight] = useState([])

    const [validate, setValidate] = useState(false)

    const origin = watch('origin')
    const destiny = watch('destiny')
    const fecha = watch('salida')


    const [data, setData] = useState([])
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

    const [formData, setFormData] = useState({
        origin: '',
        destiny: '',
        firstDate: '',
        secondDate: '',
        passengers: '',
        code: '',
        type: type

    })









    const getData = async () => {
        const datos = await getCountries();
        setData(datos)
    }
    useEffect(() => {
        getData()
    }, [])






    const show = () => {
        setShowModal(!showModal)

    }
    const showDestiny = () => {
        setModalDestiny(!modalDestiny)


    }
    const showDates = () => {
        setModalDates(!modalDates)


    }
    const showPassengers = () => {
        setPassengers(!passengers)


    }
    const changeFormData = (object) => {
        setFormData({ ...formData, [object.name]: object.value })


    }
    const getDataFlight = () => {
        const data = JSON.parse(localStorage.getItem('datos')) || []

        setDataFlight(data)

    }
    const validation = () => {
        if (formData.origin && formData.destiny && formData.firstDate && formData.secondDate && formData.passengers) {

            setValidate(true)
            
        }
       
    }
    useEffect(() => {
        localStorage.setItem('datos', JSON.stringify(formData))
        getDataFlight()
        validation()


    }, [formData])

    const onSubmit = (data) => {

        localStorage.setItem('data', JSON.stringify(data))
        if (formData.origin) {
            navigation('selectFlight/flight')


        }
    }
   









    return (
        <HeaderContext.Provider value={
            { showModal, show, changeFormData, showDestiny, modalDestiny, modalDates, showDates, showPassengers, passengers, formData, data }}>
            <Origin countries={data} />
            <Destiny countries={data} />
            <FirstFlight />
            <Passengers />




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
                            setShowModal(true)
                        }}>

                            <select>
                                <option value="">{dataFlight.origin ? dataFlight.origin : 'Ciudad Origen'}</option>

                            </select>


                            <small>Origen</small>
                        </section>
                        <section onClick={() => { setModalDestiny(true) }}>
                            <select>
                                <option>{formData.destiny ? formData.destiny : '---'}</option>
                            </select>


                            <small>Seleccione su destino</small>
                        </section>
                    </div>
                    <div className='header__left__dates'>
                        <section onClick={() => setModalDates(true)}>
                            <small>Salida</small>
                            <input readOnly value={formData.firstDate} />
                        </section>
                        <section onClick={() => setModalDates(true)}>
                            <small>Regreso</small>
                            <input readOnly value={formData.secondDate} />
                        </section>

                    </div>
                    <div className='header__left__passengers'>
                        <section onClick={() => { setPassengers(true) }}>
                            <small>Pasajeros</small>
                            <select>
                                <option value="">{formData.passengers ? formData.passengers : 'Seleccione una cantidad'}</option>
                            </select>

                        </section>
                        <section>
                            <small>¿Tiene un código de promoción?</small>
                            <input type="text" placeholder='-- -- -- --'
                                {...register('promocional')} />
                        </section>
                    </div>
                    <button type='submit'>
                        <Link to={`${validate ? 'selectFlight/flight' :''}`} className='header__left__button'><span className="material-symbols-outlined">
                            airplanemode_active
                        </span>Buscar vuelos</Link>
                    </button>



                </form>
                <section className='header__right'></section>
            </article>



        </HeaderContext.Provider>

    )
}

export default Header