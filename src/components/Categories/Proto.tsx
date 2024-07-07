import React from 'react'
import Image from 'next/image';

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
}

export default function Proto({name, description, index, categoryImage}:protoProps) {
  return (
    <>
        {index % 2 === 0 ? (
            <div className='w-full flex justify-center' key={index}>
                <div className='w-[1000px] mt-16 flex flex-row justify-between'>
                    <Image src={categoryImage.desktop} alt='alt' height={500} width={500}/>
                    <div className='w-[40%] h-[500px] flex flex-col items-start justify-center
                    space-y-7'>
                        <h1 className='text-black text-[35px] font-semibold'>{name}</h1>
                        <p className='text-gray text-[13px]'>{description}</p>
                        <button className='bg-orange text-white w-[150px] h-[45px] 
                        text-[13px] hover:bg-light-orange'>SEE PRODUCT</button>
                    </div>
                </div>
            </div>
        ):(
            <div className='w-full flex justify-center' key={index}>
                <div className='w-[1000px] mt-10 flex flex-row justify-between'>
                    <div className='w-[40%] h-[500px] flex flex-col items-start justify-center
                    space-y-7'>
                        <h1 className='text-black text-[35px] font-semibold'>{name}</h1>
                        <p className='text-gray text-[13px]'>{description}</p>
                        <button className='bg-orange text-white w-[150px] h-[45px] 
                        text-[13px] hover:bg-light-orange'>SEE PRODUCT</button>
                    </div>
                    <Image src={categoryImage.desktop} alt='alt' height={500} width={500}/>
                </div>
            </div>
        )
        }
    </>
  )
}
