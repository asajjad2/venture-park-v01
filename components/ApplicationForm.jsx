import React from 'react'
import Button from './elements/Button'
import Input from './elements/Input'
import TextArea from './elements/TextArea'

export default function ApplicationForm() {
  return (
    <div className='p-[6.5rem] grid grid-cols-2 gap-[240px]'>
        <div className='space-y-16'>
          <div className='space-y-6'>
            <h1 className='text-display-lg font-bold font-pd'>Reach Out to Us</h1>
            <p className='text-text-md font-normal'>We’re always open to any suggestions or ideas that you may have. Feel free to send us a message or check out our socials!</p>
          </div>
          
        </div>
        <div className='space-y-6'>
          <h3 className='text-text-xl2 font-bold'>Send us a Message</h3>
          <form action="" className='space-y-4'>
            <Input type={'text'} placeholder={'Enter your name'}/>
            <Input type={'email'} placeholder={'Enter your email'}/>
            <TextArea placeholder={'Your Message'}/>
            <Button 
              color='text-white'
              bgColor='bg-gray-900'
              px='px-8'
              py='py-3.5'
              size='full'>Send</Button>
          </form>
        </div>
      </div>
    )
}
