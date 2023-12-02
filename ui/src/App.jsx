import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Users from './pages/User'
import Branch from './pages/Branch'
import Unauth from './util/Unauth'
import Auth from './util/Auth'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Unauth/>}>
          <Route exact path='/' element={<Login/>} />
          <Route path='forgot-password' element={<ForgotPassword/>} />
          <Route path='reset-password' element={<ResetPassword/>} />
        </Route>
        <Route element={<Auth/>}>
          <Route element={<Layout/>}>
            <Route path='/dashboard' element={<Dashboard/>} />
            <Route path='/users' element={<Users/>} />
            <Route path='/branches' element={<Branch/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
