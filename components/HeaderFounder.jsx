import React from 'react';
import Navbar from '@/components/elements/Navbar';
import Button from '@/components/elements/Button';
import Image from 'next/image';
import { Linkedin } from '../public/icons/linkedin.svg';
import { Dribble } from '../public/icons/dribble.svg';
import { Behance } from '../public/icons/behance.svg';

export default function headerFounder() {
  return (
        <div className='header-founder min-h-[724px]'>
            <Navbar />
            <main className='flex flex-col gap-16 my-[120px] px-[104px] pb-10'>
                <div className='flex flex-col gap-8'>
                    <div className="headings flex flex-col gap-4 text-white">
                        <div className='font-pd text-display-2xl font-bold'>Executing your Ideas <br /> Solo can be Tough</div>
                        <div className='text-text-md font-normal'>We're here to help turn your ideas into reality</div>
                    </div>
                    <div className="btns flex gap-6">
                        <Button color='text-black' bgColor='bg-white' px='px-8' py='py-3.5'>Apply as a Founder</Button>
                        <Button variant='secondary' color='text-white' bgColor='bg-white' px='px-8' py='py-3.5'>Be a Part of Our Community</Button>
                    </div>
                </div>
                <div className="flex flex-col gap-5 text-white">
                    <div className='text-text-lg font-semibold'>Our Startups</div>
                    <div className="icons flex gap-8">
                        <img src={Linkedin} width={100} height={24} alt="linkedin"/>
                        <img src={Dribble} width={100} height={24} alt="dribble"/>
                        <img src={Behance} width={100} height={24} alt="behance"/>
                    </div>
                </div>
            </main>
        </div>
    )
}
