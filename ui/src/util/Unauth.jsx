import React from 'react'

import { Navigate, Outlet } from "react-router-dom";

const Unauth = () => {

  const token = localStorage.getItem('token')

  return (
    token ? <Navigate to='/dashboard' /> : <Outlet/>
  )
}

export default Unauth