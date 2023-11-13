import React from 'react'
import PageComponents from '../../layouts/PageComponents'
import {AiOutlineEdit, AiOutlineSearch, AiOutlinePlus} from 'react-icons/ai'

function Users() {
  return (
    <PageComponents title="User List">
      <div className='flex justify-end'>
        <form action="" className='flex flex-row'>
          <div className='relative'>
            <input type="text" className="flex h-8 border rounded-md shadow-md" placeholder="Search name..."/>
            <button type="submit" className="absolute right-2.5 bottom-2.5 text-sm font-medium hover:text-black rounded-lg"><AiOutlineSearch/></button>
          </div>     
        </form>
        <div className='flex ml-2'>
        <button className='flex border bg-white rounded-lg text-amber-500 hover:bg-amber-500 hover:text-white shadow-md'><span className='flex mt-2 ml-2'> <AiOutlinePlus/> </span> <span className='flex mt-1 items-center px-2'>Create Account</span> </button>
        </div>
      </div>
      <div className='relative overflow-x-auto shadow-md sm:rounded-lg mt-4'>
        <table className='w-full text-sm text-left text-black dark:text-black table-auto bg-white'>
          <thead className='text-xs text-black uppercase dark:text-black border-b-2 border-amber-500'>
            <tr>
              <th className="px-4 py-3"> 
                Last Name
              </th>
              <th className="px-4 py-3"> 
                First name
              </th>
              <th className="px-4 py-3"> 
                Email
              </th>
              <th className="px-4 py-3"> 
                Position
              </th>
              <th className="px-4 py-3"> 
                Status
              </th>
              <th className="px-4 py-3"> 
                Action</th>
            </tr>
          </thead>
          <tbody className="bg-white ">
            <tr>
              <td className="px-4 py-3">
                Dahang
              </td>
              <td className="px-4 py-3">
                Jason
              </td>
              <td className="px-4 py-3">
                Admin@admin.com
              </td>
              <td className="px-4 py-3">
                Admin
              </td>
              <td className="px-4 py-3">
                <span className='text-green-500 border p-0.5 rounded-md'>Active</span>
              </td>
              <td className="px-4 py-3">
                <a href=""><AiOutlineEdit/></a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </PageComponents>
  )
}

export default Users

