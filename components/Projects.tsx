import React from 'react'
import Title from './Title'
import { ExpandableCardDemo } from './ProjectCard'
import ButtonBgWhite from './ui/ButtonBgWhite'
import Link from 'next/link'

const Projects = () => {
  return (
    <section className='min-h-screen px-4 lg:px-16 xl:px-32 mb-8 ' id='projects'>

      <div className='border-b border-b-white/10 rounded-[20px] pb-20'>
        <div>
          <Title text='See My feautured ' coverText='PROJECTS'/>
        </div>

        <div>
          <ExpandableCardDemo/>
        </div>

        <Link href='/allProjects' className='flex justify-center mt-6'>
          <ButtonBgWhite text='View All Projects'/>
        </Link>
      </div>
     
    </section>
  )
}

export default Projects
