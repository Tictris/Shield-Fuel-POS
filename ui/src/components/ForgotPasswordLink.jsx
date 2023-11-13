import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordLink = () => {
  return (
    <Link to='/forgot-password' className='italic text-xs flex justify-end hover:underline'>Forgot password?</Link>
  )
}

export default ForgotPasswordLink