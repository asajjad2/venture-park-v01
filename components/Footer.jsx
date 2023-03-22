import React from 'react'

export default function Footer() {
  return (
    <div className='py-10 px-[6.5rem] flex justify-between items-center'>
        <div className='text-text-xl2 font-extrabold font-pd'>VenturePark</div>
        <div className='flex gap-8 text-md font-medium text-gray-600'>
            <h4 className='cursor-pointer'>Home</h4>
            <h4 className='cursor-pointer'>Community</h4>
            <h4 className='cursor-pointer'>Blog</h4>
        </div>
        <h4 className='text-md font-medium text-gray-600'>© All rights reserved.</h4>
    </div>
  )
}
