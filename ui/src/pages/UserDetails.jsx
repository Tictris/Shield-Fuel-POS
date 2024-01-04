import React from 'react'
import UserDetailsCard from '../components/UserDetailsCard'
import Card from '../components/Card'
import BranchCreatedTable from '../components/BranchCreatedTable'

const UserDetails = () => {
  return (
    <>
      <UserDetailsCard/>
      <br />
      <br />
      <Card>
        <BranchCreatedTable/>
      </Card>
    </>
  )
}

export default UserDetails
