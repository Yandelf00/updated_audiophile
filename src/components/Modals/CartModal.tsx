"use client"
import React from 'react'
import { useCart } from '@/hooks/useCart'


export default function CartModal() {
    const isOpen = useCart((state)=>state.isOpen)
    const onClose = useCart((state)=>state.onClose)
    return (
        <>
            {isOpen === true ? (
                <div onClick={onClose} className='z-50 overflow-hidden fixed inset-0 bg-shadow'>
                    
                </div>
            ):(<></>)}
        </>
    )
}
