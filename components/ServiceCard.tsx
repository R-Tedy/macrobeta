import { serviceProps } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function ServiceCard({label, serviceImgUrl, serviceDetails}: serviceProps
) {
  return (
    <div
      className='shadow-2xl w-52 h-52 relative border-2 rounded-lg border-primary2 cursor-pointer'
    >
      <Image
        src={serviceImgUrl}
        alt={label}
        height={200}
        width={200}
        className='w-full h-full object-cover hover:opacity-50 rounded-lg'
      />
      <div
        className='absolute bottom-0 right-0 w-52 h-52 flex flex-col justify-center items-center p-1 opacity-0 hover:opacity-100 hover:bg-opacity-70 bg-slate-300 rounded-lg'
      >
        <h3 className='subtitle_2 text-primary2'>
          {label}
        </h3>
        <p className='paragraphText'>
          {serviceDetails}
        </p>
      </div>
    </div>
  )
}

export default ServiceCard