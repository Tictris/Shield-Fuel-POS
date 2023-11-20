import React from 'react'

const LastnameInput = ({ lastname, handleChange, errors }) => {
  return (
    <div className='pb-1'>
      <label htmlFor="" className='label-style'>Last Name</label>
      <input
        type="text"
        className={`input-style border ${errors.lastname ? 'border-red-500' : ''}`}
        placeholder='Enter last name'
        name='lastname'
        value={lastname}
        onChange={handleChange}
      />
    </div>
  )
}

export default LastnameInput