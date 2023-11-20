import React, { useState } from 'react'


import { ImPlus } from 'react-icons/im'
import CreateAccountModal from './CreateAccountModal'

const CreateAccountButton = ({ fetchUsers }) => {
  
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex items-center gap-2 text-color1 py-3 px-10 rounded-lg hover:bg-color1 hover:text-white'>
        <ImPlus/>
        <span>Create Account</span>
      </button>

      <CreateAccountModal open={open} onClose={() => setOpen(false)} fetchUsers={fetchUsers}/>
    </>
  )
}

export default CreateAccountButton