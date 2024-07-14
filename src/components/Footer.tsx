import React from 'react'
import Image from 'next/image'
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Link from 'next/link';

export default function Footer() {
  return (
    <div className='w-full flex justify-center mt-[150px] bg-black min-h-[350px] pl-5 pr-5 sm:pb-4'>
        <div className='w-[1000px] h-full flex flex-col'>
            <div className='flex flex-row justify-between sm:items-center lg:justify-start w-full lg:space-y-3 items-center pt-16 lg:pt-4 lg:items-start lg:flex-col'>
                <h1 className='text-white text-[25px] font-bold cursor-pointer'>audiophile</h1>
                <div className='flex flex-row space-x-10 sm:flex-col sm:items-center sm:space-x-0'>
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
            </div>
            <div className='w-full flex flex-row justify-between mt-10'>
                <div className='w-1/2 lg:w-full sm:text-center  h-[130px]'>
                    <p className='text-gray'>
                        Audiophile is an all in one stop to fulfill your audio needs. 
                        We are a small team of music lovers and sound specialists who 
                        are devoted to helping you get the most out of personal audio. 
                        Come and visit our demo facility - we are open 7 days a week.
                    </p>
                </div>
            </div>
        <div className='w-full text-gray justify-between sm:items-center sm:flex-col sm:space-y-5 flex flex-row mt-5'>
                <p>Copyright 2021. All Rights Reserved</p>
                <div className='w-1/2 flex flex-row sm:items-center sm:justify-center space-x-5 items-end justify-end'>
                    <FaFacebook color='white' className='w-[24px] h-[24px] cursor-pointer'/>
                    <FaInstagram color='white' className='w-[24px] h-[24px] cursor-pointer'/>
                    <FaTwitter color='white' className='w-[24px] h-[24px] cursor-pointer'/>
                </div>
            </div>
        </div>
    </div>
  )
}
