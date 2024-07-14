"use client"
import React, {useState} from 'react'
import Image from 'next/image'
import { useItemsCart } from '@/hooks/useItemsCart'


type productInfoProps = {
    name : string |undefined ,
    image : string |undefined,
    imagetab:string |undefined
    description: string |undefined,
    price : number | undefined,
    cartImage : string | undefined
}

export default function ProductInfo({name, image, imagetab, description, price, cartImage} : productInfoProps) {
    const [num, setNum] = useState(1)
    const addToCart = useItemsCart((state)=>state.addItem)

    function addOne(){
        setNum((num)=>num+1)
    }
    function minOne(){
        if (num > 1){
            setNum((num)=>num-1)
        }
    }
    function addCart(miniImage:string|undefined, name:string|undefined, price:number|undefined, amount:number){
        addToCart(miniImage, name, price, amount)
    }
    return (
        <div className='w-full flex justify-center'>
            <div className='w-[1000px] flex flex-row lg:flex-col lg:items-center sm:pl-0  pl-5 mt-[150px] justify-between '>
                <Image src={image ? image : ''} alt='idk' height={500} width={500} className='rounded-md lg:hidden'/>
                <Image src={image ? image : ''} alt='idk' height={400} width={400} className='rounded-md hidden lg:block'/>
                <div className='h-full w-[41%] lg:w-[70%] lg:text-center lg:mt-5 flex flex-col justify-center space-y-10'>
                    <h1 className='text-black font-bold text-[40px]'>{name}</h1>
                    <p className='text-gray text-[13px]'>{description}</p>
                    <p className='text-black font-semibold'>${price}</p>
                    <div className='flex flex-row lg:justify-center space-x-3'>
                        <div className='w-[130px] h-[45px] bg-light-gray flex flex-row'>
                            <div onClick={minOne} className='w-[35%] flex hover:bg-gray hover:text-orange 
                            justify-center items-center transition ease-in-out duration-200 cursor-pointer'>
                                -
                            </div> 
                            <div className='w-[30%] flex justify-center items-center'>
                                {num}
                            </div> 
                            <div onClick={addOne} className='w-[35%] flex hover:bg-gray hover:text-orange 
                            justify-center items-center transition ease-in-out duration-200 cursor-pointer'>
                                +
                            </div> 
                        </div>
                        <button onClick={()=>addCart(cartImage, name, price, num)} className='w-[160px] h-[45px] bg-orange hover:bg-light-orange
                        transition ease-in-out duration-200 text-[13px] text-white font-bold'>ADD TO CART</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
