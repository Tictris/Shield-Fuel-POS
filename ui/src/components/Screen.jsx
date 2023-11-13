import React, { Children } from 'react'


const Screen = ({ children }) => {
  return (
    <div className='h-screen w-full flex flex-col items-center pt-20'>
      {children}
    </div>
  )
}

export default Screen