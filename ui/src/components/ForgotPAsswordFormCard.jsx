import React from 'react'

const ForgotPAsswordFormCard = ({ children }) => {

  const currentPath = window.location.pathname

  return (
    <div className='w-96'>
      <div className="bg-color1 py-4 text-center text-white font-bold text-xl">
        <span><span>
          {
            currentPath === '/forgot-password' ? 'Forgot password' : 'Reset password'
          }
        </span></span>
      </div>
      <div className="flex flex-col py-4 px-5 space-y-2 border">
        <form>
          {children}
        </form>
      </div>
    </div>
  )
}

export default ForgotPAsswordFormCard