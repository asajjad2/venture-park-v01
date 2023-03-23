import React from 'react'
import { Check } from 'feather-icons-react/build/IconComponents';
import Button from './Button';

export default function ApplyCard({title, subtitle, list, onClick}) {


  return (
    <div className='flex flex-col gap-16 justify-between p-6 rounded-[6px] bg-gray-50 border-[1px] border-gray-200 max-w-[25rem]'>
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-text-xl2 font-bold'>{title}</h3>
                <p className='text-text-md font-normal text-gray-500 min-h-[48px] '>{subtitle}</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h4 className='text-text-lg font-bold'>Ideal for you if - </h4>
                {
                    list && list.map((item, index) => {
                        return (
                            <div className='flex gap-2 items-center' key={index}>
                                <div className='w-6 h-6 bg-success-100 rounded-full flex justify-center items-center'>
                                    <Check className='text-success-600' size={16}/>
                                </div>
                                <p className='text-text-md font-normal text-gray-500'>{item}</p>
                            </div>                            
                        )
                    })
                }
            </div>
        </div>

        <Button color='text-gray-600' bgColor='bg-white' px='px-8' py='py-3.5' onClick={onClick}>Apply Now</Button>
       
    </div>
  )
}
