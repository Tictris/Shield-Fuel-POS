import React from 'react'
import SuperAdminComSample from '../components/SuperAdminComSample'
import ManagerComSample from '../components/ManagerComSample'

const Dashboard = () => {
  const role = localStorage.getItem('role')
  return (

    role === 'super_admin' ? <SuperAdminComSample/> : <ManagerComSample name='jason'/>
  )
}

export default Dashboard