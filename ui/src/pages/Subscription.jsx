import React from 'react'

import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft  } from "react-icons/md"

import { Link } from 'react-router-dom'
import Card from '../components/Card'

const Subscription = () => {
  return (
    <>
      <div className='w-full mb-4 flex items-center space-x-5'>
        <Link to='/users/user-details'>
          <MdOutlineKeyboardArrowLeft className='border border-color1 rounded-full' size={30}/>
        </Link>
        <h1 className='text-xl font-bold'>Subscription</h1>
      </div>

      <Card>
        <table className='min-w-full text-left text-sm font-light'>
          <thead className="border-b border-color1">
            <tr className='text-gray-500'>
              <th scope="col" className="px-6 py-4 text-md w-3/12">Name</th>
              <th scope="col" className="px-6 py-4 text-md w-3/12">Address</th>
              <th scope="col" className="px-6 py-4 text-md w-3/12">License Code</th>
              <th scope="col" className="px-6 py-4 text-md w-1/12">Status</th>
              <th scope="col" className="px-6 py-4 text-md w-2/12">Annual Renewal</th>
            </tr>
          </thead>
        </table>
      </Card>

      <div className='w-full mb-4 flex items-center space-x-5 mt-7'>
        <h1 className='text-xl font-bold'>Recent Transaction</h1>
      </div>

      <Card>
        <table className='min-w-full text-left text-sm font-light'>
          <thead className="border-b border-color1">
            <tr className='text-gray-500'>
              <th scope="col" className="px-6 py-4 text-md w-3/12">Date</th>
              <th scope="col" className="px-6 py-4 text-md w-3/12">Branch Name</th>
              <th scope="col" className="px-6 py-4 text-md w-3/12">Transaction Type</th>
              <th scope="col" className="px-6 py-4 text-md w-1/12">Status</th>
              <th scope="col" className="px-6 py-4 text-md w-1/12">Amount</th>
              <th scope="col" className="px-6 py-4 text-md w-1/12">Action</th>
            </tr>
          </thead>
        </table>
      </Card>
    </>
  )
}

export default Subscription
