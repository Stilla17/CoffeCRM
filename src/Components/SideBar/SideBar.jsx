import { Coffee, FolderOpen, LayoutDashboard, LogOut, Package } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router';
import { setActive, setOpen } from '../../store/features/toggleSlice';


const SideBar = () => {
  const menu = [
    { id: "dash", label: "Dashboard", to: "/", icon: <LayoutDashboard size={18} /> },
    { id: "pro", label: "Products", to: "/products", icon: <Package size={18} /> },
    { id: "cat", label: "Categories", to: "/categories", icon: <FolderOpen size={18} /> },
  ];

  const active = useSelector((state) => state.toggle.active);
  const open = useSelector((state) => state.toggle.open);
  const dispatch = useDispatch();

  const currentPath = location.pathname
  const activeId = menu.find(item => item.to === currentPath)?.id || active

  return (
    <>
      {open && (
        <div
          onClick={() => dispatch(setOpen(false))}
          className="fixed inset-0 bg-black/50 z-40 max-md:block hidden"
        />
      )}
      <div
        className={`
          bg-[#fafafa] flex flex-col justify-between w-72
          border-r border-[#e0d7cf] py-8 h-screen
          sticky top-0

          max-md:fixed max-md:z-50
          max-md:inset-y-0 max-md:left-0
          max-md:transition-transform max-md:duration-300

          ${open ? "max-md:translate-x-0" : "max-md:-translate-x-full"}
        `}
      >
        <div>
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

        <Link to='/signin' className='flex items-center gap-2 border-t border-[#e0d7cf] pl-6 pr-6 pt-8'>
          <LogOut />
          <p className='text-[#3e2723] text-nowrap font-medium'>Logout</p>
        </Link>
      </div>
    </>
  )
}

export default SideBar