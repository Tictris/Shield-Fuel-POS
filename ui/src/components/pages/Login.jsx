import React, { useState } from 'react'
import logo from '../../assets/img/Logo2.png'
import axiosInstance from '../../api/axios'

import { useNavigate,Navigate} from 'react-router-dom'
function Login() {

   const nav = useNavigate()
   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const [error, setError] = useState([])
   const [loading, setLoading] = useState(false)

   const handleSubmit = (e) => {
    

    e.preventDefault()

    setLoading(true)

    setTimeout(() => {
      axiosInstance.post('login', JSON.stringify({
        email, password
      })).then((response) => {
        setLoading(false)
        
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
        localStorage.setItem('role', response.data.user.roles[0].name)
  
        const role = localStorage.getItem('role')
  
        if (role === 'super_admin') {
          nav('/dashboard')
        }
  
      }).catch(error => {
        if(error.response.status === 422){
          setError(error.response.data.errors)
        }
      })
    }, 2000);
  }
  
    return (
        
            <div className="grid place-items-center">
                <a href="#"><img src={logo} alt="" height={80} width={80} /></a>
                <h1 className='text-amber-500 font-serif uppercase font-bold text-4xl my-5'>shield fuel pos</h1>
                <div className='flex h-10 w-96 bg-amber-500 rounded-sm p-1 justify-center'>
                    <h1 className='text-white font-sans font-semibold text-xl'>Login to your account</h1>
                </div>
                <div className='p-6 w-96 bg-white shadow-lg border'>
                    <form className='mt-10' onSubmit={handleSubmit}>
                        <label htmlFor="email" className='block mt-2 text-start mb-1 font-semibold text-gray-600 my-3'>Mobile Number or Email</label>
                        <div className='relative'>
                            <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Input your email or number' className='w-full rounded border border-slate-400 focus:border-slate-600 pl-8 pr-2 py-2 outline-none my-2' />
                        </div>
                        { error.email && <div className='text-red-400 text-sm'>{ error.email[0] }</div> }
                        <label htmlFor="email" className='block mt-2 text-start mb-1 font-semibold text-gray-600'>Password</label>
                        <div className='relative'>
                            <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='*******' className='w-full rounded border border-slate-400 focus:border-slate-600 pl-8 pr-2 py-2 outline-none' />
                        </div>
                        <div className='text-right'>
                            <a href='#' className='text-sm font-light'><i>forgot password?</i></a>
                        </div>
                        <button type="submit" disabled={loading} className="flex items-center justify-center w-full bg-amber-500 text-white h-10 rounded-md mt-3 my-2">
                            {
                                loading ?(
                                    <div className='flex items-center justify-center h-32 border-b'>
                                        <div style={{borderTopColor: 'transparent'}} className='w-4 h-4 border-2 rounded-full animate-spin'/>
                                        <p className='ml-2 text-white font-sans text-sm'>Loading</p>
                                    </div>
                                ) : (
                                    'Login'
                                )
                            }
                        </button>

                        <h2 className='text-sm text-start font-light my-2'><i>Don't have an account?</i></h2>
                        <h2 className='text-sm text-start font-light'><i>Contact Shield Team</i></h2>

                    </form>
                </div>

            </div>
   
    )
}

export default Login