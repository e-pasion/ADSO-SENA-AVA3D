import React from 'react'
import { Link } from 'react-router-dom'
import NavbarAdmin from '../../layout/NavbarAdmin'
import NavbarLateral from '../../layout/NavbarLateral'

function CrearCodigo() {
  return (
    <div>

<div class="flex">
  <NavbarLateral></NavbarLateral>
  <div class="flex-grow">
      <NavbarAdmin></NavbarAdmin>
      <div class="px-4 py-6 h-20 text-center lg:mt-8">
      <h1 class="text-4xl font-bold text-gray-900">Codigos</h1>
  </div>
  
<div class="flex items-center flex-col  lg:mx-10 lg:mt-14">
  <div class="w-full max-w-xs md:max-w-md ">
    <form id="formColor"  class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-6">
        <label for="codigoName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre codigo</label>
        <input type="text" id="codigoName" class="h-10 bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " formControlName="clave" placeholder="qasdasdaw" required/>
      </div>
      <div class="mb-6">
        <label for="codigoName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha Inicio</label>
        <input type="date" id="codigoName" class="h-10 bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" formControlName="fechaInicio" required/>
      </div>
      <div class="mb-6">
        <label for="codigoName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Fecha Final</label>
        <input type="date" id="codigoName" class="h-10 bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" formControlName="fechaFinal" required/>
      </div>
      
      <div class="mb-6">
        <label for="codigoName" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Descuento</label>
        <input type="number" id="codigoName" class="h-10 bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" formControlName="descuento" placeholder="0.25" required/>
      </div>
          
      <div class="flex justify-evenly">
          <button id="submitColor" type="submit" class="text-black bg-green-100 hover:bg-green-200 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-4/12 py-2.5 text-center  disabled:bg-gray-400 disabled:cursor-not-allowed disabled:pointer-events-none">Crear Codigo</button>
          <Link to="/admin/listar-codigo" class="text-black bg-yellow-100 hover:bg-yellow-200 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm w-4/12  py-2.5 text-center">Ver Codigos</Link>
      </div>
      
    </form>
    <p class="text-center text-gray-500 text-xs">
    </p>
  </div>
 

</div>

</div>
</div>
    </div>
  )
}

export default CrearCodigo