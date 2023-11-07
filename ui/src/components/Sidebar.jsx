import React from 'react' 

import logo from "../assets/img/logo.png"

const Sidebar = () => {
  return (
    <aside className='h-screen'>
      <div className='h-full'>
        <img src={logo} alt="Shield Fuel Logo" className='w-14' />
        <span className='font-Garmond text-3xl font-semibold text-color1'>Shield Fuel</span>
      </div>
    </aside>
  )
}

export default Sidebar  