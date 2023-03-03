import React, { useEffect, useState } from 'react'

const Seat = ({ letra, numero, seleccionado, onClick }) => {
    const [seleccion, setSeleccionado] = useState(false);
    const [passengers, setPassengers] = useState(false)

    const [total, setTotal] = useState(0)

    const [select, setSelect] = useState(0)
    useEffect(() => {
        const totalP = JSON.parse(localStorage.getItem('passengers')) || []
        setTotal(totalP)


    }, [])


    const handleClick = () => {
        if (select <= total) {
            setSeleccionado(!seleccionado);
            onClick(letra + numero);

            if (passengers === false) {
                setPassengers(true)
                setSelect(select - 1)


            }
            else {
                setPassengers(false)
                setSelect(select + 1)

            }
            console.log(select);
    

        }



    };






    return (

        <div onClick={handleClick} className={`seatFlight ${seleccionado ? 'blue' : 'gray'}`}>
            {letra}{numero}
        </div>
    );
}

export default Seat