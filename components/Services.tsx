import { ServiceData } from '@/constants'
import React from 'react'
import ServiceCard from './ServiceCard'

function Services() {
  return (
    <section 
      className='mt-[-18vh] '
      id='services'
    >
      <div>
        <h2  className='text-center subtitle_1'>
          Services
        </h2>
        <div
          className='flex flex-wrap w-10/12 mx-auto p-4 gap-8 justify-center items-center'
        >
          {ServiceData.map((service)=>(
            <ServiceCard
              key={service.label}
              {...service}
            />
          ))}
        </div> 
      </div>
    </section>
  )
}

export default Services