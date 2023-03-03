import React, { useContext, useState } from 'react'
import { HeaderContext } from './Header'

const Passengers = () => {
    const {showPassengers, passengers, changeFormData } = useContext(HeaderContext)

    // const [option, setOption] = useState('')

    // const handleClick = ({ target }) => {
    //     setOption(target.value)

    // }
    const confirm = () => {
        console.log(total);
        changeFormData({ name: 'passengers', value: total })

        showPassengers()

    }

    const [initial, setInitial] = useState(1)
    const [kids, setKids] = useState(1)
    const [babys, setBabys] = useState(1)

    const total = initial + kids + babys



    const handlePlus = (name) => {


        if (name === 'initial') {

            setInitial(initial + 1)

        }
        else if (name === 'kids') {
            setKids(kids + 1)
        }
        else if (name === 'babys') {
            setBabys(babys + 1)
        }

    }
    const handleLess = (name) => {
        if (name === 'initial') {
            const newValue = initial > 0 ? initial - 1 : 0;
            setInitial(newValue);

        }
        else if (name === 'kids') {
            const newValue = kids > 0 ? kids - 1 : 0;
            setKids(newValue);
        }
        else if (name === 'babys') {
            const newValue = babys > 0 ? babys - 1 : 0;
            setBabys(newValue);
        }
       

    };

    return (
        <article className={`modal ${passengers === false ? 'hidden' : ''}`}>
            <div className='modal__info'>
                <div className='modal__adults'>
                    <section>
                        <strong>Adultos <span>(+13 años)</span></strong>
                    </section>
                    <section>
                        <small onClick={() => { handleLess('initial') }}>-</small>
                        <span>{initial}</span>
                        <small onClick={() => { handlePlus('initial') }}>+</small>
                    </section>
                </div>
                <div>
                    <section>
                        <strong>Niños <span>(2 - 12 años)</span></strong>
                    </section>
                    <section>
                        <small onClick={() => { handleLess('kids') }}>-</small>
                        <span>{kids}</span>
                        <small onClick={() => { handlePlus('kids') }}>+</small>
                    </section></div>
                <div>
                    <section>
                        <strong>Bebés <span>(-2)</span></strong>
                    </section>
                    <section>
                        <small onClick={() => { handleLess('babys') }}>-</small>
                        <span>{babys}</span>
                        <small onClick={() => { handlePlus('babys') }}>+</small>
                    </section>
                </div>
                <input readOnly value={`${initial <= 1 ? initial + ' Adulto' : initial + ' Adultos'} ${kids <= 1 ? kids + ' Niño' : kids + ' Niños'} ${babys <= 1 ? babys + ' Bebé' : babys + ' Bebes'}`} />
                <button className='passengers__button' onClick={confirm}>Confirmar</button>
            </div>


        </article>
    )
}

export default Passengers