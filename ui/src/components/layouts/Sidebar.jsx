// import React from 'react'
// import logo from '../../assets/img/Logo2.png'
// import { MdOutlineDashboard } from 'react-icons/md'
// import { HiOutlineUsers } from 'react-icons/hi'
// import { BiBuildingHouse } from 'react-icons/bi'
// import { NavLink, Outlet, Link } from 'react-router-dom'

// const navigation = [
//   { icon: <MdOutlineDashboard />, name: 'Dashboard', to:"/" },
//   { icon: <HiOutlineUsers />, name: 'Users', to:'/users' },
//   { icon: <BiBuildingHouse />, name: 'Branch', to:'/branch' },
// ]


// function Sidebar() {
//   return (
//     <aside id='default-sidebar' className='border shadow-lg z-40 h-screen bg-white transition-transform translate-x-full sm:translate-x-0' aria-label='Sidebar'>
//       <div className='flex justify-center pt-2'>
//         <a href="#"><img src={logo} alt="" height={60} width={60} /></a>
//       </div>
//       <div className='flex justify-center'>
//         <h1 className='text-amber-500 font-serif uppercase font-bold text-xl my-2'>shield fuel pos</h1>
//       </div>
//       <div className='flex space-y-2 font-medium'>
//         <ul className='space-y-2 font-medium'>

//           {navigation.map((item) => (
//             <li>
//               <NavLink
//                 key={item.name}
//                 to={item.to}
//                 className='flex items-center p-2 w-48 mx-6 text-gray-900 rounded-lg dark:text-black bg-white hover:bg-amber-500 group'
//               >
//                 {item.icon} {item.name}
//               </NavLink>
//             </li>
//           ))}

//         </ul>
//       </div>

//     </aside>
//   )
// }

// export default Sidebar

import React from 'react'
import logo from '../../assets/img/Logo2.png'
import { MdOutlineDashboard } from 'react-icons/md'
import { HiOutlineUsers } from 'react-icons/hi'
import { BiBuildingHouse } from 'react-icons/bi'
import { NavLink, Outlet, Link } from 'react-router-dom'

const navigation = [
  {id:0, icon: <MdOutlineDashboard />, name: 'Dashboard', to:"/dashboard" },
  {id:1, icon: <HiOutlineUsers />, name: 'Users', to:'/users' },
  {id:2, icon: <BiBuildingHouse />, name: 'Branch', to:'/branch' },
]


function Sidebar() {
    const nav = navigation.map( item => 
        <li className='flex items-center p-2 w-48 mx-6 text-gray-900 rounded-lg dark:text-black bg-white hover:bg-amber-500 group' key={item.id} to={item.to}>
            {item.icon} {item.name}
        </li>
        )
  return (
    <aside id='default-sidebar' className='border shadow-lg z-40 h-screen bg-white transition-transform translate-x-full sm:translate-x-0' aria-label='Sidebar'>
      <div className='flex justify-center pt-2'>
        <a href="#"><img src={logo} alt="" height={60} width={60} /></a>
      </div>
      <div className='flex justify-center'>
        <h1 className='text-amber-500 font-serif uppercase font-bold text-xl my-2'>shield fuel pos</h1>
      </div>
      <div className='flex space-y-2 font-medium'>
        <ul className='space-y-2 font-medium'>
          {navigation.map((item) =>
            <li>
                <NavLink 
                key={item.id} 
                to={item.to}
                className='flex items-center p-2 w-48 mx-6 text-gray-900 rounded-lg dark:text-black bg-white hover:bg-amber-500 group '
               
          >
              {item.icon} {item.name}
                </NavLink>
            </li>
          
          )}
          
        </ul>
      </div>

    </aside>
  )
}

export default Sidebar

