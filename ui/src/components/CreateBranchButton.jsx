import React from 'react'

import { ImPlus } from 'react-icons/im'
import { useNavigate } from 'react-router-dom'

const CreateBranchButton = () => {

  const nav = useNavigate()

  const handleGotoCreateBranch = () => {
    nav('/branches/create-branch')
  }
  return (
    <>
    
      <button onClick={handleGotoCreateBranch} className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex items-center gap-2 text-color1 py-3 px-10 rounded-lg hover:bg-color1 hover:text-white'>
        <ImPlus/>
        <span>Create Branch</span>
      </button>
    </>
  )
}

export default CreateBranchButton