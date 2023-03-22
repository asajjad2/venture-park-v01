import React from 'react'
import { Inter } from '@next/font/google'


export default function button({ size, variant, onClick, children, px, py, color, bgColor }) {

        
    let borderColor;
    if(variant == 'secondary') { //outlined
        //remove first 3 characters from bgColor and add border- to it
        borderColor = 'border-' + bgColor.substring(3);
        bgColor = 'bg-transparent';
    } else if(variant == 'tertiary') { //text
        borderColor = 'border-transparent';
        bgColor = 'bg-transparent';
    } 
        
        

  return (
    <button
        className={`${size=='full'?'w-full':'w-auto'} font-inter text-text-md font-medium flex justify-center items-center ${size == 'nav'? 'h-9' : 'h-[52px]'} ${px} ${py} ${color} ${bgColor} rounded-[6px] ${variant=='tertiary'?'':'border-[1px]'} ${borderColor}`}
        onClick={onClick}
    >
        {children}        
    </button>
  )
}
