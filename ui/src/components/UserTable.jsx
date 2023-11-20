import React from 'react'

import { RiEdit2Line } from 'react-icons/ri'

const UserTable = ({ users, loading }) => {
  return (
    <table className="min-w-full text-left text-sm font-light">
      <thead className="border-b border-color1">
        <tr>
          <th scope="col" className="px-6 py-4 text-md w-3/12">Last Name</th>
          <th scope="col" className="px-6 py-4 text-md w-3/12">First Name</th>
          <th scope="col" className="px-6 py-4 text-md w-3/12">Email</th>
          <th scope="col" className="px-6 py-4 text-md w-1/12">Position</th>
          <th scope="col" className="px-6 py-4 text-md w-1/12">Status</th>
          <th scope="col" className="px-6 py-4 text-md w-1/12">Actions</th>
        </tr>
      </thead>
      <tbody>
        {
          loading ? (
            <tr>
              <td className='py-5' colSpan={6}>
                <div className="flex justify-center">
                  <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-color1" />
                </div>
              </td>
            </tr>
          ) : (
            users?.map((user, i) => {
              return (
                <tr className="text-gray-600 font-medium" key={i}>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{user.lastname}</td>
                  <td className="whitespace-nowrap px-6 py-4">{user.firstname}</td>
                  <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                  <td className="whitespace-nowrap px-6 py-4">{user.roles.map((role) => role.name).join(', ')}</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <span className='border-2 border-color1 p-1 text-color1 rounded-lg'>Active</span>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">
                    <button className='bg-color1 px-2 py-1 rounded-lg text-white hover:bg-dark-color1'>
                      <RiEdit2Line size={20}/>
                    </button>
                  </td>
                </tr>
              )
            })
          )
        }
      </tbody>
    </table>
  )
}

export default UserTable