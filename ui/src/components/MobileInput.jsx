import React from 'react'

const MobileInput = ({ mobile, handleChange, errors }) => {
  return (
    <div className="pb-1">
      <label htmlFor="" className='label-style'>Mobile</label>
      <input
        type="text"
        className={`input-style border ${errors.mobile ? 'border-red-500' : ''}`}
        placeholder='Enter mobile number'
        name='mobile'
        value={mobile}
        onChange={handleChange}
      />
    </div>
  )
}

export default MobileInput