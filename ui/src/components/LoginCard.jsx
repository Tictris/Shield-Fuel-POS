import React from 'react'

const LoginCard = () => {
  return (
    <div className='w-96'>
      <div className="bg-color1 py-4 text-center text-white font-bold text-xl">
        <h1>Login to your account</h1>
      </div>
      <div className="flex flex-col py-4 px-5 space-y-2 border">
        <form onSubmit={handleSubmit}>
          {children}
        </form>
      </div>
    </div>
  )
}

export default LoginCard