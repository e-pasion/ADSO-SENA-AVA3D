import React from 'react'
import { Link } from 'react-router-dom'


function NavbarLateral() {
  return (
    <div>
        <div id="navbarLateral" className=" bg-white shadow-md  w-0 h-screen lg:w-60 overflow-hidden">
    <div className="flex flex-col justify-between h-full">
      <div className="flex-grow">
        <div className="px-4 py-6 h-20 text-center border-b">
          <h1 className="text-xl font-bold leading-none"><span className="text-yellow-700">AVA 3D</span> Dashboard</h1>
        </div>
        <div className="p-4">
          <ul className="space-y-1">
    
            <li>
              <Link to="/admin/crear-empleado" className="flex items-center bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"><i className="fa-solid fa-user fa-lg mx-2"></i>Empleados</Link>
            </li>
            <li>
                <Link to="/admin/crear-codigo" className="flex items-center bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"><i className="fa-solid fa-clipboard fa-lg mx-2"></i>Codigos</Link>
              </li>
              <li>
                <Link to="/admin/crear-color" className="flex items-center bg-white hover:bg-yellow-50 rounded-xl font-bold text-sm text-gray-900 py-3 px-4"><i className="fa-solid fa-palette fa-lg mx-2"></i>Colores</Link>
              </li>
           
          </ul>
          
        </div>
      </div>
      <div className="p-4">
        <Link type="button" to="/" className="inline-flex items-center justify-center h-9 px-4 rounded-xl bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition"><i className="fa-solid fa-power-off fa-xl text-white"></i></Link> 
        <span className="font-bold text-sm ml-2">Salir</span>
      </div>
    </div>
</div>


    </div>
  )
}

export default NavbarLateral