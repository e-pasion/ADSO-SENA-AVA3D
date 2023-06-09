import React from 'react'
import { Link } from 'react-router-dom'
import NavbarAdmin from '../../layout/NavbarAdmin'
import NavbarLateral from '../../layout/NavbarLateral'

function CrearColor() {
  return (
    <div className="flex">
    <NavbarLateral />
    <div className="flex-grow">
      <NavbarAdmin />
      <div className="px-4 py-6 h-20 text-center lg:mt-8">
        <h1 className="text-4xl font-bold text-gray-900">Colores</h1>
      </div>
      <div className="flex items-center flex-col lg:flex-row lg:mx-10 lg:mt-14">
        <div className="mx-2 bg-white flex items-center flex-col h-72 w-80 md:w-4/5 lg:mx-0 lg:h-96">
          <form action="" id="formColor" className="px-5 py-5 flex justify-center flex-col h-full w-4/5">
            <div className="mb-6">
              <label htmlFor="colorName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre color</label>
              <input type="text" id="colorName" className="h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" formControlName="nombre" placeholder="Verde Pastel" required/>
            </div>
            <div className="mb-6">
              <label htmlFor="colorCode" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Codigo Color</label>
              <div className="flex border border-gray-300 rounded-lg h-10 relative overflow-hidden">
                <input   type="color" className="h-14 -top-2 -left-1 absolute appearance-none border-0" />
                <input  type="text" formControlName="codigo" id="colorCode"  className="bg-gray-50 ml-10 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" maxlength="7"/>
              </div>
              </div>
  
              <div class="flex justify-evenly">
                  <button id="submitColor" type="submit" class="text-black bg-green-100 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-4/12 py-2.5 text-center  disabled:bg-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none">Crear Color</button>
                  <Link to="/admin/listar-color" class="text-black bg-yellow-100 hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-4/12  py-2.5 text-center">Ver Colores</Link>
              </div>
          </form>               
      </div> 
      <div  class="bg-purple-100 flex flex-col justify-center items-center h-72 w-80 md:w-4/5 lg:h-96">
          <div  class="h-full w-full cursor-crosshair	">
          </div>
      </div>
    </div>
  
  </div>
  </div>
  )
}

export default CrearColor