import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

const LoginButton = () => {
  return (
    <button type='submit' className='bg-color1 w-full py-2 rounded text-white hover:bg-[#c78c1f]'>Login</button>
  )
}

export default LoginButton