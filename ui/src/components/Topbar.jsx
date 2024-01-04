import React, { useContext } from 'react'

import { LayoutContext } from '../context/LayoutContext'

const Topbar = () => {

  const {FaUserCircle, BiSolidDownArrow, FaBell , user, drop, setDrop, FaUserAlt, FaCogs, FaSignOutAlt, Link, handleLogout, role } = useContext(LayoutContext)

  return (
    <header className='border-b py-4 px-6 flex justify-between text-gray-600'>
      <div className='flex items-center'>
      </div>
      <div className='flex gap-x-3 items-center relative'>
        <FaBell size={20} />
        <FaUserCircle size={40}/>
        <div className='flex flex-col'>
          {/* <span className='font-semibold'>{user.firstname} {user.lastname}</span> */}
          <span className='font-semibold text-right'>{user}</span>
          <span className='text-sm text-right'>{role}</span>
        </div>
        <div className=''>
          <BiSolidDownArrow className='cursor-pointer' onClick={() => setDrop(!drop)}/>
        </div>
        <div className={`absolute w-40 top-16 -right-4 border bg-white ${drop ? 'opacity-100 visible translate-y-0 ease-in' : ' opacity-0 hidden translate-y-6 ease-in'}`}>
          <ul className='py-4'>
            <li className='pb-1'>
              <Link className='flex items-center hover:bg-color2 px-4 text-lg gap-x-3'>
                <span><FaUserAlt/></span>
                <span>Profile</span>
              </Link>
            </li>

            <li className='pb-1'>
              <Link className='flex items-center hover:bg-color2 px-4 text-lg gap-x-3'>
                <span><FaCogs/></span>
                <span>Setting</span>
              </Link>
            </li>

            <li className='pb-1'>
              <Link className='flex items-center hover:bg-color2 px-4 text-lg gap-x-3' onClick={handleLogout}>
                <span><FaSignOutAlt/></span>
                <span>Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Topbar