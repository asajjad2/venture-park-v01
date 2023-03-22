import React from 'react'
import Image from 'next/image'

export default function FeatureCard({img, title, text, icon, reverse}) {
  return (
    <div className={`flex ${reverse?'flex-row-reverse':''} items-center justify-center px-16 gap-20`}>
        <div className='w-[472px] h-[246px]'>
            <img src={img} alt="" className='w-[472px] h-[246px] object-cover rounded-[6px]'/>
        </div>
        <div className='flex flex-col gap-4 w-[472px]'>
            {
                icon &&  <img src={icon} alt="" className={'object-cover h-11 w-11 rounded-full'}/>
            }
            <h3 className='text-text-xl2 font-bold'>{title}</h3>
            <p className='text-text-md font-normal'>{text}</p>
        </div>
    </div>
  )
}
