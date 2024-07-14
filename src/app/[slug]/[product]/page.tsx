"use client"
import React, {useState, useEffect} from 'react'
import data from '@/data/produts.json'
import ProductInfo from '@/components/Products/ProductInfo'
import ProductFeatures from '@/components/Products/ProductFeatures'
import Gallery from '@/components/Products/Gallery'
import Sections from '@/components/Home/Sections'
import BestGear from '@/components/Home/BestGear'


export type image = {
    mobile : string
    tablet : string
    desktop : string 
}

type includedIt = {
    quantity : number
    item :string
}

export type others = {
    slug : string
    name : string
    image : image
}

export type gallery = {
    first : image
    second: image
    third : image
}

export type productType = {
    name : string
    slug : string
    image : image
    price : number
    description : string
    features: string
    includedItems : includedIt[]
    others : others[]
    gallery : gallery
    cartImage : string
}

export default function Products({params}:{params:{product : string}}) {
    const [isIncluded, setIsIncluded] = useState(false)
    const [relevant, setRelevant] = useState<productType>()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        const names = data.products.map((product)=>product.slug)
        if (names.includes(params.product)){
            setIsIncluded(true)
            const helper = data.products.find((product)=>product.slug === params.product)
            setRelevant(helper)
        }
        setIsLoading(false)
    }, [params.product])
    return (
        <>
            {isLoading === true ? (
                <main className='h-full w-full'></main>
            ) : (
                <>
                    {isIncluded === true ? 
                    (
                        <main className='w-full'>
                            <ProductInfo 
                            name={relevant?.name} 
                            description={relevant?.description} 
                            image={relevant?.image.desktop} 
                            imagetab={relevant?.image.tablet}
                            price={relevant?.price} 
                            cartImage={relevant?.cartImage}
                            />                    
                            <ProductFeatures
                            features={relevant?.features}
                            includedItems={relevant?.includedItems}
                            />
                            <Gallery
                            gallery={relevant?.gallery}
                            />
                            <Sections/>
                            <BestGear/>
                        </main>
                    ):(
                        <main className='h-full w-full flex justify-center items-center'>
                            <h1 className='text-black'>404 | Page not found</h1>
                        </main>
                    )}
                </>
            )}
        </>
    )
}
