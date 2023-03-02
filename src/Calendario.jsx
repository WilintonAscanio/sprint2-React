import { format } from 'date-fns'
import React, { useState } from 'react'
import { Calendar } from 'react-date-range'

const Calendario = () => {
    const [calendar, setCalendar] = useState('')
    const [calendar2, setCalendar2] = useState('')

    const handleSelect = (date) => {
        setCalendar(format(date, 'MM/dd/yyyy'))
        localStorage.setItem('date', JSON.stringify(calendar))


    }
    const handleSelect2 = (date) => {
        setCalendar2(format(date, 'MM/dd/yyyy'))
        localStorage.setItem('date2', JSON.stringify(calendar2))


    }
    return (
        <article className='modalDates'>
            <section>
                <strong>Fecha de salida</strong>
                {/* <input readOnly value={calendar} /> */}
                <Calendar date={new Date()}
                    className='calendar'
                    onChange={handleSelect} />

            </section>
            <section>
                <strong>Fecha de regreso</strong>
                {/* <input readOnly value={calendar2} /> */}
                <Calendar date={new Date()}
                    className='calendar'
                    onChange={handleSelect2} />

            </section>




        </article>
    )
}

export default Calendario