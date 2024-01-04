import React from 'react'
import Card from '../components/Card'
import SearchInput from '../components/SearchInput'

const Transaction = () => {
  return (
    <>
    <div className="pb-4 flex justify-between items-center">
      <div>
        <h1 className='text-xl font-bold text-gray-500'>Transactions</h1>
      </div>
      <div>
        <SearchInput/>
      </div>
    </div>
      <Card>
        <table className='min-w-full text-left text-sm font-light'>
          <thead className="border-b border-color1">
            <tr className='text-gray-500'>
              <th scope="col" className="px-6 py-4 text-md w-3/12">Name</th>
              <th scope="col" className="px-6 py-4 text-md w-2/12">Admin/Owner</th>
              <th scope="col" className="px-6 py-4 text-md w-1/12">Status</th>
              <th scope="col" className="px-6 py-4 text-md w-3/12">Payment Method</th>
              <th scope="col" className="px-6 py-4 text-md w-1/12">Amount</th>
              <th scope="col" className="px-6 py-4 text-md w-1/12">Date</th>
              <th scope="col" className="px-6 py-4 text-md w-1/12">Actions</th>
            </tr>
          </thead>
        </table>
      </Card>
    </>
  )
}

export default Transaction
