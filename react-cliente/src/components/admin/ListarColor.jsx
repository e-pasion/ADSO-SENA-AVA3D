import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import NavbarLateral from '../../layout/NavbarLateral'
import NavbarAdmin from '../../layout/NavbarAdmin'

function ListarColor() {

    const [backenData, setBackenData] = useState([{}])
  
    useEffect (()=>{
      fetch("http://localhost:4000/api/colores").then(
        response => response.json()
      ).then(
        data => setBackenData(data)
      )
    },[])
  return (
    <div>
        <div class="flex">
    <NavbarLateral></NavbarLateral>
    <div class="flex-grow">
        <NavbarAdmin></NavbarAdmin>
        <div class="px-4 py-6 h-20 text-center lg:mt-8">
        <h1 class="text-4xl font-bold text-gray-900">Colores</h1>
    </div>

    <div class="overflow-hidden mx-auto  w-3/4 px-4 sm:px-8">
        <div class="py-1">
            <div class="my-2 flex flex-row justify-between flex-wrap">
                <Link to="/admin/crear-color" class="my-1 text-black bg-yellow-100 hover:bg-yellow-200 w-24 text-sm h-10 rounded-lg font-medium py-2.5 text-center">Crear Color</Link>
            </div>
            </div>
            <div class="-mx-4 flex justify-center sm:-mx-8 px-4 sm:px-8 py-4 ">
                <div class="w-full  h-112 shadow rounded-lg ">
                    <div class="h-80 bg-white overflow-auto">
                    <table class="text-center w-full ">
                        <thead>
                            <tr >
                                <th class=" py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider"></th>
                                <th class=" py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Nombre</th>
                                <th class=" py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Codigo</th>
                                <th class=" py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Estado</th>
                                <th class=" py-3 border-b-2 border-gray-200 bg-gray-100 text-xs font-semibold text-gray-600 uppercase tracking-wider">Acciones</th>
                            </tr>
                        </thead>
                        {(typeof backenData === 'undefined') ?(
          <p>Loading...</p>
        ):(backenData.map((color, i)=>
        <tbody key={i}>
                            <tr class="h-14" >
                                <td class="px-5 border-b border-gray-200 bg-white text-sm">
                                    <input  type="checkbox" name="" id="" />
                                </td>
                                <td class="px-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-nowrap">{color.nombre}</p>
                                </td>
                                <td class="px-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-nowrap">{color.codigo}</p>
                                </td>
    
                            
                                <td class="px-5 border-b border-gray-200 bg-white text-sm">
                                    <p class="text-gray-900 whitespace-nowrap" >{color.estado ? 'activo':'inactivo'}</p>
                                
                                </td>
                                <td class="px-5 border-b border-gray-200 bg-white text-sm">
                                    <i  class="fa-solid fa-pencil fa-lg mx-2"></i>
                                </td>
                            </tr>
                            </tbody>

                           ))   }
                         
                    </table>
                </div>
                    
            </div>
        </div>
    
    </div>


</div>
</div>
    </div>
  )
}

export default ListarColor