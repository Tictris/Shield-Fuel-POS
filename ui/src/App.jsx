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
  const [count, setCount] = useState(0)

  return (
    <>
    <Layout/>
    </>
  )
}

export default App
