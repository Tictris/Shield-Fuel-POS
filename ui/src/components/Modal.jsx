import React from 'react'

import { IoMdClose } from 'react-icons/io'
import { useLocation } from 'react-router-dom';

const Modal = ({ children, isOpen, onClose }) => {

  return (
    <div className={`fixed inset-0 flex justify-center items-baseline pt-40 transition-colors ${isOpen ? 'visible bg-black bg-opacity-50' : 'invisible'}`}>
      <div className={`bg-white shadow w-[800px] transition-all rounded-xl duration-300 ${isOpen ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
        <div className='flex justify-center items-center p-4 bg-color1 rounded-t-lg'>
          <h1 className='text-xl font-semibold text-color2'>Create new Branch</h1>
          {/* <IoMdClose className='absolute right-3 hover:cursor-pointer hover:bg-dark-color1 rounded-full p-1 text-color2' size={30} onClick={handleClose}/> */}
          <button onClose={onClose}>close</button>
        </div>
        <div className='py-4 px-8 border-y'>
          { children }
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Modal