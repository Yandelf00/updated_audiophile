import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

type categoryImage = {
    mobile: string;
    tablet : string;
    desktop : string;
}

type protoProps = {
    name : string;
    description : string;
    index : number;
    categoryImage : categoryImage;
    category : string
    slug:string
}

export default function Proto({name, description, index, categoryImage, category,slug}:protoProps) {
  return (
    <>
        {index % 2 === 0 ? (
            <div className='w-full flex justify-center' key={index}>
                <div className='w-[1000px] mt-16 lg:flex-col flex flex-row lg:items-center justify-between'>
                    <Image src={categoryImage.desktop} alt='alt' height={500} width={500} className='rounded-md'/>
                    <div className='w-[40%] lg:w-1/2 mt-3 sm:w-full sm:text-center lg:justify-start lg:h-[300px] h-[500px] flex flex-col items-start lg:items-center justify-center
                    space-y-7'>
                        <h1 className='text-black text-[35px] font-semibold'>{name}</h1>
                        <p className='text-gray text-[13px]'>{description}</p>
                        <Link href={`${category}/${slug}`}>
                            <button className='bg-orange text-white w-[150px] h-[45px] 
                            text-[13px] hover:bg-light-orange'>SEE PRODUCT</button>
                        </Link>
                    </div>
                </div>
            </div>
        ):(
            <div className='w-full flex justify-center' key={index}>
                <div className='w-[1000px] lg:flex-col-reverse mt-10 flex flex-row lg:items-center justify-between'>
                    <div className='w-[40%] h-[500px] mt-3 sm:text-center sm:w-full lg:w-1/2 lg:justify-start lg:h-[300px]  flex flex-col items-center justify-center
                    space-y-7'>
                        <h1 className='text-black text-[35px] font-semibold'>{name}</h1>
                        <p className='text-gray text-[13px]'>{description}</p>
                        
                        <Link href={`${category}/${slug}`}>
                            <button className='bg-orange text-white w-[150px] h-[45px] 
                            text-[13px] hover:bg-light-orange'>SEE PRODUCT</button>
                        </Link>
                    </div>
                    <Image src={categoryImage.desktop} alt='alt' height={500} width={500} className='rounded-md'/>
                </div>
            </div>
        )
        }
    </>
  )
}
