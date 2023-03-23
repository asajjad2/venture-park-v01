import React from 'react'

export default function Input({ type, placeholder, value, onChange, label }) {
  return (
    <div className='space-y-1'>
        {label && <label className='text-text-sm font-medium text-gray-800'>{label}</label>}
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={'h-[42px] w-full py-2 px-3 border-[1px] border-gray-400 rounded-[6px] text-text-lg font-normal text-gray-500'}
        />
    </div>
  )
}
