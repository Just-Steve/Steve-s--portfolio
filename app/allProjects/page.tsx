
import { ExpandableCardDemo } from '@/components/AllProjectsCard'
import React from 'react'
import  Title  from '@/components/Title'


const page = () => {
  return (
    <section className='min-h-screen px-4 lg:px-16 xl:px-32 mb-8 '>
        <div className=' min-h-screen py-12 border-b border-b-white/10 rounded-[20px]'>
            <Title text='Explore All' coverText='PROJECTS' className='text-center' />



            <div>
                <ExpandableCardDemo/>
            </div>
        </div>
    </section> 
  )
}

export default page
