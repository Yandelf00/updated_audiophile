"use client"
import React from 'react'
import Image from 'next/image'
import { useCart } from '@/hooks/useCart'
import Link from 'next/link'
import { AiOutlineMenu } from "react-icons/ai";


export default function Navbar() {
    const onOpen = useCart((state)=>state.onOpen) 
    return (
        <div className='flex justify-center w-full h-[90px] bg-black'>
            <div className='flex flex-row justify-between w-[1000px] items-center pl-4 pr-4'>
                <div className='flex flex-row items-center lg:space-x-5'>
                    <AiOutlineMenu className='hidden lg:block font-bold size-5' color='white'/>
                    <h1 className='text-white text-[25px] font-bold cursor-pointer'>audiophile</h1>
                </div>
                <div className='flex flex-row space-x-10 lg:hidden'>
                    <Link href={'/'}>
                        <h2 className='text-white hover:text-orange text-[17px] cursor-pointer transition ease-in-out duration-200'>Home</h2>
                    </Link>
                    <Link href={'/headphones'}>
                        <h2 className='text-white hover:text-orange text-[17px] cursor-pointer transition ease-in-out duration-200'>Headphones</h2>
                    </Link>
                    <Link href={'/speakers'}>
                        <h2 className='text-white hover:text-orange text-[17px] cursor-pointer transition ease-in-out duration-200'>Speakers</h2>
                    </Link>
                    <Link href={'/earphones'}>
                        <h2 className='text-white hover:text-orange text-[17px] cursor-pointer transition ease-in-out duration-200'>Earphones</h2>
                    </Link>
                </div>
                <Image onClick={onOpen} src="/images/cart/cart.png" alt='tkt' height={30} width={30} className='cursor-pointer'/>
            </div>
        </div>
  )
}
