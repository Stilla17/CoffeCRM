import React from 'react'

const Nav = ({ title, description, children }) => {
    return (
        <div className='flex items-center justify-between'>
            <div>
                <h2 className='text-[30px] font-bold '>{title}</h2>
                <p>{description}</p>
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