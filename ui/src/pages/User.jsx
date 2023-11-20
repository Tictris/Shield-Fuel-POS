import React, { useState } from 'react'
import Card from '../components/Card'
import Table from '../components/Table'
import CreateAccountButton from '../components/CreateAccountButton'
import SearchInput from '../components/SearchInput'
import { useEffect } from 'react'
import axiosInstance from '../api/axios'
import UserTable from '../components/UserTable'

const Users = () => {

  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = () => {
    axiosInstance.get('sa/users')
    .then((res) => {
      setUsers(res.data.users)
      setLoading(false)
      console.log(res.data.users);
    })
  }

  return (
    <>
    <div className="pb-4 flex justify-end gap-x-4">
      <SearchInput/>
      <CreateAccountButton fetchUsers={fetchUsers}/>
    </div>
      <Card>
        <UserTable users={users} loading={loading}/>
      </Card>
    </>
  )
}

export default Users