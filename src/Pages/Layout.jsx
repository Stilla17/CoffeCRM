import React from 'react'
import SideBar from '../Components/SideBar/SideBar'
import { Outlet } from 'react-router'


const Layout = () => {
  return (
    <>
      <div className='flex w-full'>
        <SideBar />
        <div className='w-full bg-[#F1F3F4]'>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout