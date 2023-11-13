import React, { Children } from 'react'

export default function PageComponents({title, buttons = "", children}) {
  return (
    <div className>
            <div className='flex justify-between items-center max-w-7xl py-6 sm:px-6 lg:px-8'>
                <h1 className='text-3xl font-bold tracking-tight text-gray-500'>{title}</h1>
            </div>
        
        <main>
            <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
            {children}
            </div>
        </main>
    </div>
  )
}
