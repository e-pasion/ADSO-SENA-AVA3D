import React from 'react'

function NavbarAdmin() {
  return (
    <div>
        <div className="h-20  bg-transparent relative flex-1 flex items-center justify-between">
    <i id="menuOpen" className="fa-solid fa-bars fa-2xl  lg:hidden cursor-pointer mx-2"></i>
    <div className="flex items-center absolute right-0 mx-10 lg:mx-10">
        <div className="h-12 w-12 rounded-full overflow-hidden mx-2">
            <img className="h-full w-full object-cover" src="img/perfil.jpg"/>
    </div>
        <h2 className="text-lg font-medium text-gray-900">Yuri Rios</h2>
    </div>
</div>
    </div>
  )
}

export default NavbarAdmin