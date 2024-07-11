"use client"
import React from 'react'
import { useCart } from '@/hooks/useCart'


export default function CartModal() {
    const isOpen = useCart((state)=>state.isOpen)
    const onClose = useCart((state)=>state.onClose)
    return (
        <>
            {isOpen === true ? (
                <div onClick={onClose} className='z-50 
                overflow-y-hidden 
                overflow-x-hidden 
                fixed outline-none 
                inset-0 bg-shadow '>
                    <div className='w-full flex justify-center mt-[90px]'>
                        <div className='w-[1000px] flex justify-end'>
                           <div className='w-[400px] h-[200px] bg-white rounded-md'>

                            </div>
                        </div>
                    </div>
                </div>
            ):(<></>)}
        </>
    )
}
