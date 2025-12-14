import React, { useState } from 'react'
import SideBar from '../Components/SideBar/SideBar'
import { Outlet } from 'react-router'
import SideBarMobile from '../Components/SideBar/SideBarMobile'
import { useDispatch, useSelector } from 'react-redux'
import { setOpen } from '../store/features/toggleSlice'

const Layout = () => {

  const open = useSelector((state) => state.toggle.open);
  const dispatch = useDispatch();

  return (
    <>
      <SideBarMobile />
      <div className='flex w-full'>
        <SideBar />
        <div className='w-full bg-[#F1F3F4]' onClick={() => dispatch(setOpen(!open))}>
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default Layout