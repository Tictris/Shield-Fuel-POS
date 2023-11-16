import React from 'react'

const SampleInput = (props) => {
  return (
    <div>
      <input type="text" className='border' placeholder='type here' value={props.name} />
    </div>
  )
}

export default SampleInput