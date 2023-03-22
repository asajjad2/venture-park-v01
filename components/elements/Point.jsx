import React from 'react'

export default function Point({svg, text}) {
  return (
    <div className='flex flex-col items-center justify-center gap-4 w-60 h-39'>
      <img src={svg} alt="svg" />
      <div className='text-text-xl font-medium text-center'>{text}</div>
    </div>
  )
}
