import React from 'react'
import Navbar from '@/components/elements/Navbar';
import Button from '@/components/elements/Button';

export default function headerCommunity() {
  return (
    <div className='header-community min-h-[608px]'>
        <Navbar />
            <main className='flex flex-col gap-16 my-[120px] px-[104px] pb-10'>
                <div className='flex flex-col gap-8'>
                    <div className="headings flex flex-col gap-4 text-white max-w-[678px]">
                        <div className='font-pd text-display-2xl font-bold'>
                        A Sanctuary for Product Innovators
                        </div>
                        <div className='text-text-md font-normal'>
                            Join a community of like-minded individuals and watch your ideas turn into successful products
                        </div>
                    </div>
                    <div className="btns flex gap-6">
                        <Button color='text-black' bgColor='bg-white' px='px-8' py='py-3.5'>Join the Community of Hundreds</Button>
                    </div>
                </div>
            </main>
    </div>
)}
