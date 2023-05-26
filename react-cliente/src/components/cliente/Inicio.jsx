import React from 'react';
import { Link } from 'react-router-dom'
import Navbar from '../../layout/Navbar';
import Barco from '../../assets/barco2.png'
import nd from '../../assets/nuve delantera.png'
import ni from '../../assets/nuve izquierda.png'
import nt from '../../assets/nuve trasera.png'



const Inicio = () => {
  return (
    <div>
      <Navbar></Navbar>
    <main className="overflow-hidden relative h-screen w-screen">
      <div className="encabezado">
        <div className="bienvenida w-5/5 flex flex-col items-center md:items-start md:mx-40">
          <h1 className="text-8xl font-extrabold text-center text-amber-700">
            AVA 3D
          </h1>
          <p className="my-5 w-60 font-medium text-white text-2xl">
            Haz realidad tus ideas con nosotros y dale vida a tu creatividad
          </p>
          <Link
            className="my-2 text-xl bg-white p-3 rounded-2xl font-bold text-amber-700"
            to={"/calculadora"}
          >
            ¡Empieza a crear!
          </Link>
        </div>
        <div className="imagen">
          <img
            src={nt}
            alt=""
            className="w-80 -right-16 absolute sm:w-2/4 md:top-72 md:right-10 lg:w-2/5 lg:right-44 xl:right-64 xl:top-52 xl:w-2/5"
          />
          <img
            src={Barco}
            alt=""
            className="w-0 sm:w-44 sm:absolute sm:right-4 sm:z-[0] sm:top-60 md:right-16 md:top-24 md:w-80 lg:right-52 xl:w-96 xl:top-20 xl:right-90"
          />
          <img
            src={nd}
            alt=""
            className="absolute -bottom-96 md:w-2/4 md:-right-20 md:top-78 md:bottom-32 lg:w-2/5 lg:right-10 xl:top-96 xl:right-18 xl:w-2/5"
          />
        </div>
      </div>
      <img
        src={ni}
        className="absolute -bottom-16 -left-48"
        alt=""
      />
    </main>
    </div>
  );
};

export default Inicio;
