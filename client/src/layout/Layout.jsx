import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

function Layout() {
  return (
    <>
        <Navbar/>
        <div className="layout-container relative min-h-[100vh]  w-[100vw]  bg-[#181818] flex flex-col justify-center items-center  ">
            <Outlet/>
        </div>
    </>
  )
}

export default Layout