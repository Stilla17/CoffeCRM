import { PanelLeft } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setOpen } from '../../store/features/toggleSlice';

const SideBarMobile = () => {
    const open = useSelector((state) => state.toggle.open);
    const dispatch = useDispatch();

    return (
        <div className={`bg-white px-4 py-6 border-b border-[#e0d7cf] hidden max-md:flex items-center gap-2`}>
            <button onClick={() => dispatch(setOpen(!open))} className='cursor-pointer p-1.5 hover:bg-gray-100 rounded-[10px]' >
                <PanelLeft size={18} />
            </button>
            <h2 className='text-[#3e2723] text-xl font-bold'>Coffee CRM</h2>
        </div>
    )
}

export default SideBarMobile