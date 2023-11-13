import React, { useState } from 'react' 

// IMPORT FILES
import logo from "../assets/img/logo.png"
import arrow from '../assets/icon/arrow.png'
import dashboard from '../assets/icon/dashboard.png'
import users from '../assets/icon/users.png'
import branch from '../assets/icon/branch.png'

// IMPORT PACKAGES
import { BiSolidDashboard, BiSolidBuildings } from 'react-icons/bi'
import { FaUsers, FaArrowLeft } from 'react-icons/fa'
import { NavLink, useLocation } from 'react-router-dom'

const Sidebar = () => {

  const location = useLocation()

  const [open, setOpen] = useState(true)


  const menus = [
    { name: 'Dashboard',  link: '/dashboard',   icon: BiSolidDashboard },
    { name: 'Users',      link: '/users',       icon: FaUsers },
    { name: 'Branch',     link: '/branches',    icon: BiSolidBuildings }
  ]
  
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
              <NavLink key={i} to={menu.link} className={`text-gray-600 text-sm flex items-center gap-x-4 cursor-pointer p-2 font-medium hover:bg-color1 hover:text-color2 rounded ${location.pathname === menu.link ? 'bg-color1 text-white' : ''}`}>
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