import { React, Fragment,useEffect, useState } from 'react'
import Sidebar from '../layouts/Sidebar'
import { AiFillBell, AiOutlineDown } from 'react-icons/ai'
import { CiUser } from 'react-icons/ci'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useNavigate } from 'react-router-dom'
import axiosInstance from '../../api/axios'

function Topbar() {

  const nav = useNavigate()
  const [open, setOpen] = useState(false)
  const [user, setUser] = useState([])

  
  // const handleLogout = () => {
  //   axiosInstance.post('logout').then((response) => {
  //     localStorage.removeItem(['token'])
  //     nav('/login')
  //   }).catch(error => {
  //     console.log(error)
  //   })
  // }
  const handleLogout = (ev) => {
    ev.preventDefault()
      localStorage.clear(['token'])
      nav('/')

    console.log('Logout')
     
   
    
  }
  
  return (

    <header>
      {/* <Sidebar/> */}
      <div className='dark:bg-white shadow-lg border-gray-400 px-4 lg:px-6 py-2.5 md:pt-6'>
        <div className='flex justify-between items-center'>
          <h1 className='font-bold text-lg font-sans'>October 22, 2023</h1>

          <div className='flex flex-warp'> <a href="#"> <AiFillBell className="w-6 h-6 mx-2" />
          </a>
            <span>Admin</span>
            <Menu as="div" className="relative ml-3">
              <div>
                <Menu.Button className="inline-block w-8 h-8 rounded-full overflow-hidden bg-gray-100 hover
              focus:outline-none">
                  <span className='sr-only'>User Name</span>
                  <CiUser className='inline-block  bg-black/25 p-2 rounded-full w-8 h-8' />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Items>
                    <Menu.Item>
                      <a href="" className='block px-4 py-2 text-sm text-gray-700' onClick={handleLogout}>
                        Sign out
                      </a>
                    </Menu.Item>
                  </Menu.Items>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
      
    </header>


  )
}

export default Topbar

// import React, {Fragment} from 'react'
// import { AiFillBell, AiOutlineDown } from 'react-icons/ai'
// import { Disclosure, Menu, Transition } from '@headlessui/react'
// import { CiUser } from 'react-icons/ci'
// function Topbar() {
//   return (
//     <header>
//      <div className='dark:bg-white shadow-lg border-gray-400 px-6 py-2.5 md:pt-6'>
//             <div className='flex justify-between items-center'>
//                 <h1 className='font-bold text-lg font-sans'>Orctober 22,2023</h1>
//                 <div className='flex flex-warp'> <a href='#'><AiFillBell className='w-6 h-6 mx-2'/></a>
//                     <span>Admin</span>
//                     <Menu>
//                         <div>
//                             <Menu.Button className="inline-block w-8 h-8 rounded-full overflow-hidden bg-gray-100 hover focus:outline-none">
//                                 <span className='sr-only'>User Name</span>
//                                 <CiUser className='inline-block  bg-black/25 p-2 rounded-full w-8 h-8' />
//                             </Menu.Button>
//                         </div>
//                         <Transition
//                 as={Fragment}
//                 enter="transition ease-out duration-100"
//                 enterFrom="transform opacity-0 scale-95"
//                 enterTo="transform opacity-100 scale-100"
//                 leave="transition ease-in duration-75"
//                 leaveFrom="transform opacity-100 scale-100"
//                 leaveTo="transform opacity-0 scale-95"
//               >
//                  <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
//                   <Menu.Items>
//                     <Menu.Item>
//                       <a href="" className='block px-4 py-2 text-sm text-gray-700'>
//                         Sign out
//                       </a>
//                     </Menu.Item>
//                   </Menu.Items>
//                 </Menu.Items>
//                 </Transition>
//                     </Menu>
//                 </div>
//             </div>
//         </div>
//     </header>
//   )
// }

// export default Topbar
