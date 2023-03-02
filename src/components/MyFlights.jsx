import React from 'react'
import Table from 'react-bootstrap/Table';

const MyFlights = () => {
  return (
    <article className='calendar'>
        <h1>Mis Vuelos</h1>
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Origen</th>
                <th>Destino</th>
                <th>Pasajeros</th>
                <th>Fecha de salida</th>
                <th>Fecha de llegada</th>
                <th>Tiempo</th>
                <th>Costo</th>
            </tr>

            </thead>
            
            <tbody>
                <tr>
                    <td>Colombia</td>
                    <td>España</td>
                    <td>3</td>
                    <td>25-12-2023</td>
                    <td>26-12-2023</td>
                    <td>1 día</td>
                    <td>$ 5500000</td>

                </tr>
                <tr>
                    <td>Venezuela</td>
                    <td>Bolivia</td>
                    <td>1</td>
                    <td>25-12-2023</td>
                    <td>25-12-2023</td>
                    <td>2 horas</td>
                    <td>$ 570000</td>
                </tr>
                <tr>
                    <td>Uruguay</td>
                    <td>Perú</td>
                    <td>4</td>
                    <td>25-10-2023</td>
                    <td>26-10-2023</td>
                    <td>1 día</td>
                    <td>$ 2500000</td>

                </tr>
            </tbody>



        </Table>
    </article>
  )
}

export default MyFlights