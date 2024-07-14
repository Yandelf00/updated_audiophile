import React from 'react'
import Link from 'next/link'

export default function HomeZxS() {
  return (
    <div className='w-full mt-[50px] flex justify-center pl-5 pr-5'>
        <div className='w-[1000px] h-[300px] bg-[url("/images/home/desktop/image-speaker-zx7.jpg")] 
        rounded-lg flex-row flex lg:bg-[url("/images/home/tablet/image-speaker-zx7.jpg")]
        lg:bg-cover lg:bg-no-repeat sm:bg-cover sm:bg-no-repeat sm:bg-[url("/images/home/mobile/image-speaker-zx7.jpg")]'>
            <div className='w-1/2 h-full sm:w-full flex flex-col space-y-5 justify-center items-center'>
                <h1 className='text-black text-[25px] font-bold'>ZX7 SPEAKER</h1> 
                <Link href={'/speakers/zx7-speaker'}>
                  <button className='h-[40px] w-[150px] border 
                  border-1 hover:bg-black hover:text-white 
                  transition ease-in-out duration-200 border-dark text-[12px]'>SEE PRODUCT</button>
                </Link>
            </div>
        </div>
    </div>
  )
}
