import React from 'react'

export default function BestGear() {
  return (
    <div className='w-full flex justify-center mt-[110px]'>
        <div className='w-[1000px] h-[500px] flex flex-row justify-between'>
            <div className='h-full w-[48%] flex flex-col justify-center items-center space-y-5'>
                <h1 className='text-black text-[38px] font-bold'>BRINGING YOU THE <span className='text-orange'>BEST</span> AUDIO GEAR</h1>
                <p className='text-gray text-[13px]'>Located at the heart of New York City, Audiophile is 
                    the premier store for high end headphones, earphones, speakers, 
                    and audio accessories. We have a large showroom and luxury demonstration 
                    rooms available for you to browse and experience a wide range of our products. 
                    Stop by our store to meet some of the fantastic people who make Audiophile the 
                    best place to buy your portable audio equipment.</p>
            </div>
            <div className='h-full w-[48%] bg-[url("/images/shared/desktop/image-best-gear.jpg")] rounded-lg'></div>
        </div>
    </div>
  )
}
