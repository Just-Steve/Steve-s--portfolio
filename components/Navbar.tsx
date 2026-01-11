'use client';

import Link from 'next/link'
import React, { useState } from 'react'

import { LuMenu } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from 'react-icons/ri';
import { TbHexagonLetterAFilled } from "react-icons/tb";






const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleNav = () => {
    setMenuOpen(!menuOpen);
  } 

  return (
    <div className='absolute top-0 left-0 z-40 right-0 lg:mx-auto w-full'>
      <header className='hidden text-gray-300 font-[600] lg:flex justify-between items-center px-8 py-3 mt-2 w-[70vw] mx-auto backdrop-blur bg-black-100/80 rounded-[30px] border-b border-b-white/30 border-t border-t-white/5 shadow-nd'>
      <Link href='/' className='flex gap-1 items-center rounded-[20px] py-[3px]  px-4 '>
        <TbHexagonLetterAFilled className='text-xl'/>
        Steve Dev
      </Link>

        <nav className='hidden lg:flex gap-1'>
          <Link href='/' className='hover:gradient-button text-normal text-neutral-300 hover:text-neutral-400  rounded-[20px] py-[3px] px-4 '>Home</Link>
          <Link href='/#projects' className='rounded-[20px]  text-normal text-neutral-300 hover:text-neutral-400   py-[3px] px-4 '>Projects</Link>
          <Link href='/#about' className='rounded-[20px]  text-normal text-neutral-300 hover:text-neutral-400   py-[3px] px-4 '>About</Link>
          <Link href='/#contact' className='rounded-[20px]  text-normal text-neutral-300 hover:text-neutral-400   py-[3px] px-4 '>Contact</Link>
        </nav>
      </header>

      <header className='flex text-gray-300 font-[600] lg:hidden justify-between items-center px-4 py-3 w-full rounded-[30px] mt-2 mx-auto relative'>
        <Link href='/' className='flex gap-1 items-center rounded-md py-[3px] shadow-sm lg:shadow-none px-2 logo'>
            <TbHexagonLetterAFilled className='text-xl'/>
            Steve Dev
        </Link>

        {
          menuOpen && 
          <nav className={`${menuOpen ? 'opacity-100 ' : 'opacity-0 hidden'}  fixed top-0 left-0 text-lg md:text-2xl w-full h-screen text-gray-300 flex flex-col items-center justify-between gap-4 py-20 side-bar backdrop-blur-lg z-20 transition-opacity duration-500 ease-in-out`}>

            <div className='flex flex-col items-center gap-4'>
              <Link href='/ ' onClick={toggleNav} className='sidebar-link hover:gradient-button hover:text-gray-400 rounded-[20px] py-[3px] px-4'>Home</Link>
              <Link href='/#projects' onClick={toggleNav} className='sidebar-link rounded-[20px] py-[3px] px-4 hover:text-gray-400'>Projects</Link>
              <Link href='/#about' onClick={toggleNav} className='sidebar-link rounded-[20px] py-[3px] px-4 hover:text-gray-400'>About</Link>
              <Link href='/#contact' onClick={toggleNav} className='sidebar-link rounded-[20px] py-[3px] px-4 hover:text-gray-400'>Contact</Link>
            </div>

           <div className='flex items-center gap-2 text-lg md: sidebar-link order-2 md:order-3 mb-4'>
              <Link href="https://github.com/Just-Steve/" target='_blank'  className='flex hover:text-neutral-700 items-center gap-2'>
                  <FaGithub className='text-2xl w-9 h-9 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
        
              </Link>
              <Link href="#linkin" target='_blank'  className='flex hover:text-neutral-700 items-center gap-2'>
                  <FaLinkedin className='text-2xl w-9 h-9 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                
              </Link> 
              <Link href="#twitter" target='_blank'  className='flex hover:text-neutral-700 items-center gap-2'>
                  <RiTwitterXFill className='text-2xl w-9 h-9 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
              
              </Link>
              <Link href="#instagram" target='_blank'  className='flex hover:text-neutral-700 items-center gap-2'>
                  <FaInstagram className='text-2xl w-9 h-9 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
              
              </Link>
            </div>

       

            <IoClose className='absolute top-4 right-0 mx-4 hover:cursor-pointer logo text-3xl py-[3px] rounded-md shadow-sm w-[40px] ' onClick={toggleNav}/>
          </nav>
        }
      

        <LuMenu className=' hover:cursor-pointer logo text-3xl py-[3px] rounded-md shadow-sm w-[40px] ' onClick={toggleNav}/>
      </header>
    </div>
  )
}

export default Navbar