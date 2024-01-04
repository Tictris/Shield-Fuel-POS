import React from 'react'

const FirstnameInput = ({ firstname, handleChange, errors, close }) => {
  return (
    <div className='pb-1'>
      <label htmlFor="" className='label-style text-sm font-bold'>First Name</label>
      <input
        type="text"
        className={`input-style border ${errors.firstname ? 'border-red-500' : close ? 'border' : ''}`}
        placeholder='Enter first name'
        name='firstname'
        value={firstname}
        onChange={handleChange}
      />
    </div>
  )
}

export default FirstnameInput