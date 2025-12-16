import React from 'react'

const Nav = ({ title, description, children }) => {
    return (
        <div className='flex items-center justify-between max-md:flex-wrap max-md:gap-4'>
            <div>
                <h2 className='text-[30px] font-bold '>{title}</h2>
                <p className='text-[#8d6e63]'>{description}</p>
            </div>
            <div className='flex items-center gap-4'>
                {
                    children
                }

            </div>
        </div>
    )
}

export default Nav