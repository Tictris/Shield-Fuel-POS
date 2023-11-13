import { BrowserRouter ,Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route element={<Layout/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
