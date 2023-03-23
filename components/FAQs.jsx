import React from 'react'
import FAQ from './elements/FAQ'
export default function FAQs() {
  return (
    <div className='flex flex-col p-[6.5rem] gap-20 items-center'>
    <h1 className='text-display-lg font-bold font-pd'>Frequently Asked Questions</h1>
    <div className='grid grid-cols-2 gap-16'>
      <FAQ question={'What is Venture Park?'}
        answer={'Venture Park is an incubation center that helps entrepreneurs bring their ideas to life by providing resources, support, and connections. We offer a range of services, including idea generation, MVP development, and fundraising, to help entrepreneurs navigate the journey of entrepreneurship.'}
      />

      <FAQ question={'What services does Venture Park provide?'}
        answer={'We provide a range of services to entrepreneurs, including idea generation and validation, MVP development, marketing and fundraising, mentorship and coaching, networking and community building, customized incubation programs, workshops and events, legal and financial support, access to funding, and post-incubation support.'}
      />

      <FAQ question={'Who is the target market for Venture Park?'}
        answer={'We target entrepreneurs who are looking to turn their ideas into reality, regardless of their stage, whether they are just in the idea generation stage, working on their MVP, or seeking funding.'}
      />

      <FAQ question={'How does Venture Park help entrepreneurs?'}
        answer={'We provide entrepreneurs with the resources, support, and connections they need to bring their ideas to life. This includes mentorship, networking opportunities, and access to funding. We also provide services such as idea generation and validation, MVP development, marketing and fundraising, and more.'}
      />
    </div>
  </div>
  )
}
