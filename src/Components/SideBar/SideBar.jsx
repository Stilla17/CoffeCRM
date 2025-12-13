import { Coffee, FolderOpen, LayoutDashboard, Package } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { setActive } from '../../store/features/toggleSlice';


const SideBar = () => {
  const menu = [
    { id: "dash", label: "Dashboard", to: "/", icon: <LayoutDashboard size={18} /> },
    { id: "pro", label: "Products", to: "/products", icon: <Package size={18} /> },
    { id: "cat", label: "Categories", to: "/categories", icon: <FolderOpen size={18} /> },
  ];

  const active = useSelector((state) => state.toggle.active);
  const dispatch = useDispatch();

  const currentPath = location.pathname
  const activeId = menu.find(item => item.to === currentPath)?.id || active

  return (
    <div className='bg-[#fafafa] w-75 border-r border-[#e0d7cf] py-8 h-screen sticky top-0 max-md:hidden'>
      <div className='flex items-center gap-2 border-b border-[#e0d7cf] pl-6 pr-6 pb-8'>
        <div className='bg-[#336947] p-2 rounded-2xl flex items-center justify-center w-14'><Coffee size={34} color='white' /></div>
        <div className=''>
          <h1 className='text-[#3e2723] text-2xl text-nowrap font-bold'>Coffee CRM</h1>
          <p className='text-[#9b6e63] text-[12px]'>Admin Panel</p>
        </div>
      </div>
      <div className='pl-6 pr-6'>

        <h1 className='mb-2 uppercase text-[#9b6e63] font-bold mt-4 text-[12px]'>Management</h1>
        <ul className='text-[14px]'>
          {menu.map((item, index) => (
            <li key={index}>
              <Link
                to={item.to}
                onClick={() => dispatch(setActive(item.id))}
                className={`
                              mb-2 flex gap-4 items-center rounded-xl w-full font-medium text-[#3e2723] p-2
                              ${activeId === item.id
                    ? "text-white bg-[#2d5f3f] shadow-lg font-medium"
                    : "hover:bg-[#f5f5f5] text-gray-700 hover:text-gray-900"
                  }
                
                  `}
              >
                {item.icon} {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SideBar