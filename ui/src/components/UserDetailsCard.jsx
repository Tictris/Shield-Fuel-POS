import React from 'react'

import { MdKeyboardArrowRight, MdOutlineKeyboardArrowLeft  } from "react-icons/md"

import UserDetailsImg from '../assets/img/user.png'
import { Link } from 'react-router-dom'

const UserDetailsCard = () => {
  return (
    <>
        <div className='w-full mb-4 flex items-center space-x-5'>
            <Link to='/users'>
                <MdOutlineKeyboardArrowLeft className='border border-color1 rounded-full' size={30}/>
            </Link>
            <h1 className='text-xl font-bold'>User Details</h1>
        </div>

        <div className='w-full rounded-md relative h-72 grid grid-cols-4 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px]'>
            <div className=' flex justify-center items-center'>
                <img src={UserDetailsImg} alt="" className='w-48' />
            </div>
            <div className=' flex flex-col space-y-10 py-7'>
                <div>
                    <label htmlFor="" className='text-sm text-gray-400'>First Name</label>
                    <h5 className='font-bold'>Venz Carna</h5>
                </div>
                <div>
                    <label htmlFor="" className='text-sm text-gray-400'>Last Name</label>
                    <h5 className='font-bold'>Venz Carna</h5>
                </div>
                <div>
                    <label htmlFor="" className='text-sm text-gray-400'>Birthdate</label>
                    <h5 className='font-bold'>Venz Carna</h5>
                </div>
            </div>
            <div className=' flex flex-col space-y-10 py-7'>
                <div>
                    <label htmlFor="" className='text-sm text-gray-400'>Address</label>
                    <h5 className='font-bold'>Venz Carna</h5>
                </div>
                <div>
                    <label htmlFor="" className='text-sm text-gray-400'>Email Addess</label>
                    <h5 className='font-bold'>Venz Carna</h5>
                </div>
                <div>
                    <label htmlFor="" className='text-sm text-gray-400'>Mobile Number</label>
                    <h5 className='font-bold'>Venz Carna</h5>
                </div>
            </div>
            <div className=' flex flex-col space-y-10 py-7'>
                <div>
                    <label htmlFor="" className='text-sm text-gray-400'>Account Status</label>
                    <h5 className='font-bold'>Venz Carna</h5>
                </div>
                <div>
                    <label htmlFor="" className='text-sm text-gray-400'>Position</label>
                    <h5 className='font-bold'>Venz Carna</h5>
                </div>
                <div>
                    <Link to='/users/user-details/subscription' className='flex justify-center items-center bg-color1 text-[#fff] font-semibold w-48 py-3 rounded-md hover:bg-dark-color1 '>
                        <span>Subscription</span>
                        <MdKeyboardArrowRight size={20} />
                    </Link>
                </div>
            </div>
        </div>
    </>
   
  )
}

export default UserDetailsCard
