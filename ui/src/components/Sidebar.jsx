import React, { useContext, useState } from 'react' 

// IMPORT PACKAGES
import { LayoutContext } from '../context/LayoutContext'

const Sidebar = () => {

  const { location, open, setOpen, menus, BiSolidDashboard, BiSolidBuildings, FaUsers, FaArrowLeft, logo, NavLink } = useContext(LayoutContext)

  return (
    <aside className={` ${open ? 'w-72' : 'w-20'} h-screen relative duration-200 p-4 pt-3 bg-color2`}>
      <FaArrowLeft size={20}  className={`absolute cursor-pointer rounded-full -right-3.5 top-6 w-7 h-7 border-2 bg-white p-1 ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)} />
      <div className='flex gap-x-4 items-center pb-4'>
        <img src={logo} alt="" width={40} className={`duration-500 ${open && 'rotate-[360deg]'}`} />
        <span className={`font-serif text-color1 origin-left text-xl duration-200 font-semibold whitespace-pre ${!open && 'scale-0'}`}>SHIELD FUEL</span>
      </div>
      <div className="pt-6">
        {
            menus.map((menu, i) => (
              <NavLink key={i} to={menu.link} className={`text-gray-600 mb-2 text-sm flex items-center gap-x-4 cursor-pointer p-2 font-medium rounded ${location.pathname === menu.link ? 'bg-color1 text-white hover:text-color2' : 'hover:text-color1'}`}>
                <div className="duration-200">
                  {
                    React.createElement(menu?.icon, { size: "25" })
                  }
                </div>
                <span className={`${!open && 'hidden'} origin-left duration-200`}>
                  {
                    menu.name
                  }
                </span>
              </NavLink>
            ))
          }
      </div>
    </aside>
  )
}

export default Sidebar 