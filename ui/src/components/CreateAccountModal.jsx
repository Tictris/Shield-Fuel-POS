import React, { Children, useState } from 'react'

import { IoMdClose } from 'react-icons/io'
import { FaUserPlus } from "react-icons/fa"
import SampleInput from './SampleInput'
import CreateUserEmailInput from './CreateUserEmailInput'
import CreateUserPasswordInput from './CreateUserPasswordInput'
import FirstnameInput from './FirstnameInput'
import LastnameInput from './LastnameInput'
import MobileInput from './MobileInput'
import ConfirmPasswordInput from './ConfirmPasswordInput'
import axiosInstance from '../api/axios'
import UsernameInput from './UsernameInput'

const CreateAccountModal = ({ open, onClose, fetchUsers }) => {

  const handleClose = () => {
    onClose(close)
  }

  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [email, setEmail] = useState('')
  const [username, setUsername] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [password_confirmation, setPassword_confirmation] = useState('')
  const [errors, setErrors] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()

    axiosInstance.post('sa/register', JSON.stringify({
      firstname, lastname, email, mobile, username, password, password_confirmation
    }))
    .then((response) => {
      console.log(response.data)
      setFirstname('')
      setLastname('')
      setUsername('')
      setEmail('')
      setMobile('')
      setPassword('')
      setPassword_confirmation('')
      fetchUsers()
      handleClose()
    }).catch((error) => {
      if(error.response && error.response.status === 422){
        setErrors(error.response.data.errors)
      }
    })
  }

  return (
    <div className={`fixed inset-0 flex justify-center items-baseline pt-40 transition-colors ${open ? 'visible bg-black bg-opacity-50' : 'invisible'}`}>
      <div className={`bg-white shadow w-[800px] transition-all rounded-xl duration-300 ${open ? 'scale-100 opacity-100' : 'scale-125 opacity-0'}`}>
        <div className='flex justify-between items-center p-4'>
          <h1 className='text-xl font-semibold text-[#3d4465]'>Create New Admin User Account</h1>
          <IoMdClose className='hover:cursor-pointer hover:bg-color2 rounded-full p-2' size={30} onClick={handleClose}/>
        </div>
        <div className='py-4 px-8 border-y'>
          <form onSubmit={handleSubmit}>
            <div className='grid grid-cols-2 gap-x-4'>
              <FirstnameInput errors={errors} firstname={firstname} handleChange={(e) => setFirstname(e.target.value)} close={onClose}/>
              <LastnameInput errors={errors} lastname={lastname} handleChange={(e) => setLastname(e.target.value)}/>
            </div>
            <div className="grid grid-cols-3 gap-x-4">
              <UsernameInput errors={errors} username={username} handleChange={(e) => setUsername(e.target.value)}/>
              <CreateUserEmailInput errors={errors} email={email} handleChange={(e) => setEmail(e.target.value)}/>
              <MobileInput errors={errors} mobile={mobile} handleChange={(e) => setMobile(e.target.value)}/>
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <CreateUserPasswordInput errors={errors} password={password} handleChange={(e) => setPassword(e.target.value)}/>
              <ConfirmPasswordInput errors={errors} password_confirmation={password_confirmation} handleChange={(e) => setPassword_confirmation(e.target.value)}/>
            </div>

            <div className='flex justify-center py-4'>
              <button type='submit' className='bg-color1 w-96 p-2 rounded text-white flex justify-center items-center gap-x-2 hover:bg-dark-color1'>
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