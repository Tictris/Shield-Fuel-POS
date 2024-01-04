import React from 'react'

const UsernameInput = ({ username, handleChange, errors }) => {
  return (
    <div className='pb-1'>
      <label htmlFor="" className='label-style text-sm font-bold'>Username</label>
      <input
        type="text"
        className={`input-style border ${errors.username ? 'border-red-500' : ''}`}
        placeholder='Enter first name'
        name='username'
        value={username}
        onChange={handleChange}
      />
    </div>
  )
}

export default UsernameInput