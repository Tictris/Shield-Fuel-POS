import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/pages/Login'
import Dashboard from './components/pages/superadmin/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UnAuth from './api/UnAuth'
import Home from './components/layouts/Home'
import Auth from './api/Auth'
import Layout from './components/layouts/Layout'
import Users from './components/pages/superadmin/Users'
import PageComponents from './components/layouts/PageComponents'

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UnAuth />}>
          <Route element={<Home />}>
            <Route exact path="/" element={<Login />} />
          </Route>
        </Route>
        <Route element = {<Auth/>}>
            <Route element = {<Layout/>}>
              
                <Route path = "/dashboard" element={<Dashboard/>}/>
                <Route path = "/users" element={<Users/>}/>
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
