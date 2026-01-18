import React from 'react'
import Title  from './Title'


import { ExpandableCardDemo } from './ProjectCard'
import ButtonBgWhite from './ui/ButtonBgWhite'
import Link from 'next/link'

const Projects = () => {
  return (
    <section
      className='relative min-h-screen px-4 lg:px-16 xl:px-32 py-24 bg-gradient-to-br from-zinc-950 via-black to-zinc-900 overflow-hidden'
      id='projects'
    >
      {/* Animated background gradient orbs */}
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse'></div>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse'></div>

      {/* Header / Title */}
      <div className='mb-16 text-center'>
      <Title text="See My Featured" coverText="PROJECTS" className="mb-16 text-center" />


        <p className='mt-6 text-gray-400 text-lg max-w-2xl mx-auto'>
          Explore a curated selection of my best work, showcasing innovation and creative problem-solving
        </p>
      </div>

      {/* Projects Grid */}
      <div className='mb-16'>
        <ExpandableCardDemo />
      </div>

      {/* Bottom section with decorative line and button */}
      <div className='relative pt-12'>
        <div className='absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent'></div>

        <div className='flex flex-col items-center gap-6 mt-8'>
          <p className='text-gray-500 text-sm tracking-wider uppercase'>
            Want to see more?
          </p>
          <Link href='/allProjects' className='group relative'>
            <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-300'></div>
            <div className='relative'>
              <ButtonBgWhite text='View All Projects' />
            </div>
          </Link>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className='absolute inset-0
        bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),
             linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)]
        bg-[size:50px_50px]
        [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]
        pointer-events-none
      '></div>
    </section>
  )
}

export default Projects
