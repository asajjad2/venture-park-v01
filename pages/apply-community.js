import React from 'react'
import HeaderApplication from '@/components/HeaderApplication'
import Input from '@/components/elements/Input'
import TextArea from '@/components/elements/TextArea'
import Button from '@/components/elements/Button'
import Footer from '@/components/Footer'

export default function applyCommunity() {
  return (
        <>
            <HeaderApplication title='Be Part of the Innovators: Join the Community'/>
            <div className='p-[6.5rem] grid grid-cols-2 gap-20'>
                <div className='space-y-16'>

                    <div className='space-y-8 text-gray-600'>
                        <h2 className='text-black text-display-md font-bold font-pd'>The Process You'll Follow</h2>
                        <div className='text-gray-600 '>
                            1. Fill out the form <br /> <br />
                            2. We’ll reach out to you <br /> <br />
                            3. Pick a schedule for an interview <br /> <br />
                            4. Join our Community!
                        </div>
                    </div>

                    <div className='space-y-8'>

                        <div className='space-y-6'>
                            <h2 className='text-display-md font-bold font-pd'>Still got some questions?</h2>
                            <p className='text-text-md font-normal text-gray-600'>Feel free to react out to us to clear your doubts!</p>
                        </div>

                        <div>
                            info@venturepark.com
                        </div>

                        <div className='flex gap-6'></div>

                    </div>

                </div>
                <form action="" className='space-y-8'>
                    <div className='space-y-4'>
                        <h4 className='text-text-xl font-semibold text-gray-800'>Contact Information</h4>
                        <div className='grid grid-cols-2 gap-6'>
                            <Input 
                                label='Name'
                                placeholder='Enter your name'
                                type='text'
                            />
                            <Input
                                label='Email'
                                placeholder='Enter your email'
                                type='email'
                            />
                
                        </div>
                    </div>

                    <div className='space-y-4'>
                        <h4 className='text-text-xl font-semibold text-gray-800'>Professional Information</h4>
                        <div className='space-y-6'>
                            <div className='grid grid-cols-2 gap-6'>
                                {/* {to be replaced with dropdowns} */}
                                <Input 
                                    label='Current Occupation'
                                    placeholder='Select an option'
                                    type='text'
                                />
                                <Input
                                    label='Main Area of Expertise'
                                    placeholder='Select an option'
                                    type='text'
                                />
                            </div>

                            <Input 
                                label={'Please your skills (4-5 skills min)'}
                                placeholder='Enter your skills'
                            />

                            <TextArea
                                label='Why are you interested in joining our community?'
                            />

                             <div className='grid grid-cols-2 gap-6'>
                                <Input 
                                    label='LinkedIn'
                                    placeholder='Paste your LinkedIn profile link'
                                    type='text'
                                />
                                <Input
                                    label='Portfolio (if any)'
                                    placeholder='Paste your portfolio link'
                                    type='text'
                                />
                            </div>
                            
                        </div>
                    </div>


                    <div className='space-y-4'>
                        <h4 className='text-text-xl font-semibold text-gray-800'>Others</h4>
                        <div className='grid grid-cols-2 gap-6'>
                            <Input 
                                label={'How did you hear about us?'}
                                placeholder={'Select an option'}
                            />
                        </div>
                       
                    </div>

                    <div className='flex justify-end'>
                        <Button
                            color='text-white'
                            bgColor='bg-gray-900'
                            px={'px-12'}
                            py={'py-3.5'}
                        >Apply Now</Button>
                    </div>
                
                </form>
            </div>

            <Footer />
        </>
    )
}
