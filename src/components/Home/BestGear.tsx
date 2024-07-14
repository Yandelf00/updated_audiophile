import React from 'react'

export default function BestGear() {
  return (
    <div className='w-full flex justify-center mt-[110px] pl-5 pr-5'>
        <div className='w-[1000px] h-[500px] lg:h-[1000px] flex flex-row lg:flex-col justify-between'>
            <div className='lg:hidden w-[48%]'>
              <Text/>
            </div>
            <div className='h-full w-[48%] lg:w-full bg-orange lg:bg-no-repeat
             lg:bg-cover  bg-[url("/images/shared/desktop/image-best-gear.jpg")] 
             rounded-lg bg-[url("/images/shared/tablet/image-best-gear.jpg")'></div>
            <div className='hidden lg:flex justify-center'>
              <Text/>
            </div>
        </div>
    </div>
  )
}

function Text(){
  return(
    <div className='h-full w-full lg:w-[70%] lg:text-center flex flex-col justify-center items-center space-y-5'>
        <h1 className='text-black text-[38px] font-bold'>BRINGING YOU THE <span className='text-orange'>BEST</span> AUDIO GEAR</h1>
        <p className='text-gray text-[13px]'>Located at the heart of New York City, Audiophile is 
            the premier store for high end headphones, earphones, speakers, 
            and audio accessories. We have a large showroom and luxury demonstration 
            rooms available for you to browse and experience a wide range of our products. 
            Stop by our store to meet some of the fantastic people who make Audiophile the 
            best place to buy your portable audio equipment.</p>
    </div>
  )
}