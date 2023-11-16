import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Dashboard from '../pages/Dashboard'
import Content from './Content'
import LayoutContextProvider from '../context/LayoutContext'

const Layout = () => {
  return (
    <LayoutContextProvider>
      <div className='flex h-screen'>
        <Sidebar/>
        <div className="grow">
          <div className="flex flex-col">
            <Topbar/>
            <Content/>
          </div>
        </div>
      </div>
    </LayoutContextProvider>
  )
}

export default Layout