import React, { useState } from "react";
import SideBar from "../components/SideBar/SideBar";
import { Outlet } from "react-router";
import SideBarMobile from "../components/SideBar/SideBarMobile";
import { useDispatch, useSelector } from "react-redux";
import { setOpen } from "../store/features/toggleSlice";

const Layout = () => {
  const open = useSelector((state) => state.toggle.open);
  const dispatch = useDispatch();

  return (
    <>
      <SideBarMobile />
      <div className="flex w-full bg-[#f5f1ed]">
        <SideBar />
        <div className="w-full  p-8" onClick={() => dispatch(setOpen(!open))}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Layout;
