import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='w-full flex justify-center mt-[150px] bg-black h-[350px]'>
        <div className='w-[1000px] h-full flex flex-col'>
            <div className='flex flex-row justify-between w-full items-center pt-16'>
                <h1 className='text-white text-[25px] font-bold cursor-pointer'>audiophile</h1>
                <div className='flex flex-row space-x-10'>
                    <h2 className='text-white hover:text-orange text-[17px] cursor-pointer transition ease-in-out duration-200'>Home</h2>
                    <h2 className='text-white hover:text-orange text-[17px] cursor-pointer transition ease-in-out duration-200'>Headphones</h2>
                    <h2 className='text-white hover:text-orange text-[17px] cursor-pointer transition ease-in-out duration-200'>Speakers</h2>
                    <h2 className='text-white hover:text-orange text-[17px] cursor-pointer transition ease-in-out duration-200'>Earphones</h2>
                </div>
            </div>
            <div className='w-full flex flex-row justify-between mt-10'>
                <div className='w-1/2 h-[130px]'>
                    <p className='text-gray'>
                        Audiophile is an all in one stop to fulfill your audio needs. 
                        We are a small team of music lovers and sound specialists who 
                        are devoted to helping you get the most out of personal audio. 
                        Come and visit our demo facility - we are open 7 days a week.
                    </p>
                </div>
                <div className='w-1/2 h-[130px] flex flex-row items-end justify-end'>
                    <Image src={"/images/fcb.png"} alt='fcb' height={110} width={110} className='mt-2 cursor-pointer'/>
                    <Image src={"/images/insta.png"} alt='insta' height={90} width={90} className='mb-3 cursor-pointer'/>
                    <Image src={"/images/twit.png"} alt='twit' height={100} width={100} className='mb-1 cursor-pointer'/>
                </div>
            </div>
            <div className='w-full text-gray mt-5'>
                <p>Copyright 2021. All Rights Reserved</p>
            </div>
        </div>
    </div>
  )
}
