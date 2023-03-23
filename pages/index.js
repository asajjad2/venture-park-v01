import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Button from '@/components/elements/Button'
import Header from '@/components/HeaderFounder'
import Navbar from '@/components/elements/Navbar'
import Point from '@/components/elements/Point'
import FeatureCard from '@/components/elements/FeatureCard'
import ApplyCard from '@/components/elements/ApplyCard'
import FAQs from '@/components/FAQs'
import ApplicationForm from '@/components/ApplicationForm'
import Footer from '@/components/Footer'
import HeaderApplication from '@/components/HeaderApplication'

import f1 from '../public/images/brooke-cagle--uHVRvDr7pg-unsplash.jpg'
import f2 from '../public/images/pexels-fauxels-3184418.jpg'
import f3 from '../public/images/pexels-yan-krukau-7693099.jpg'
import f4 from '../public/images/pexels-andrea-piacquadio-3760609.jpg'
import f5 from '../public/images/andrew-neel-ute2XAFQU2I-unsplash.jpg'
import f6 from '../public/images/pexels-rodnae-productions-7413915.jpg';
import f7 from '../public/images/pexels-andrea-piacquadio-3974770.jpg';

export default function Home() {
  return (
    <div className='bg-white'> 
      <Header />

      <div className='w-screen flex flex-col items-center p-[6.5rem] gap-20'>
        <h1 className='text-display-lg font-bold font-pd'>Experiencing Any of these Roadblocks</h1>

        <div className='px-16 flex gap-20'>
          <Point svg={1} text='Struggling Because of Limited Experience?' />
          <Point svg={1} text='Need a Team to Build your Dream?' />
          <Point svg={1} text='Lack of Funding Stalling your Startup?' />
        </div>
      </div>  

      <div className='p-[6.5rem] flex items-center gap-10 bg-black text-white'>
          <h1 className='font-pd text-display-lg font-bold flex-1'>
            We care about your idea.
          </h1>
          <p className='text-text-xl font-normal flex-1'>
            An idea put to waste is an opportunity lost, several hearts disheartened, and thousands of lives <span className='font-bold'>unchanged.</span>
          </p>
      </div>

      <div className='flex flex-col items-center justify-center p-[6.5rem] gap-20'>

        <h1 className='text-display-lg font-bold font-pd'>We’ve Got Your Back!</h1>
        <div className='flex flex-col gap-20'>
          <FeatureCard title={'Get the Required Skillset'} text={'Desktop research only gets you so far, especially if you’re on the way to building something extraordinary. Instead, let our community shoulder you in getting the skillset you need. '} img={f1.src} icon={'https://source.unsplash.com/random/?icon/'}/>
          <FeatureCard reverse={true} title={'Get the Required Skillset'} text={'Desktop research only gets you so far, especially if you’re on the way to building something extraordinary. Instead, let our community shoulder you in getting the skillset you need. '} img={f2.src} icon={'https://source.unsplash.com/random/?icon/'}/>
          <FeatureCard title={'Get the Required Skillset'} text={'Desktop research only gets you so far, especially if you’re on the way to building something extraordinary. Instead, let our community shoulder you in getting the skillset you need. '} img={f3.src} icon={'https://source.unsplash.com/random/?icon/'}/>
          <FeatureCard reverse={true} title={'Get the Required Skillset'} text={'Desktop research only gets you so far, especially if you’re on the way to building something extraordinary. Instead, let our community shoulder you in getting the skillset you need. '} img={f4.src} icon={'https://source.unsplash.com/random/?icon/'}/>
        </div>

      </div>

      <div className='flex flex-col items-center p-[6.5rem] gap-20'>
        <div className='flex flex-col gap-4 text-center'>
          <h1 className='text-display-lg font-bold font-pd'>Seems too Good to be True?</h1>
          <p className='text-text-md font-normal'>Here’s the take, we don’t take this for ourselves. It goes to the community that works <br /> and helps you achieve your dream </p>
        </div>

        <div className='grid grid-cols-2 px-36 gap-[120px]'>
          <ApplyCard title={'Equity-based Incubation'} subtitle={'Don’t have funding? We’ve got you covered.'}
            list = {
              [
                'You’re just getting started', 'You want to build a great team', 'You don’t have adequate finances'
              ]
            }
          />
          <ApplyCard title={'Cost-based Incubation'} subtitle={'Just need a little help here and there? No problem, we’ll lend you our skills :)'}
          list = {
            [
              "You only need some assistance", "You already have a team", "You’ve somewhat established yourself", 
            ]
          }
          />
        </div>
      </div>

      <div className='w-screen bg-black text-white p-[6.5rem] flex justify-center items-center text-display-lg font-bold font-pd'>
        A fair price to make your visions a reality
      </div>

      <div className='flex flex-col items-center justify-center p-[6.5rem] gap-20'>

        <h1 className='text-display-lg font-bold font-pd'>How to Get Started</h1>
        <div className='flex flex-col gap-20'>
          <FeatureCard title={'1. Apply as a Founder'} text={'Fill out the form and tell us about your next big thing.'} img={f5.src}/>
          <FeatureCard reverse={true} title={'2. Pitch us Your Idea'} text={'Next up, pitch us your idea in-front of the judges who would evaluate your idea to help us determine if we’re the perfect fit for you.'} img={f6.src} />
          <FeatureCard title={'3. Get Selected'} text={'Congratulations! You’re now a part of a much bigger community that builds and takes startups right to the doors of success'} img={f7.src} />
        </div>

      </div>

      <div className='flex justify-between items-center bg-black text-white px-[6.5rem] py-20'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-display-lg font-bold font-pd'>Apply as a Founder</h1>
          <p className='text-text-lg font-normal'>Take the first step towards turning your ideas into reality right now - Apply as a Founder today.</p>
        </div>
        <Button color='text-black' bgColor='bg-white' px='px-8' py='py-3.5'>Apply Now</Button>
      </div>

      <FAQs />  
      <ApplicationForm />
      <Footer />


    </div>
  )
}