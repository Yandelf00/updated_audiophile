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
                </div>
            ):(<></>)}
        </>
    )
}
