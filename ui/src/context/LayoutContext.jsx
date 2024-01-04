import React, { createContext, useState } from 'react' 

// IMPORT FILES
import logo from "../assets/img/logo.png"
import users from '../assets/icon/user.png'
import axiosInstance from '../api/axios'

// IMPORT PACKAGES
import { BiSolidDashboard, BiSolidBuildings, BiSolidDownArrow } from 'react-icons/bi'
import { FaUsers, FaArrowLeft, FaUserCircle, FaBell, FaUserAlt, FaCogs, FaSignOutAlt   } from 'react-icons/fa'
import { FaClipboardList } from "react-icons/fa6"
import { NavLink, useLocation, Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'

export const LayoutContext = createContext()

const LayoutContextProvider = ({ children }) => {

  const location = useLocation()
  const nav = useNavigate()

  const [open, setOpen] = useState(true)
  const [drop, setDrop] = useState(false)
  const [user, setUser] = useState([])
  const [role, setRole] = useState('')

  const menus = [
    { name: 'Dashboard',    link: '/dashboard',   icon: BiSolidDashboard },
    { name: 'Users',        link: '/users',       icon: FaUsers },
    { name: 'Branch',       link: '/branches',    icon: BiSolidBuildings },
    { name: 'Transaction',  link: '/transactions',  icon: FaClipboardList}
  ]

  const isActive = menus.some((link) => location.pathname.includes(link))

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    const role = localStorage.getItem('role')

    // console.log(user.firstname, user.lastname)
    // console.log(role)

    setUser(user.firstname.charAt(0).toUpperCase() + user.firstname.slice(1) + ' ' + user.lastname.charAt(0).toUpperCase() + user.lastname.slice(1))
    setRole(role.charAt(0).toUpperCase() + role.slice(1))
  }, [])

  // useEffect(() => {
  //   axiosInstance.get('super_admin_user').then((res) => {
  //     console.log(res.data.user)
  //     setUser(res.data.user)
  //   })
  // }, [])

 const handleLogout = async () => {
  try {
      if(role === 'super_admin'){
        await axiosInstance.post('sa/logout').then((res) => {
          localStorage.clear()
          console.log(res.data.message)
          window.location.href = '/'
        })
      } else if(role === 'manager'){
        await axiosInstance.post('m/logout').then((res) => {
          localStorage.clear()
          console.log(res.data.message)
          window.location.href = '/'
        })
      }
  } catch (error) {
    console.log(error)
  }
 }



  return (
    <LayoutContext.Provider
      value={{ 
        menus,
        open,
        setOpen,
        location,
        NavLink,
        BiSolidDashboard,
        BiSolidBuildings,
        FaUsers,
        FaArrowLeft,
        FaUserCircle,
        BiSolidDownArrow,
        FaBell,
        FaUserAlt,
        FaCogs,
        FaSignOutAlt,
        Link,
        logo,
        user,
        users,
        setDrop,
        drop,
        handleLogout,
        role,
        isActive

      }}>
        {children}
    </LayoutContext.Provider>
  )
}

export default LayoutContextProvider