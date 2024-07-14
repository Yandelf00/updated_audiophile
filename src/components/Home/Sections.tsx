import React from 'react'
import Image from 'next/image'

export default function Sections() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[1000px] mt-[150px] flex flex-row sm:flex-col lg:space-x-2 sm:space-y-16 space-x-3 items-center justify-center'>
            <div className='w-[30%] sm:w-[90%] relative group h-[200px] bg-light-gray rounded-md flex flex-col items-center drop-shadow-md'>
                <Image src={'/images/category-headphones/desktop/headphones-main.png'} alt='markeone' className='absolute top-[-80px]' height={200} width={200}/>
                <h1 className='mt-[110px] text-[17px] text-black font-semibold'>HEADPHONES</h1>
                <div className='flex flex-row items-center mt-3 space-x-2'>
                    <p className='cursor-pointer text-[15px] text-gray group-hover:text-orange'>SHOP</p>
                    <Right/>
                </div>
            </div>
            <div className='w-[30%] sm:w-[90%] relative group h-[200px] bg-light-gray rounded-md flex flex-col items-center drop-shadow-md'>
                <Image src={'/images/category-speakers/desktop/lespeaker.png'} alt='markeone' className='absolute top-[-80px]' height={200} width={200}/>
                <h1 className='mt-[110px] text-[17px] text-black font-semibold'>SPEAKERS</h1>
                <div className='flex flex-row items-center mt-3 space-x-2'>
                    <p className='cursor-pointer text-[15px] text-gray group-hover:text-orange'>SHOP</p>
                    <Right/>
                </div>
            </div>
            <div className='w-[30%] sm:w-[90%] relative group h-[200px] bg-light-gray rounded-md flex flex-col items-center drop-shadow-md'>
                <Image src={'/images/category-earphones/desktop/earphoones.png'} alt='markeone' className='absolute top-[-80px]' height={200} width={200}/>
                <h1 className='mt-[110px] text-[17px] text-black font-semibold'>EARPHONES</h1>
                <div className='flex flex-row items-center mt-3 space-x-2'>
                    <p className='cursor-pointer text-[15px] text-gray group-hover:text-orange'>SHOP</p>
                    <Right/>
                </div>
            </div>
        </div>
    </div>
  )
}


function Right(){
    return(
        <div className='mb-[2px]'>
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd"/></svg>
        </div>
    )
}