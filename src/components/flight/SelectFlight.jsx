import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Aside from './Aside'
import AsideSeats from './AsideSeats'
import HeaderFlight from './HeaderFlight'

const SelectFlight = () => {
  return (
    <article className='flight'>
      <div className='flight__left'>
        <HeaderFlight />
        <Outlet />  
      </div>
    <Aside />


    </article>
  )
}

export default SelectFlight