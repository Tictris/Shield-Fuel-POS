import React from 'react'

const CreateUserEmailInput = ({ email, handleChange, errors }) => {
  return (
    <div className='pb-1'>
      <label htmlFor="" className='label-style text-sm font-bold'>Email</label>
      <input
        type="email"
        className={`input-style border ${errors.email ? 'border-red-500' : ''}`}
        placeholder='Enter email'
        name='email'
        value={email}
        onChange={handleChange} />
    </div>
  )
}

export default CreateUserEmailInput