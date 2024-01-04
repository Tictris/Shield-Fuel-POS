import React from 'react'

import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft  } from "react-icons/md"
import { Link } from 'react-router-dom'
import Card from '../components/Card'

const CreateBranch = () => {
  return (
    <>
      <div className='w-full mb-4 flex items-center space-x-5'>
            <Link to='/branches'>
                <MdOutlineKeyboardArrowLeft className='border border-color1 rounded-full' size={30}/>
            </Link>
            <h1 className='text-xl font-bold text-gray-500'>Create Branch</h1>
        </div>

        <div className="flex flex-col gap-y-5">
          <Card>
            <div className="grid grid-cols-2 gap-x-10 mb-5">
              <div className="flex items-center gap-3">
                <label htmlFor="" className='whitespace-nowrap text-sm font-semibold'>Branch Name</label>
                <input type="text" className='input-style' />
              </div>
              <div className="flex items-center gap-x-3">
                <label htmlFor="" className='whitespace-nowrap text-sm font-semibold'>Assigned Admin</label>
                <input type="text" className='input-style' />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-10">
              <div className="flex items-center gap-3">
                <label htmlFor="" className='whitespace-nowrap text-sm font-semibold'>Branch Name</label>
                <input type="text" className='input-style' />
              </div>
              <div className="flex items-center gap-x-3">
                <label htmlFor="" className='whitespace-nowrap text-sm font-semibold'>Assigned Admin</label>
                <input type="text" className='input-style' />
              </div>
            </div>
          </Card>

          <Card>
            <div className='pb-5'>
              <h1 className='font-bold text-gray-500'>Permission</h1>
            </div>
            <div className='grid grid-cols-4 gap-4 px-10'>
              <div className="col-span-1">
                <label htmlFor="" className='inline-flex items-center'>
                  <input type="checkbox" className='form-check text-color1' /><span className='whitespace-nowrap ml-2 text-sm text-gray-500'>Select All</span>
                </label>
              </div>
              <div className="col-span-3">
              <div className="grid grid-cols-3 gap-x-3">
                <div>
                  <label htmlFor="" className='inline-flex items-center'>
                    <input type="checkbox" className='form-check text-color1' /><span className='whitespace-nowrap ml-2 text-sm text-gray-500'>Select All</span>
                  </label>
                </div>
                <div>
                  <label htmlFor="" className='inline-flex items-center'>
                    <input type="checkbox" className='form-check text-color1' /><span className='whitespace-nowrap ml-2 text-sm text-gray-500'>Select All</span>
                  </label>
                </div>
                <div>
                  <label htmlFor="" className='inline-flex items-center'>
                    <input type="checkbox" className='form-check text-color1' /><span className='whitespace-nowrap ml-2 text-sm text-gray-500'>Select All</span>
                  </label>
                </div>
                <div>
                  <label htmlFor="" className='inline-flex items-center'>
                    <input type="checkbox" className='form-check text-color1' /><span className='whitespace-nowrap ml-2 text-sm text-gray-500'>Select All</span>
                  </label>
                </div>
                <div>
                  <label htmlFor="" className='inline-flex items-center'>
                    <input type="checkbox" className='form-check text-color1' /><span className='whitespace-nowrap ml-2 text-sm text-gray-500'>Select All</span>
                  </label>
                </div>
                <div>
                  <label htmlFor="" className='inline-flex items-center'>
                    <input type="checkbox" className='form-check text-color1' /><span className='whitespace-nowrap ml-2 text-sm text-gray-500'>Select All</span>
                  </label>
                </div>
              </div>
              </div>
            </div>
          </Card>

          <Card>
            <div className='pb-5'>
              <h1 className='font-bold text-gray-500'>Tank Fuel</h1>
            </div>
            <div className='grid grid-cols-5 gap-x-3'>
              <div className="col-span-1 flex flex-col gap-3 px-10 border-r-2 border-color1 py-5">
                <span className='text-xs text-center text-gray-500 font-semibold'>Fuel Type</span>
                <span className='text-center text-white rounded text-lg p-1 bg-[#ff0000]'>Premium</span>
                <span className="text-center text-white rounded text-lg p-1 bg-[#00ff00]">Unleaded</span>
                <span className="text-center text-white rounded text-lg p-1 bg-[#ffff00]">Diesel</span>
              </div>
            </div>

            <div className='py-10 flex justify-center'>
              <button className='bg-color1 w-96 text-white text-lg font-semibold p-2 rounded-lg'>Confirm</button>
            </div>
          </Card>
        </div>
    </>
  )
}

export default CreateBranch
