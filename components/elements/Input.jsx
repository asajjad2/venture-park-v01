import React from 'react'

export default function Input({ type, placeholder, value, onChange }) {
  return (
    <div>
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
