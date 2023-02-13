import React from 'react'
import car from '../assets/car.png'
import vys from '../assets/vys.png'
import team from '../assets/grupo.png'
import bed from '../assets/dormir.png'
import charge from '../assets/bateria.png'

const Services = () => {

  const services = [
    {
      id: 1,
      icon : car,
      title: 'Transporte',
      description : 'Renta un auto o reserva un shuttle.'
    },
    {
      id: 2,
      icon : vys,
      title: 'Vuelos + Hoteles',
      description : 'Encuentra las mejores ofertas para tu viaje.'
    },
    {
      id: 3,
      icon : team,
      title: 'Grupos',
      description : 'Obtén una cotización para grupos de más de 9 personas.'
    },
    {
      id: 4,
      icon : bed,
      title: 'Hoteles',
      description : 'Reserva cualquier habitación en cualquier parte del mundo.'
    },
    {
      id: 5,
      icon : charge,
      title: 'Carga',
      description : 'Contamos con servicio de carga y mensajería.'
    },
  ]
  return (
    <>
    <article className='services'>
      <h2>Servicios disponibles</h2>
      <section className='services__cards'>
        {services.map((service, index) => (
          <div key={index}>
            <figure>
              <img src={service.icon} alt={service.title} />
            </figure>
            <small>{service.title}</small>
            <p>{service.description}</p>
          </div>

        ))}
        
      </section>
    </article>
    </>
  )
}

export default Services