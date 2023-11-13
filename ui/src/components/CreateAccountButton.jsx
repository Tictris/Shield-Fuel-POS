import React, { useState } from 'react'


import { ImPlus } from 'react-icons/im'
import CreateAccountModal from './CreateAccountModal'

const CreateAccountButton = () => {
  
  const [openCreateAccountModal, setOpenCreateAccountModal] = useState(false)

  const close = () => setOpenCreateAccountModal(false)
  
  return (
    <>
      <button onClick={() => setOpenCreateAccountModal(true)} className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex items-center gap-2 text-color1 py-3 px-10 rounded-lg hover:bg-color1 hover:text-white'>
        <ImPlus/>
        <span>Create Account</span>
      </button>

      <CreateAccountModal onClose={close} visible={openCreateAccountModal}/>
    </>
  )
}

export default CreateAccountButton