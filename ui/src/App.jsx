import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import Users from './pages/User'
import Branch from './pages/Branch'
import Unauth from './util/Unauth'
import Auth from './util/Auth'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Unauth/>}>
          <Route exact path='/' element={<Login/>} />
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
