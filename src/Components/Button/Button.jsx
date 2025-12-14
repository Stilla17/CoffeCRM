import React from 'react'

const Button = ({ children, text, className }) => {
    return (
        <button className={`${className} flex items-center gap-2
           text-[#3e2723]
          px-4 py-1.5 rounded-md
          border border-[#e0d7cf]
          font-medium
          shadow-sm
          cursor-pointer
          transition`}>
            {children}
            {text}
        </button>
    )
}

export default Button