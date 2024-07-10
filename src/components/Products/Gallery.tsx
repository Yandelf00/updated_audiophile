import React from 'react'
import Image from 'next/image'

type image = {
    mobile : string
    tablet : string
    desktop : string
}

type gallery= {
    first : image
    second : image
    third : image 
}

type galleryPropsType = {
    gallery : gallery | undefined
}
export default function Gallery({gallery} : galleryPropsType) {
  return (
    <div className='w-full flex justify-center mt-[150px]'>
        <div className='w-[1000px] h-[600px] flex flex-row justify-between'>
            <div className='w-[39%] h-full flex flex-col justify-between'>
                <div className={`w-full h-[290px] rounded-md`}
                    style={{ backgroundImage: `url(${gallery?.first.desktop})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize : 'cover' }}
                ></div>
                <div className={`w-full h-[290px] rounded-md`}
                    style={{ backgroundImage: `url(${gallery?.second.desktop})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize : 'cover' }}
                ></div>
            </div>
            <div className={`w-[59%] h-full rounded-md`}
                style={{ backgroundImage: `url(${gallery?.third.desktop})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize : 'cover' }}
            ></div>
        </div>
    </div>
  )
}
