import { projectProps } from '@/lib/utils'
import Image from 'next/image'
import React from 'react'

function ProjectCard({label, portfolioImgUrl, portfolioDetails}: projectProps) {
  return (
    <div className='w-[30rem] max-sm:w-80
     h-60 border-2  relative cursor-pointer rounded-lg'>
      <Image
        src={portfolioImgUrl}
        alt={label}
        width={500}
        height={300}
        className='w-full h-full object-cover rounded-lg'
      />
      <div className='absolute flex justify-center items-center bottom-0 right-0 p-2 flex-col w-full h-full bg-primary2 opacity-0 hover:opacity-100 hover:bg-opacity-70 rounded-lg'>
        <h3
        className='subtitle_2 text-secondary_2'
        >
          {label}
        </h3>
        <p
          className='paragraphText p-2 text-white'
        >
          {portfolioDetails}
        </p>
      </div>
    </div>
  )
}

export default ProjectCard