import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

function Layout() {
  return (
    <>
        <Navbar/>
        <div className="layout-container relative min-h-[100vh]  w-[100vw]   flex flex-col justify-center items-center bg-gradient-to-b from-[#181818] to-[#1f1f1f]  ">
            <Outlet/>
        </div>
    </>
  )
}

export default Layout