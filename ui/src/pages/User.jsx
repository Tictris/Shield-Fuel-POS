import React from 'react'
import Card from '../components/Card'
import Table from '../components/Table'
import CreateAccountButton from '../components/CreateAccountButton'
import SearchInput from '../components/SearchInput'

const Users = () => {
  return (
    <>
    <div className="pb-4 flex justify-end gap-x-4">
      <SearchInput/>
      <CreateAccountButton/>
    </div>
      <Card>
        <Table/>
      </Card>
    </>
  )
}

export default Users