import React from 'react'

export default function HomeYx() {
  return (
    <div className='mt-[50px] w-full flex justify-center pl-5 pr-5'>
        <div className='w-[1000px]  flex flex-row justify-between'>
            <div className='w-[49%] h-[300px] rounded-lg bg-[url("/images/home/desktop/image-earphones-yx1.jpg")]'>
            </div>
            <div className='w-[49%] h-[300px] bg-light-gray rounded-lg flex flex-col items-start pl-24 space-y-7 justify-center'>
                <h1 className='text-black text-[25px] font-bold'>YX1 EARPHONES</h1> 
                <button className='h-[40px] w-[150px] border 
                border-1 hover:bg-black hover:text-white 
                transition ease-in-out duration-200 border-dark text-[12px]'>SEE PRODUCT</button>
            </div>
        </div>
    </div>
  )
}
