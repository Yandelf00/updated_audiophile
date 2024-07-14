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
    <div className='w-full flex justify-center mt-[150px] pr-5 pl-5'>
        <div className='w-[1000px] sm:hidden h-[600px] sm:flex-col flex flex-row justify-between'>
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
        <div className='w-[1000px] min-h-[600px]   hidden sm:flex-col sm:flex flex-row justify-between'>
            <div className='w-[39%] sm:w-full h-full space-y-5 flex flex-col justify-between'>
                <div className={`w-full h-[290px] rounded-md`}
                    style={{ backgroundImage: `url(${gallery?.first.mobile})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize : 'cover' }}
                ></div>
                <div className={`w-full h-[290px] rounded-md`}
                    style={{ backgroundImage: `url(${gallery?.second.mobile})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize : 'cover' }}
                ></div>
                <div className={`w-full h-[290px] rounded-md`}
                    style={{ backgroundImage: `url(${gallery?.third.mobile})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize : 'cover' }}
                ></div>
            </div>
        </div>
    </div>
  )
}
