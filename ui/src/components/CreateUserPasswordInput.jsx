import React from 'react'

const CreateUserPasswordInput = ({ password, handleChange, errors }) => {
  return (
    <div className='pb-1'>
      <label htmlFor="" className='label-style text-sm font-bold'>Password</label>
      <input
        type="password"
        className={`input-style border ${errors.password ? 'border-red-500' : ''}`}
        placeholder='Enter password'
        name='password'
        value={password}
        onChange={handleChange}
      />
    </div>
  )
}

export default CreateUserPasswordInput