import React from 'react'

export default function HomeZxS() {
  return (
    <div className='w-full mt-[50px] flex justify-center'>
        <div className='w-[1000px] h-[300px] bg-[url("/images/home/desktop/image-speaker-zx7.jpg")] rounded-lg flex-row flex'>
            <div className='w-1/2 h-full flex flex-col space-y-5 justify-center items-center'>
                <h1 className='text-black text-[25px] font-bold'>ZX7 SPEAKER</h1> 
                <button className='h-[40px] w-[150px] border 
                border-1 hover:bg-black hover:text-white 
                transition ease-in-out duration-200 border-dark text-[12px]'>SEE PRODUCT</button>
            </div>
        </div>
    </div>
  )
}
