"use client"
import React, {useState, useEffect} from 'react'
import data from '@/data/produts.json'
import ProductInfo from '@/components/Products/ProductInfo'

type image = {
    mobile : string
    tablet : string
    desktop : string 
}

type productType = {
    name : string
    slug : string
    image : image
    price : number
    description : string
}

export default function Products({params}:{params:{product : string}}) {
    const [isIncluded, setIsIncluded] = useState(false)
    const [relevant, setRelevant] = useState<productType>()
    useEffect(()=>{
        const names = data.products.map((product)=>product.slug)
        if (names.includes(params.product)){
            setIsIncluded(true)
            const helper = data.products.find((product)=>product.slug === params.product)
            setRelevant(helper)
        }
    }, [params.product])
    return (
        <>
            {isIncluded === true ? 
            (
                <main className='w-full'>
                    <ProductInfo 
                    name={relevant?.name} 
                    description={relevant?.description} 
                    image={relevant?.image.desktop} 
                    price={relevant?.price} 
                    />                    
                </main>
            ):(
                <main className='h-full w-full flex justify-center items-center'>
                    <h1 className='text-black'>404 | Page not found</h1>
                </main>
            )}
        </>
    )
}
