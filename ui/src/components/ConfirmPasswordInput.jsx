import React from 'react'

const ConfirmPasswordInput = ({ password_confirmation, handleChange, errors }) => {
  return (
    <div className='pb-1'>
      <label htmlFor="" className='label-style'>Confirm Password</label>
      <input
        type="password"
        className={`input-style border ${errors.password_confirmation ? 'border-red-500' : ''}`}
        placeholder='Confirm password'
        value={password_confirmation}
        onChange={handleChange}
      />
    </div>
  )
}

export default ConfirmPasswordInput