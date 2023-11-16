import React from 'react'

 import { useAuth } from './context/AuthenticationContext'
import { useNavigate } from 'react-router-dom'

const Authenticated = (Layout) => {

  const nav = useNavigate()

  return (props) => {
    const { isLoggedIn} = useAuth()

    if(!isLoggedIn){
      return nav('/')
    }
  }

  return  <Layout {...props}/>
}

export default Authenticated