import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordLink = () => {
  return (
    <Link to='/forgot-password' className='italic text-sm flex justify-end hover:underline py-2'>Forgot password?</Link>
  )
}

export default ForgotPasswordLink