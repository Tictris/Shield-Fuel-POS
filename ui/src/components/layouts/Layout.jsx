import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { Navigate, Outlet } from 'react-router-dom'

const Layout = () => {

  return (
    
    <div className='flex  bg-gray-200'>
        <Sidebar/>
        <div className="grow">
        <div className='flex flex-col '>
            <Topbar/>
            <Outlet/>
        </div>
        </div>
    </div>
    // <div className="flex h-screen bg-gray-200">
    //         <div>
    //             <Sidebar/>
    //         </div>
    //         <div className="grow">
    //             <div className="flex flex-col">
    //                 <div>
    //                   <Topbar/>
    //                 </div>
    //                 <div>
    //                     <Outlet/>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
  )
}

export default Layout