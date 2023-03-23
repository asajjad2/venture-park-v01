import React from 'react'
import Header from '../components/HeaderCommunity'
import Point from '../components/elements/Point'
import FeatureCard from '../components/elements/FeatureCard'
import Button from '../components/elements/Button'  

import FAQs from '@/components/FAQs'
import ApplicationForm from '@/components/ApplicationForm'
import Footer from '@/components/Footer'


export default function Community() {
  return (
    <div className='bg-white'>
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

      <div className='flex flex-col items-center justify-center p-[6.5rem] gap-20'>

        <h1 className='text-display-lg font-bold font-pd'>But What Do You Get?</h1>
        <div className='flex flex-col gap-20'>
          <FeatureCard title={'Mentorship'} text={'Spot on mentorship will help you skip the years of test & trial from your career and jump straight to bringing wonders to life'} img={'https://source.unsplash.com/random/?Cryptocurrency/'} icon={'https://source.unsplash.com/random/?icon/'}/>
          <FeatureCard reverse={true} title={'Networking'} text={'No startup is successful without a brilliant team. Our community is full of trusted and skillful people, which you can build your own team from!'} img={'https://source.unsplash.com/random/?Cryptocurrency/'} icon={'https://source.unsplash.com/random/?icon/'}/>
          <FeatureCard title={'Equity'} text={'The right mentorship can turn around the chances of success for a startup, that’s why we provide the best mentorship for startups to guaranty their success.'} img={'https://source.unsplash.com/random/?Cryptocurrency/'} icon={'https://source.unsplash.com/random/?icon/'}/>
          <FeatureCard reverse={true} title={'A TON of Opportunities'} text={'MVP (Minimum Viable Product) is the first step in making a great product. Launching it ASAP helps you find your ideal product & market and we understand that.'} img={'https://source.unsplash.com/random/?Cryptocurrency/'} icon={'https://source.unsplash.com/random/?icon/'}/>
        </div>

      </div>

      <div className='p-[6.5rem] flex flex-col items-center gap-20'>
        <h1 className='text-display-lg font-bold font-pd'>It’s Easy to be Among Us</h1>
        <div className='grid grid-cols-2 gap-20'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-text-xl2 font-bold'>1. Fill Out the Form Below</h3>
                <p className='text-text-md font-normal text-gray-500'>MVP (Minimum Viable Product) is the first step in making a great product. Launching it ASAP helps you find your ideal product & market and we understand that.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='text-text-xl2 font-bold'>2. Get an Interview</h3>
                <p className='text-text-md font-normal text-gray-500'>MVP (Minimum Viable Product) is the first step in making a great product. Launching it ASAP helps you find your ideal product & market and we understand that.</p>
            </div>
        </div>
        <h4 className='text-text-xl2 font-bold text-blue-500'>Literally that simple!</h4>
      </div>

      <div className='flex justify-between items-center bg-black text-white px-[6.5rem] py-20'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-display-lg font-bold font-pd'>Ready to Start a New Life?</h1>
          <p className='text-text-lg font-normal'>Join our community of innovators and where we turn ideas into successful products - Join today.</p>
        </div>
        <Button color='text-black' bgColor='bg-white' px='px-8' py='py-3.5'>Join Now</Button>
      </div>
      
      <FAQs />  
      <ApplicationForm />
      <Footer />

    </div>
  )
}
