import React from 'react'

export default function FAQ({question, answer}) {
  return (
    <div className='space-y-4'>
        <h4 className='text-text-xl2 font-bold'>{question}</h4>
        <p className='text-text-sm font-normal'>{answer}</p>
    </div>
  )
}
