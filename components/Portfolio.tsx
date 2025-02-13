import { portfolioData } from '@/constants'
import React from 'react'
import ProjectCard from './ProjectCard'

function Portfolio() {
  return (
    <section 
      className='p-4 '
      id='portfolio'
    >
      <h2 className='text-center subtitle_1'>Portfolio</h2>
      <div className='flex flex-wrap justify-center items-center max-md:flex-col '>
        {portfolioData.map((project)=>(
          <ProjectCard
            key={project.label}
            {...project}
          />
        ))}
      </div>
    </section>
  )
}

export default Portfolio