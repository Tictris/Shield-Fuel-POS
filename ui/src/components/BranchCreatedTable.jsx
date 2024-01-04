import React from 'react'

const BranchCreatedTable = () => {
  return (
    <table className='min-w-full text-left text-sm font-light'>
      <thead className="border-b border-color1">
        <tr className='text-gray-500'>
          <th scope="col" className="px-6 py-4 text-md w-3/12">Name</th>
          <th scope="col" className="px-6 py-4 text-md w-3/12">Address</th>
          <th scope="col" className="px-6 py-4 text-md w-3/12">Employees</th>
          <th scope="col" className="px-6 py-4 text-md w-1/12">Status</th>
          <th scope="col" className="px-6 py-4 text-md w-1/12">Created</th>
          <th scope="col" className="px-6 py-4 text-md w-1/12">Actions</th>
        </tr>
      </thead>
    </table>
  )
}

export default BranchCreatedTable
