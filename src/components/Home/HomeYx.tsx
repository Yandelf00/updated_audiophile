import React from 'react'
import Link from 'next/link'

export default function HomeYx() {
  return (
    <div className='mt-[50px] w-full flex justify-center pl-5 pr-5'>
        <div className='w-[1000px] sm:flex-col sm:space-y-[50px] flex flex-row justify-between'>
            <div className='w-[49%] sm:w-full h-[300px] lg:bg-[url("/images/home/tablet/image-earphones-yx1.jpg")] lg:bg-cover lg:bg-no-repeat rounded-lg 
            bg-[url("/images/home/desktop/image-earphones-yx1.jpg")]'>
            </div>
            <div className='w-[49%] sm:w-full h-[300px] bg-light-gray rounded-lg flex flex-col items-start pl-24 lg:pl-5 space-y-7 justify-center'>
                <h1 className='text-black text-[25px] font-bold'>YX1 EARPHONES</h1> 
                <Link href={'/earphones/yx1-earphones'}>
                  <button className='h-[40px] w-[150px] border 
                  border-1 hover:bg-black hover:text-white 
                  transition ease-in-out duration-200 border-dark text-[12px]'>SEE PRODUCT</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
