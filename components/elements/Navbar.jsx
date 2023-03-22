import React from 'react'
import Button from '@/components/elements/Button'

export default function navbar() {
  return (
        <>
            <div className="flex justify-between items-center py-4 px-[104px] bg-transparent ">
                <div className='text-text-xl2 text-white font-extrabold font-pd'>VenturePark</div>
                <div className="menu flex justify-center items-center gap-6">
                    <Button size={'nav'} variant='tertiary' color='text-white'>Join the Community</Button>
                    <span className='text-white'>or</span>
                    <Button size={'nav'} color='text-black' bgColor='bg-white' px='px-6' py='py-2'>Apply as a Founder</Button>
                </div>
            </div>
        </>
    )
}
