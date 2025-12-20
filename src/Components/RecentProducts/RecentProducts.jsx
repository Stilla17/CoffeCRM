import { Package } from 'lucide-react'
import React from 'react'

const RecentProducts = () => {
    return (
        <div className=' border-[#e0d7cf] border rounded-xl bg-white mt-6'>
            <div className='p-6'>
                <div className='flex items-center gap-2 text-[#3e2723] '>
                    <Package size={18} />
                    <p className='text-[18px] font-medium '>Recent Products</p>
                </div>
            </div>
            <div className='w-full h-[0.5px] bg-[#e0d7cf] ' />
            <div className='p-4'>
                <div>
                    <div className='flex gap-4  '>
                        <div className='w-12 h-12 bg-[#f5f1ed] rounded-xl flex items-center justify-center'>
                            <Package size={24} color='#8d6e63' />
                        </div>
                        <div>
                            <p>test</p>
                            <p className="text-xs mt-0.5 text-[#8d6e63]">123321 • 213231 boxes</p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default RecentProducts