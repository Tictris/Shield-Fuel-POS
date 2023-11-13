import React from 'react'

import user from '../assets/icon/user.png'

import { BiSolidDownArrow } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'

const Topbar = () => {
  return (
    <header className='border-b py-4 px-6 flex justify-between text-gray-600'>
      <div className='flex items-center'>
        <h1 className='text-xl font-semibold'>Page Title Here</h1>
      </div>
      <div className='flex gap-x-3'>
        <FaUserCircle size={40}/>
        <div className='flex flex-col'>
          <span className='font-semibold'>Jason Dahang</span>
          <span className='text-sm'>Super Admin</span>
        </div>
        <div className='mt-2'>
          <BiSolidDownArrow className='cursor-pointer'/>
        </div>
      </div>
    </header>
  )
}

export default Topbar