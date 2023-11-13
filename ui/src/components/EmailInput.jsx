import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'


const EmailInput = () => {

  const { email, setEmail, credentials, handleChange} = useContext(LoginContext)
  
  return (
    <div className='pb-1'>
      <label htmlFor="email" className='label-style'>Email</label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder='Enter email here'
        className='input-style'
        value={credentials.email}
        onChange={handleChange}
      />
    </div>
  )
}

export default EmailInput