import React from 'react'
import logo from '../../assets/img/Logo2.png'
function Login() {
    return (
        <div className='flex flex-col mt-20 mr-3'>
            <dir className="grid place-items-center">
                <a href="#"><img src={logo} alt="" height={80} width={80} /></a>
                <h1 className='text-amber-500 font-serif uppercase font-bold text-4xl my-5'>shield fuel pos</h1>
                <div className='flex h-10 w-96 bg-amber-500 rounded-sm p-1 justify-center'>
                    <h1 className='text-white font-sans font-semibold text-xl'>Login to your account</h1>
                </div>
                <div className='p-6 w-96 bg-white shadow-lg border'>
                    <form action="">
                        <label htmlFor="email" className='block mt-2 text-start mb-1 font-semibold text-gray-600 my-3'>Mobile Number or Email</label>
                        <div className='relative'>
                            <input type="email" placeholder='Input your email or number' className='w-full rounded border border-slate-400 focus:border-slate-600 pl-8 pr-2 py-2 outline-none my-2' />
                        </div>
                        <label htmlFor="email" className='block mt-2 text-start mb-1 font-semibold text-gray-600'>Password</label>
                        <div className='relative'>
                            <input type="password" placeholder='*******' className='w-full rounded border border-slate-400 focus:border-slate-600 pl-8 pr-2 py-2 outline-none' />
                        </div>
                        <div className='text-right'>
                            <a href='#' className='text-sm font-light'><i>forgot password?</i></a>
                        </div>
                        <button type="submit" className="flex items-center justify-center w-full bg-amber-500 text-white h-10 rounded-md mt-3 my-2"> Login
                        </button>

                        <h2 className='text-sm text-start font-light my-2'><i>Don't have an account?</i></h2>
                        <h2 className='text-sm text-start font-light'><i>Contact Shield Team</i></h2>

                    </form>
                </div>

            </dir>
        </div>
    )
}

export default Login