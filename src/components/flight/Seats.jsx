import React, { useState } from 'react'
import Seat from './Seat';

const Seats = () => {
  const letras = ['A', 'B', 'C', 'D', 'E'];
  const numeros = [1, 2, 3, 4, 5];
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);

  const handleClickAsiento = (asiento) => {
    if (asientosSeleccionados.includes(asiento)) {
      setAsientosSeleccionados(asientosSeleccionados.filter(a => a !== asiento));
    } else {
      setAsientosSeleccionados([...asientosSeleccionados, asiento]);
    }
  }

  return (
    <div>
      {letras.map(letra => (
        <div key={letra} className='seat'>
          {numeros.map(numero => (
            <Seat
              key={letra + numero}
              letra={letra}
              numero={numero}
              seleccionado={asientosSeleccionados.includes(letra + numero)}
              onClick={handleClickAsiento}
            />
          ))}
        </div>
      ))}
    </div>
  );
}


export default Seats