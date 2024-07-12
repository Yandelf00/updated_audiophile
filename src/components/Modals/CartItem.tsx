import React from 'react'
import Image from 'next/image'


type cartItemProps = {
    cartImage : string|undefined,
    name : string|undefined,
    price : number|undefined,
    amount : number
}

export default function CartItem({cartImage, name, price, amount}:cartItemProps) {
  return (
    <div className='w-[90%] flex flex-row justify-between items-center'>
        <div className='flex flex-row h-[70px] '>
            <Image src={cartImage ? cartImage : ''} alt='' height={70} width={70}/>
            <div className='flex flex-col justify-between p-2'>
                <h2 className='text-[14px] font-bold'>{name}</h2>
                <p className='text-[12px] text-gray'>${price}</p>
            </div>
        </div> 
        <div className='flex flex-row h-[35px] w-[80px] bg-light-gray'>
            <div className='w-[35%] flex justify-center items-center'>-</div>
            <div className='w-[30%] flex justify-center items-center'>{amount}</div>
            <div className='w-[35%] flex justify-center items-center'>+</div>
        </div>
    </div>
  )
}
