import React from 'react'
import Image from 'next/image'

export default function HomeZxN() {
    return (
        <div className='w-full flex justify-center mt-[120px] pl-5 pr-5'>
            <div className='w-[1000px] flex flex-row h-[550px] bg-orange rounded-lg bg-[url("/images/home/desktop/pattern-circles.svg")] 
            bg-left bg-no-repeat' style={{backgroundSize : '800px 800px'}}>
                <div className='h-full w-[50%] flex  items-end justify-center'>
                    <Image className='' src="/images/home/desktop/image-speaker-zx9.png" alt='tkt' height={350} width={350}/>
                </div>
                <div className='w-1/2 h-full flex flex-col items-start space-y-10 justify-center'>
                    <h1 className='text-white text-[40px] font-bold'>ZX9 SPEAKER</h1>
                    <div>
                        <p className='text-white font-thin'>Upgrade to premium speakers that are</p> 
                        <p className='text-white font-thin'>phenomenally built to deliver truly remarkable</p>
                        <p className='text-white font-thin'>sound.</p>
                    </div>
                    <button className='text-white bg-black h-[50px] w-[150px] text-[12px] hover:bg-gray'>SEE PRODUCT</button>
                </div> 
            </div> 
        </div>
  )
}
