"use client"
import React from 'react'
import { useCart } from '@/hooks/useCart'
import { useItemsCart } from '@/hooks/useItemsCart'
import Image from 'next/image'
import CartItem from './CartItem'

export default function CartModal() {
    const isOpen = useCart((state)=>state.isOpen)
    const onClose = useCart((state)=>state.onClose)
    const items = useItemsCart((state)=>state.item)
    const deleteItems = useItemsCart((state)=>state.deleteAllItems)
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
                           <div onClick={(e)=>e.stopPropagation()} className='w-[400px] min-h-[250px] bg-white rounded-md'>
                                {items.length > 0 ? (
                                    <div className='flex h-full pb-6 flex-col justify-between'>
                                        <div>
                                            <div className='flex flex-row justify-between items-center pt-6 pr-4 pl-4 mb-3'>
                                                <h1 className='text-black text-[17px] font-bold'>CART</h1>
                                                <p onClick={deleteItems} className='text-gray hover:text-orange 
                                                text-[15px] cursor-pointer'>Remove all</p>
                                            </div>
                                            <div className='flex flex-col space-y-3'>
                                                {items.map((item, index)=>(
                                                    <div key={index} className='flex flex-col w-full'>
                                                        <div className='w-full flex justify-center'>
                                                            <CartItem cartImage={item.miniImage} name={item.name}
                                                            price={item.price} amount={item.amount} /> 
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        <div className='w-full flex justify-center'>
                                            <button className='w-[80%] h-10 bg-orange 
                                            hover:bg-light-orange text-white font-bold'>CHECKOUT</button>
                                        </div>
                                    </div>
                                ):(
                                    <div className='w-full h-full flex space-y-3 flex-col justify-center items-center '>
                                        <h2 className='text-black'>The cart is empty</h2>
                                        <div className='h-[150px] w-[200px] flex justify-center items-center '>
                                            <Image src={'/images/cart/empty-cart.png'} alt='emptycart'
                                            height={150} width={150}/>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ):(<></>)}
        </>
    )
}
