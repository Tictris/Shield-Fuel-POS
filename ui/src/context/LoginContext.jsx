import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axiosInstance from "../api/axios";
import axios from "axios";

export const LoginContext = createContext()

const LoginContextProvider = ({ children }) => {
 
  const nav = useNavigate()

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const [errors, setErrors] = useState([])

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })

    setErrors({
      ...errors,
      [e.target.name]: ''
    });
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await axiosInstance.post('login', credentials)
      console.log(response.data)

      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('role', response.data.user.roles[0].name)

      nav('/dashboard')

    } catch(error){
      if(error.response && error.response.status === 422){
        setErrors(error.response.data.errors)
      } else {
        console.error('Login Error', error)
      }
    }
  }
  
  return (
    <LoginContext.Provider
      value={{
        handleSubmit,
        credentials,
        setCredentials,
        setErrors,
        handleChange,
        errors
      }}>
      { children }
    </LoginContext.Provider>
  )
}

export default LoginContextProvider