import React, { useContext } from 'react'

import LoginLabel from './LoginLabel'
import LoginCardHeader from './LoginCardHeader'
import ForgotPasswordCardHeader from './ForgotPasswordCardHeader'
import { LoginContext } from '../context/LoginContext'



const FormCard = ({ children }) => {

  const { handleSubmit } = useContext(LoginContext)

  const currentPath = window.location.pathname
  return (
    <div>
      <div className="bg-color1 py-4 text-center text-white font-bold text-xl">
        <span className=''>
          {
            currentPath === '/' ? <LoginCardHeader/> : <ForgotPasswordCardHeader/>
          }
        </span>
      </div>
      <div className="flex flex-col py-4 px-5 space-y-2 border">
        <form onSubmit={handleSubmit}>
          {children}
        </form>
      </div>
    </div>
  )
}

export default FormCard