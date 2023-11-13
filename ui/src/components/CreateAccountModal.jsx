import React, { useState } from 'react'

import { IoMdClose } from 'react-icons/io'

const CreateAccountModal = ({ visible, onClose }) => {

  const handleClose = () => {
    onClose(close)
  }

  if(!visible) return null

  return (
    <div className='fixed inset-0 bg-black bg-opacity-60 flex justify-center items-baseline pt-20'>
      <div className="bg-white rounded-md w-[900px]">
        <div className='flex justify-between items-center p-4'>
          <h1 className='text-4xl'>THIS IS THE MODAL HEADER</h1>
          <IoMdClose onClick={handleClose}/>
        </div>
        <div className='p-4 border-y'>
          THIS IS THE MODAL  BODY
        </div>
        <div className='p-4'>
          THIS IS THE MODAL  FOOTER
        </div>
      </div>
    </div>
  )
}

export default CreateAccountModal