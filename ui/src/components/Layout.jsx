import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Dashboard from '../pages/Dashboard'
import Content from './Content'

const Layout = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar/>
      <div className="grow">
        <div className="flex flex-col">
          <Topbar/>
          <Content/>
        </div>
      </div>
    </div>
  )
}

export default Layout