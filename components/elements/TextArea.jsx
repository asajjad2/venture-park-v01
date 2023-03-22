import React from 'react'

export default function TextArea({ placeholder, value, onChange}) {
  return (
    <div>
        <textarea
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={'min-h-[124px] w-full py-2 px-3 border-[1px] border-gray-400 rounded-[6px] text-text-lg font-normal text-gray-500'} 
        />
    </div>
  )
}
