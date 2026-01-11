
import React from 'react'
import Title from './Title';
import { AnimatedTooltip } from './ui/AnimatedTooltip';
import { backendIcons, frontendIcons, icons, otherTools } from '@/data';
import Image from 'next/image';
import SoftSkills from './SoftSkills';



const Skills = () => {

  return (
    <section className='min-h-screen px-4 lg:px-16 xl:px-32'>
      <div className='border-b border-b-white/10 rounded-[20px] pb-20'>
          <Title text='Explore my' coverText='SKILLS'/>
        
        <div className='flex flex-row items-center justify-center mb-10 w-full'>
          <AnimatedTooltip items={icons}/>
        </div>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3">
          <div className="group/bento shadow-input row-span-1 flex flex-col space-y-4 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.40)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group p-4 md:col-span-2">
            <h2 className='font-semibold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-800 via-white to-white flex gap-2 items-center justify-center text-center mb-6'>Frontend Technologies</h2>
            
              <div className='grid grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-6 justify-between'>
                {
                  frontendIcons?.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2 items-center'>
                        <Image src={item?.icon} alt='skiils-icons' className='w-12 h-12 rounded-full shadow-xl border-2 border-gray-400 p-[3px] group'/>
                        <p className='bg-black-100 text-center w-fit px-2 py-1 text-[10px] shadow-lg border border-gray-400 rounded-full'>{item?.name}</p>
                    </div>
                  ))
                }  
              </div>
              
          </div>

          <div className="group/bento shadow-input row-span-1 flex flex-col space-y-4 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.40)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group p-4 md:col-span-1">
            <h2 className='font-semibold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-800 via-white to-white flex gap-2 items-center justify-center mb-6'>Backend Technologies</h2>
            <div className='grid grid-cols-3 gap-x-6 gap-y-6 justify-between'>
                {
                  backendIcons?.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2 items-center'>
                        <Image src={item?.icon} alt='skiils-icons' className='w-12 h-12 rounded-full shadow-xl border-2 border-gray-400 p-[3px] group'/>
                        <p className='bg-black-100 text-center w-fit px-2 py-1 text-[10px] shadow-lg border border-gray-400 rounded-full'>{item?.name}</p>
                    </div>
                  ))
                }  
              </div>
          </div>

          <div className="group/bento shadow-input row-span-1 flex flex-col space-y-4 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.40)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group p-4 md:col-span-1">
            <h2 className='font-semibold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-800 via-white to-white flex gap-2 items-center justify-center lg:text-center'>Soft Skills</h2>
            
            <SoftSkills/>
         
          </div>

          <div className="group/bento shadow-input row-span-1 flex flex-col space-y-4 rounded-xl border border-[rgba(255,255,255,0.10)] bg-[rgba(40,40,40,0.40)] shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group p-4 md:col-span-2">
            <h2 className='font-semibold bg-clip-text text-transparent bg-gradient-to-b  from-neutral-800 via-white to-white flex gap-2 items-center justify-center'>Other Tools & Languages</h2>

            <div className='grid grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-6 justify-between'>
                {
                  otherTools?.map((item, index) => (
                    <div key={index} className='flex flex-col gap-2 items-center'>
                        <Image src={item?.icon} alt='skiils-icons' className='w-12 h-12 rounded-full shadow-xl border-2 border-gray-400 p-[3px] group'/>
                        <p className='bg-black-100 text-center w-fit px-2 py-1 text-[10px] shadow-lg border border-gray-400 rounded-full'>{item?.name}</p>
                    </div>
                  ))
                }  
              </div>
          </div>

        </div>
      
      </div>
    </section>
  )
}

export default Skills