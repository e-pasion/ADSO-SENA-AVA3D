import React,{useEffect, useState} from 'react'
import Navbar from '../../layout/Navbar'

function Carrito() {

    const [backenData, setBackenData] = useState([{}])
    const total=0;
  
    useEffect (()=>{
      fetch("http://localhost:4000/api/productos").then(
        response => response.json()
      ).then(
        data => setBackenData(data)
      )
    },[])
  return (
    <div className="flex-grow">
    <Navbar></Navbar>
    <div className="h-screen bg-transparent pt-20">
      <h1 className="mb-10 text-center text-2xl font-bold">Carrito</h1>
      <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
        <div className="rounded-lg md:w-2/3">
        {(typeof backenData === 'undefined') ?(
          <p>Loading...</p>
        ):(backenData.map((producto, )=>
        <div  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">Producto</h2>
            <p className="mt-1 text-xs text-gray-700">{producto.relleno}</p>
            <p className="mt-1 text-xs text-gray-700">{producto.tamano}</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100"></div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">{producto.volumen * 10000}</p>
            </div>
          </div>
        </div>
      </div>
  
      ))}
        
        </div>
        <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">{total}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Envio</p>
            <p className="text-gray-700">{20000}</p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">{total + 20000}</p>
            </div>
          </div>
          <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
            Check out
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Carrito