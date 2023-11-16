import React, { useState } from 'react'

import { IoMdClose } from 'react-icons/io'
import { FaUserPlus } from "react-icons/fa"
import SampleInput from './SampleInput'
import CreateUserEmailInput from './CreateUserEmailInput'
import CreateUserPasswordInput from './CreateUserPasswordInput'
import FirstnameInput from './FirstnameInput'
import LastnameInput from './LastnameInput'
import MobileInput from './MobileInput'
import ConfirmPasswordInput from './ConfirmPasswordInput'

const CreateAccountModal = ({ visible, onClose }) => {

  const handleClose = () => {
    onClose(close)
  }

  if(!visible) return null

  const [register, setRegister] = useState({
    firstName:              '',
    lastName:               '',
    email:                  '',
    mobile:                 '',
    password:               '',
    password_confirmation:  ''
  })

  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-baseline pt-20'>
      <div className="bg-white rounded-md w-[900px]">
        <div className='flex justify-between items-center p-4'>
          <h1 className='text-xl font-semibold text-[#3d4465]'>Create New User Account</h1>
          <IoMdClose className='hover:cursor-pointer hover:bg-color2 rounded-full p-2' size={30} onClick={handleClose}/>
        </div>
        <div className='py-4 px-8 border-y'>
          <form action="">
            <div className='grid grid-cols-2 gap-x-4'>
              <FirstnameInput/>
              <LastnameInput/>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <MobileInput/>
              <CreateUserEmailInput/>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <CreateUserPasswordInput/>
              <ConfirmPasswordInput/>
            </div>
            <div className='flex justify-center py-4'>
              <button className='bg-color1 w-96 p-2 rounded text-white flex justify-center items-center gap-x-2 hover:bg-dark-color1'>
                <FaUserPlus size={20} />
                <span className='font-semibold'>Create Account</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateAccountModal