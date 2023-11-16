import React from 'react'

const Card = ({ children }) => {
  return (
    <div className="shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] w-full py-4 px-6 rounded-md">
      { children }
    </div>
  )
}

export default Card