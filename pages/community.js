import React from 'react'
import Header from '../components/HeaderCommunity'
import Point from '../components/elements/Point'

export default function Community() {
  return (
    <div>
        <Header />
        
      <div className='p-[6.5rem] flex items-center gap-10'>
          <h1 className='font-pd text-display-lg font-bold flex-1'>
            We’re more than an average community.          
          </h1>
          <p className='text-text-xl font-normal flex-1'>
            We’re people who come up with fresh ideas, innovate and build life changing tools          
          </p>
      </div>

      <div className='w-screen flex flex-col items-center p-[6.5rem] gap-20'>
        <div className='px-16 flex gap-20'>
          <Point svg={1} text='Unlock Your Potential for Growth and Learning' />
          <Point svg={1} text='Get Involved in Projects that Excite You' />
          <Point svg={1} text='Connect with Forward-Thinking Individuals' />
        </div>
      </div>  

      <div className='w-screen bg-black text-white p-[6.5rem] flex flex-col gap-4 justify-center items-center'>
        <h2 className='text-display-lg font-bold font-pd'>Are we what you’re looking for?</h2>
        <p className='text-text-xl font-normal'>We might be the perfect fit for <span className='font-semibold'>you!</span></p>
      </div>

    </div>
  )
}
