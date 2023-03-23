import React from 'react'
import HeaderApplication from '@/components/HeaderApplication'
import Input from '@/components/elements/Input'
import TextArea from '@/components/elements/TextArea'
import Button from '@/components/elements/Button'
import Footer from '@/components/Footer'

export default function applyFounder() {
  return (
    <>
        <HeaderApplication title={'Be Part of the Innovators: Apply as a Founder'}/>
        <div className='p-[6.5rem] grid grid-cols-2 gap-20'>
            <div className='space-y-16'>

                <div className='space-y-8 text-gray-600'>
                    <h2 className='text-black text-display-md font-bold font-pd'>The Process You'll Follow</h2>
                    <div className='text-gray-600 '>
                        1. Fill out the form <br /> <br />
                        2. We’ll reach out to you <br /> <br />
                        3. Pick a schedule to pitch your idea <br /> <br />
                        4. Get Selected!
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
                    <h4 className='text-text-xl font-semibold text-gray-800'>Your Startup/Idea</h4>
                    <div className='space-y-6'>
                        <div className='grid grid-cols-2 gap-6'>
                            {/* {to be replaced with dropdowns} */}
                            <Input 
                                label='Stage of Development'
                                placeholder='Select an option   '
                                type='text'
                            />
                            <Input
                                label='Industry'
                                placeholder='Select an industry'
                                type='text'
                            />
                        </div>

                        <TextArea
                            label='Brief summary of your startup idea'
                        />

                        <Input 
                            label = 'Startup Website (optional)'
                            placeholder={'Paste your website link'}
                            type='text'
                        />
                    </div>
                </div>


                <div className='space-y-4'>
                    <h4 className='text-text-xl font-semibold text-gray-800'>Your Requirements</h4>
                    <TextArea 
                        label={'Tell us about what you’re expecting you get from VenturePark'}
                    />
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
