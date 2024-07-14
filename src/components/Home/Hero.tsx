import React from 'react'
import Image from 'next/image'

export default function Hero() {
    const hero = '/images/home/desktop/image-hero.jpg'
    return (
        <div className='w-full h-[500px] bg-black flex justify-center'>
            <div className='h-full w-[1000px] flex flex-row border lg:justify-center border-l-0 border-r-0 border-b-0
             border-t-gray border-l-none lg:bg-[url("/images/home/tablet/image-hero.jpg")] 
             bg-[url("/images/home/desktop/image-hero.jpg")] bg-no-repeat bg-center bg-contain'
                    ><div className='w-1/2 h-full flex flex-col justify-center items-start lg:pl-0 pl-5 lg:text-center lg:items-center'>
                        <p className='text-gray font-semibold'>N E W &nbsp; P R O D U C T</p>
                        <h1 className='text-white text-[40px] font-bold'>XX9 MARK II HEADPHONES</h1>
                        <p className='text-gray text-[16px] mt-5'>Experience natural, lifelike audio and exceptional</p>
                        <p className='text-gray text-[16px]'>build quality made for the passionate music</p>
                        <p className='text-gray text-[16px]'>enthusiast.</p>
                        <button className='bg-orange text-white h-[40px] w-[150px] text-[12px] mt-10 hover:bg-light-orange transition ease-in-out duration-200'>SEE PRODUCT</button>
                    </div>
            </div>
        </div>
    )
}
