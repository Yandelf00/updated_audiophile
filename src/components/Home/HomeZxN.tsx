import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeZxN() {
    return (
        <div className='w-full flex justify-center mt-[120px] pl-5 pr-5'>
            <div className='w-[1000px] flex flex-row lg:flex-col h-[550px] bg-orange rounded-lg bg-[url("/images/home/desktop/pattern-circles.svg")] 
            bg-left bg-no-repeat' style={{backgroundSize : '800px 800px'}}>
                <div className='h-full w-[50%] lg:w-full flex  items-end justify-center'>
                    <Image className='lg:hidden' src="/images/home/desktop/image-speaker-zx9.png" alt='tkt' height={350} width={350}/>
                    <Image className='lg:block hidden' src="/images/home/tablet/image-speaker-zx9.png" alt='tkt' height={150} width={150}/>
                </div>
                <div className='w-1/2 lg:w-full h-full flex flex-col items-start lg:items-center space-y-10 justify-center'>
                    <h1 className='text-white text-[40px] font-bold'>ZX9 SPEAKER</h1>
                    <div className='sm:text-center'>
                        <p className='text-white font-thin'>Upgrade to premium speakers that are</p> 
                        <p className='text-white font-thin'>phenomenally built to deliver truly remarkable</p>
                        <p className='text-white font-thin'>sound.</p>
                    </div>
                    <Link href={'/speaker/zx9-speaker'}>
                        <button className='text-white bg-black h-[50px] w-[150px] text-[12px] hover:bg-gray'>SEE PRODUCT</button>
                    </Link>
                </div> 
            </div> 
        </div>
  )
}
