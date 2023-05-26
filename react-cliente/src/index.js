import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Inicio from './components/cliente/Inicio';
import Calculadora from './components/cliente/Calculadora';
import Carrito from './components/cliente/Carrito';
import CrearCodigo from './components/admin/CrearCodigo';
import ListarCodigo from './components/admin/ListarCodigo';
import CrearColor from './components/admin/CrearColor';
import ListarColor from './components/admin/ListarColor';
import CrearEmpleado from './components/admin/CrearEmpleado';
import ListarEmpleado from './components/admin/ListarEmpleado';

const router = createBrowserRouter ([

  {path:"/calculadora",element:<Calculadora/>},
  {path:"/carrito",element:<Carrito/>},
  {path:"/admin/crear-codigo",element:<CrearCodigo/>},
  {path:"/admin/listar-codigo",element:<ListarCodigo/>},
  {path:"/admin/crear-color",element:<CrearColor/>},
  {path:"/admin/listar-color",element:<ListarColor/>},
  {path:"/admin/crear-empleado",element:<CrearEmpleado/>},
  {path:"/admin/listar-empleado",element:<ListarEmpleado/>},
  {path:"/",element:<Inicio/>,errorElement:<Inicio/>}

])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div class="w-screen h-screen overflow-hidden bg-gradient-to-l from-orange-500 to-amber-200 overflow-y-hidden overflow-x-hidden">
      <RouterProvider router={router}/>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
