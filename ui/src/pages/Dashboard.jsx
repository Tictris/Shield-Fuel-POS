import React from 'react'
import SuperAdminComSample from '../components/SuperAdminComSample'
import ManagerComSample from '../components/ManagerComSample'

const Dashboard = () => {
  const role = localStorage.getItem('role')
  return (
    <>
      { role === 'super admin' ? <SuperAdminComSample/> : <ManagerComSample/> }

    </>
  )
}

export default Dashboard``