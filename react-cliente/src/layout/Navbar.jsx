import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav className="">
    <ul className="flex justify-end font-extrabold items-center text-white p-5 ">
        <li className="mx-1"><Link to="/">Inicio</Link></li>
        <li className="mx-1"><Link to="/calculadora">Calculadora</Link></li>
        <li className="mx-1"><Link to="/admin/crear-color">Admin</Link></li>
        <li className="mx-2  text-2xl"><Link to="/carrito"><i className="fa-solid fa-cart-shopping"></i></Link></li>
    </ul>
    </nav>
  )
}

export default Navbar