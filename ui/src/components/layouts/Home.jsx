import React from 'react'
import { Outlet } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className='flex flex-col mt-20 mr-3'>
                <Outlet />
            </div>
        </>
    )
}

export default Home
