import React from 'react'

export default function TextArea({ placeholder, value, onChange, label}) {
  return (
    <div className='space-y-1'>
        {label && <label className='text-text-sm font-medium text-gray-800'>{label}</label>}
        <textarea
            placeholder={placeholder?placeholder:'Type here'}
            value={value}
            onChange={onChange}
            className={'min-h-[124px] w-full py-2 px-3 border-[1px] border-gray-400 rounded-[6px] text-text-lg font-normal text-gray-500'} 
        />
    </div>
  )
}
