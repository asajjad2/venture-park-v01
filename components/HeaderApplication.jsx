import React from 'react'
import Navbar from './elements/Navbar'
export default function headerApplication({title}) {
  return (
    <div className='min-h-[300px] bg-black'>
        <Navbar />
        <div className='px-[6.5rem] py-16 flex flex-col gap-4 text-white'>
            <h1 className='text-display-xl font-bold font-pd'>{title}</h1>
            <p className='text-text-md font-normal'>Join Our Exclusive Community of Entrepreneurs</p>
        </div>
    </div>
  )
}
