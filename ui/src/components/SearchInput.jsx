import React from 'react'

import { FiSearch } from 'react-icons/fi'

const SearchInput = () => {
  return (
    <div>
      <div className='relative'>
        <FiSearch size={20} className='absolute top-3 left-4 text-color1'/>
      </div>
      <input type="text" className='shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] py-3 pl-12 pr-4 rounded-lg outline-none' placeholder='Search'/>
    </div>
  )
}

export default SearchInput