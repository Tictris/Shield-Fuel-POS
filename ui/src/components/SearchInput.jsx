import React from 'react'

import { FiSearch } from 'react-icons/fi'

const SearchInput = () => {
  return (
    <>
      <div className='relative text-color1'>
        <FiSearch size={20} className='absolute top-3 right-[2rem]'/>
      </div>
      <input type="text" className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-3 pl-4 pr-12 rounded-lg outline-none text-color1' placeholder='Search'/>
    </>
  )
}

export default SearchInput