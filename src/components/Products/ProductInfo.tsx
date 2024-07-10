import React from 'react'
import Image from 'next/image'

type productInfoProps = {
    name : string |undefined ,
    image : string |undefined,
    description: string |undefined,
    price : number | undefined
}

export default function ProductInfo({name, image, description, price} : productInfoProps) {
  return (
    <div className='w-full flex justify-center'>
        <div className='w-[1000px] flex flex-row mt-[150px] justify-between'>
            <Image src={image ? image : ''} alt='idk' height={500} width={500} className='rounded-md'/>
            <div className='h-full w-[41%] flex flex-col justify-center space-y-10'>
                <h1 className='text-black font-bold text-[40px]'>{name}</h1>
                <p className='text-gray text-[13px]'>{description}</p>
                <p className='text-black font-semibold'>${price}</p>
                <div className='flex flex-row space-x-3'>
                    <div className='w-[130px] h-[45px] bg-light-gray'></div>
                    <button className='w-[160px] h-[45px] bg-orange text-[13px] text-white font-bold'>ADD TO CART</button>
                </div>
            </div>
        </div>
    </div>
  )
}
