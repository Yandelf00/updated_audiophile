import React from 'react'


type includedIt = {
    quantity : number|undefined
    item :string|undefined
}

type featuresPropType = {
  features : string|undefined
  includedItems : includedIt[]|undefined
}


export default function ProductFeatures({features, includedItems} : featuresPropType) {
  return (
    <div className='w-full flex justify-center mt-[150px]'>
        <div className='w-[1000px] flex flex-row justify-between'>
            <div className='flex flex-col w-[60%] space-y-5'>
                <h1 className='text-black font-bold text-[30px]'>FEATURES</h1>
                <p className='text-gray text-[13px]'>{features}</p>
            </div> 
            <div className='flex flex-col w-[25%] h-full space-y-3'>
                <h1 className='text-black font-bold text-[30px] mb-1'>IN THE BOX</h1>
                {includedItems?.map((item, index:number)=>(
                  <div className='flex flex-row space-x-2' key={index}>
                    <p className='text-orange font-semibold text-[13px]'>{item.quantity}x</p>
                    <p className='text-gray text-[12px]'>{item.item}</p>
                  </div>
                ))}
            </div> 
        </div>
    </div>
  )
}
