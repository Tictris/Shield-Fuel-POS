import React, { Children } from 'react'

const Form = ({ children }) => {
  return (
    <form>
      { children }
    </form>
  )
}

export default Form
