import React from 'react'
import Image from 'next/image'

export default function Sections() {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[1000px] mt-[150px] flex flex-row space-x-3 items-center justify-center'>
            <div className='w-[30%] relative group h-[200px] bg-light-gray rounded-md flex flex-col items-center drop-shadow-md'>
                <Image src={'/images/category-headphones/desktop/headphones-main.png'} alt='markeone' className='absolute top-[-80px]' height={200} width={200}/>
                <h1 className='mt-[110px] text-[17px] text-black font-semibold'>HEADPHONES</h1>
                <p className='cursor-pointer text-[15px] mt-2 text-gray group-hover:text-orange'>SHOP</p>
            </div>
            <div className='w-[30%] relative group h-[200px] bg-light-gray rounded-md flex flex-col items-center drop-shadow-md'>
                <Image src={'/images/category-speakers/desktop/lespeaker.png'} alt='markeone' className='absolute top-[-80px]' height={200} width={200}/>
                <h1 className='mt-[110px] text-[17px] text-black font-semibold'>SPEAKERS</h1>
                <p className='cursor-pointer text-[15px] mt-2 text-gray group-hover:text-orange'>SHOP</p>
            </div>
            <div className='w-[30%] relative group h-[200px] bg-light-gray rounded-md flex flex-col items-center drop-shadow-md'>
                <Image src={'/images/category-earphones/desktop/earphoones.png'} alt='markeone' className='absolute top-[-80px]' height={200} width={200}/>
                <h1 className='mt-[110px] text-[17px] text-black font-semibold'>EARPHONES</h1>
                <p className='cursor-pointer text-[15px] mt-2 text-gray group-hover:text-orange'>SHOP</p>
            </div>
        </div>
    </div>
  )
}