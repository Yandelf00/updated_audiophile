"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import data from '@/data/produts.json'
import Proto from '@/components/Categories/Proto'
import Sections from '@/components/Home/Sections'
import BestGear from '@/components/Home/BestGear'

type categoryImage = {
    mobile: string;
    tablet : string;
    desktop : string;
}

type product= {
  name : string
  description: string
  categoryImage: categoryImage
}
export default function Section({params}:{params:{slug : string}}) {
  const [sections, setSections]= useState<string[]>(["headphones", "speakers", "earphones"])
  const [relevant, setRelevant] = useState<product[]>([])
  useEffect(()=>{
    if(sections.includes(params.slug)){
      const els= data.products.filter((product)=>product.category === params.slug)
      setRelevant(els)
    }
  },[params.slug])
  return (
    <>
      {sections.includes(params.slug) ? (
        <main className='w-full'>
          <div className='w-full flex justify-center h-[200px] bg-black'>
            <div className='w-[1000px] h-full border border-t-1 border-t-gray border-r-0
            border-l-0 border-b-0 flex justify-center items-center '>
              <h1 className='text-white font-bold text-[50px]'>
                {params.slug}
              </h1>
            </div>
          </div>
          {relevant?.map((rlv, index)=>(
            <div className='w-full' key={index}>
                <Proto name={rlv.name} description={rlv.description} index={index} categoryImage={rlv.categoryImage}/>
            </div>
          ))}
        <Sections/>
        <BestGear/>
        </main>
      ):(
        <main className='w-full h-full flex justify-center items-center'>
          <h1 className='text-black'>404 | Page not found</h1>
        </main>
      )

      }
    </>
  )
}
