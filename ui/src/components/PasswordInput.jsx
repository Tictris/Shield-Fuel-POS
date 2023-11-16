import React, { useContext } from 'react'
import { LoginContext } from '../context/LoginContext'

const PasswordInput = () => {

  const { password, setPassword, credentials, handleChange, errors} = useContext(LoginContext)

  return (
    <div className='pb-1'>
      <label htmlFor="password" className='label-style'>Password</label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder='Enter password here'
        className={`input-style border ${ errors.password ? 'border-red-500' : '' }`}
        value={credentials.password}
        onChange={handleChange}
      />
    </div>
  )
}

export default PasswordInput