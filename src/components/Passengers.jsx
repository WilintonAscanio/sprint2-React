import React, { useState } from 'react'

const Passengers = () => {

    const [initial, setInitial] = useState(1)

    const handlePlus = () => {
      setInitial(initial + 1)
    }
    const handleLess = () => {
        const newValue = initial > 0 ? initial - 1 : 0;
        setInitial(newValue);
      };
    return (
        <article className='modal'>
            <div>
                <section>
                    <strong>Adultos <span>(+13 años)</span></strong>
                </section>
                <section>
                    <small onClick={handleLess}>-</small>
                    <span>{initial}</span>
                    <small onClick={handlePlus}>+</small>
                </section>
            </div>
            <div></div>
            <div></div>
           
        </article>
    )
}

export default Passengers