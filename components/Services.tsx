import React from 'react'
import Title from './Title'
import Image from 'next/image'
import servicesImg from '../public/assets/images/services-img.jpeg'
import ButtonBgWhite from './ui/ButtonBgWhite'
import ButtonBgBlack from './ui/ButtonBgBlack'
import Link from 'next/link'
import { MdOutlineComputer } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { FaCentercode } from "react-icons/fa6";
import { TbWorldCode } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { GrOptimize } from "react-icons/gr";


const Services = () => {
  return (
     <section className='min-h-screen px-4 xl:px-32 lg:pt-8 mb-6' id='services'>
        <div className='flex flex-col gap-4 border-b border-b-white/10 rounded-[20px] pb-20'>
            <Title text='my' coverText='SERVICES' className='text-center'/>
            <div className='mt-6 flex flex-col gap-6 lg:gap-8'>
                <div className='flex flex-col gap-4 lg:flex-row justify-between'>
                    <div className='flex-2 flex flex-col gap-4 '>
                        <h2 className='font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-3xl text-center lg:text-left'>Digital Solutions</h2> 
                        <p className='text-neutral-400 text-xl text-center lg:text-left'>Transforming businesses with innovative, scalable web and app solutions that captivate users and drive success through cutting-edge technology.</p>

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                            <p className='px-2 py-[4px] border border-gray-200/10 text-center text-sm rounded-xl'>Front-End Development</p>
                            <p className='px-2 py-[4px] border border-gray-200/10 text-center text-sm rounded-xl'>Back-End Development</p>
                            <p className='px-2 py-[4px] border border-gray-200/10 text-center text-sm rounded-xl'>Full-Stack Solutions</p>
                            <p className='px-2 py-[4px] border border-gray-200/10 text-center text-sm rounded-xl'>Custom Web Applications</p>
                            <p className='px-2 py-[4px] border border-gray-200/10 text-center text-sm rounded-xl'>API Integration & Development</p>
                            <p className='px-2 py-[4px] border border-gray-200/10 text-center text-sm rounded-xl'>Performance Optimization:</p>
                        </div>
                        <hr className='bg-white/10 w-full h-[0.5px] border-none my-2'/>
                        <div className='flex gap-6 justify-center lg:justify-start mb-3 lg:mb-0'>
                            <Link href='/#contact'>
                                <ButtonBgWhite text='Hire Me' className='w-fit mx-auto lg:mx-0'/>
                            </Link>
                            <Link href='/allProjects'>
                                <ButtonBgBlack text='Projects' className='w-fit mx-auto lg:mx-0'/>
                            </Link>
                            
                        </div>
                    </div>
                    <Image
                        src={servicesImg}
                        alt='Services Image'
                        className='w-full h-90 object-cover object-center rounded-xl shadow-lg mb-6 flex-1 grayscale-100'
                    />
                    
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <div className='border border-white/10 rounded-xl p-4 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300  hover:bg-neutral-800 hover:cursor-default'>
                        <h3 className='flex items-center gap-2'>
                            <MdOutlineComputer className='text-xl w-8 h-8 p-1 bg-black-100 shadow-lg rounded-full flex items-center justify-center border border-white/10 '/>
                            Front-End Development
                        </h3>
                        <hr className='bg-white/10 w-full h-[0.5px] border-none my-2'/>
                        <p className='text-neutral-400'>
                            I create responsive, intuitive user interfaces using modern frameworks like React, Next.js, and Tailwind CSS to ensure a seamless user experience.
                        </p>
                    </div>
                    <div className='border border-white/10 rounded-xl p-4 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300  hover:bg-neutral-800 hover:cursor-default'>
                        <h3 className='flex items-center gap-2'>
                            <FaLaptopCode className='text-xl w-8 h-8 p-1 bg-black-100 shadow-lg rounded-full flex items-center justify-center border border-white/10 '/>
                            Back-End Development
                        </h3>
                        <hr className='bg-white/10 w-full h-[0.5px] border-none my-2'/>
                        <p className='text-neutral-400'>
                            I build secure, scalable APIs and server-side applications with Node.js, Express, Python & Django, and databases like MongoDB.
                        </p>
                    </div>
                    <div className='border border-white/10 rounded-xl p-4 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300  hover:bg-neutral-800 hover:cursor-default'>
                        <h3 className='flex items-center gap-2'>
                            <FaCentercode className='text-xl w-8 h-8 p-1 bg-black-100 shadow-lg rounded-full flex items-center justify-center border border-white/10 '/>
                           Full-Stack Solutions
                        </h3>
                        <hr className='bg-white/10 w-full h-[0.5px] border-none my-2'/>
                        <p className='text-neutral-400'>
                            From concept to deployment, I deliver end-to-end web applications, integrating front-end and back-end for a cohesive product.
                        </p>
                    </div>
                    <div className='border border-white/10 rounded-xl p-4 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300  hover:bg-neutral-800 hover:cursor-default'>
                        <h3 className='flex items-center gap-2'>
                            <TbWorldCode className='text-xl w-8 h-8 p-1 bg-black-100 shadow-lg rounded-full flex items-center justify-center border border-white/10 '/>
                            Custom Web Applications
                        </h3>
                        <hr className='bg-white/10 w-full h-[0.5px] border-none my-2'/>
                        <p className='text-neutral-400'>
                            Need a unique solution? I develop tailored applications to meet your business needs, from e-commerce to dashboards.
                        </p>
                    </div>
                    <div className='border border-white/10 rounded-xl p-4 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300  hover:bg-neutral-800 hover:cursor-default'>
                        <h3 className='flex items-center gap-2'>
                            <FaCode className='text-xl w-8 h-8 p-1 bg-black-100 shadow-lg rounded-full flex items-center justify-center border border-white/10 '/>
                            API Integration & Development
                        </h3>
                        <hr className='bg-white/10 w-full h-[0.5px] border-none my-2'/>
                        <p className='text-neutral-400'>
                            I integrate third-party APIs or build custom APIs to enhance functionality and connectivity.
                        </p>
                    </div>
                    <div className='border border-white/10 rounded-xl p-4 flex flex-col gap-4 shadow-lg hover:shadow-xl transition-shadow duration-300  hover:bg-neutral-800 hover:cursor-default'>
                        <h3 className='flex items-center gap-2'>
                            <GrOptimize className='text-xl w-8 h-8 p-1 bg-black-100 shadow-lg rounded-full flex items-center justify-center border border-white/10 '/>
                            Performance Optimization
                        </h3>
                        <hr className='bg-white/10 w-full h-[0.5px] border-none my-2'/>
                        <p className='text-neutral-400'>
                            I optimize your web apps for speed, scalability, and SEO using tools like Lighthouse and Next.js optimizations.
                        </p>
                    </div>
                </div>
            </div>
        </div>
     </section>
  )
}

export default Services
