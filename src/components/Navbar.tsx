"use client"
import React from 'react'
import Image from 'next/image'
import { useCart } from '@/hooks/useCart'

export default function Navbar() {
    const onOpen = useCart((state)=>state.onOpen) 
    return (
        <div className='flex justify-center w-full h-[90px] bg-black'>
            <div className='flex flex-row justify-between w-[1000px] items-center'>
                <h1 className='text-white text-[25px] font-bold cursor-pointer'>audiophile</h1>
                <div className='flex flex-row space-x-10'>
                    <h2 className='text-white hover:text-orange text-[17px] cursor-pointer'>Home</h2>
                    <h2 className='text-white hover:text-orange text-[17px] cursor-pointer'>Headphones</h2>
                    <h2 className='text-white hover:text-orange text-[17px] cursor-pointer'>Speakers</h2>
                    <h2 className='text-white hover:text-orange text-[17px] cursor-pointer'>Earphones</h2>
                </div>
                <Image onClick={onOpen} src="/images/cart/cart.png" alt='tkt' height={30} width={30} className='cursor-pointer'/>
            </div>
        </div>
  )
}
