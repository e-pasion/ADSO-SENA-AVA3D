import React from 'react'
import Navbar from '../../layout/Navbar'

function Calculadora() {
  return (
    <div>
<Navbar></Navbar>
<div className="flex-grow">
      <div className="px-4 py-6 h-20 text-center lg:mt-8"></div>
      <div className="flex w-full items-center justify-center flex-col lg:flex-row lg:mx-10 lg:mt-14">
        <div className="bg-purple-100 flex flex-col justify-center items-center h-72 w-80 lg:h-96 p-4">
          <div className="h-64 w-72"></div>
        </div>
        <div className="w-80 lg:h-96 bg-white p-4">
          <form>
            <br />
            <h5>2. Color</h5>
            <label htmlFor="sc" className="sr-only">
              Underline select
            </label>
            <select id="sc" className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
              <option value="">Seleccionar color</option>
              {/* Mapea los colores */}
            </select>
            <br />
            <label htmlFor="rellenoRange" className="block mb-2">
              3. Relleno
            </label>
            <div className="flex justify-center">
              <input
                id="rellenoRange"
                type="range"
                min="10"
                max="100"
                value="50"
                step="10"
                className="mt-2 mx-2 w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
              />
              <h4 id="nr">50%</h4>
            </div>
            <br />
            <h5>4. Tamaño</h5>
            <div className="flex justify-center">
              <input
                id="sizeRange"
                type="range"
                min="0.5"
                max="1.5"
                value="1"
                step="0.05"
                className="mt-2 mx-2 w-full h-2 bg-yellow-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700 border-black"
              />
              <h4 className="w-10" id="sr">
                100%
              </h4>
            </div>
            <br />
            <h5>Precio:</h5>
            <h5 id="price">80000</h5>
            <button
              id="xd"
              type="submit"
              className="text-black bg-yellow-300 hover:bg-yellow-400 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue"
            >
              Comprar
            </button>
          </form>
        </div>
      </div>
    </div>


    </div>
    
  )
}

export default Calculadora