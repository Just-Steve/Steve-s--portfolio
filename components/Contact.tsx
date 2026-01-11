import React from 'react'

import { FaEnvelope } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import Link from 'next/link';
import { FaCircle } from "react-icons/fa6";


const Contact = () => {
  return (
    <section className='px-4 lg:px-16 xl:px-32 pt-10 lg:mt-8' id='contact'>

        <div className="bg-[url('/assets/images/contact-bg.jpg')] bg-cover bg-center bg-no-repeat w-full min-h-[80vh] md:min-h-[50vh] lg:min-h-[80vh] rounded-xl">
            <div className="flex flex-col items-center w-full min-h-[80vh] md:min-h-[50vh] lg:min-h-[80vh] justify-between gap-8 rounded-xl border border-white/10 shadow-xl  bg-black-100/30 backdrop-blur-lg">
        
            <div className='flex flex-col items-center justify-center text-center lg:text-left px-4 lg:px-0'>
                <h2 className='font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-white to-white text-5xl my-6'>Let&apos;s Connect</h2> 
                <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 text-base text-center mx-auto max-w-2xl">
                    Have a project idea, collaboration request, or just want to chat about tech? I&apos;d love to hear from you!
                </p>
            </div>

            <div className='py-5 lg:py-0 lg:min-h-[50vh]'>
                <h2 className='font-semibold bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white text-4xl my-6 md:text-center'>Reach Me Via</h2>    

                <div className='flex flex-col gap-8'>
                    <div className='flex flex-col md:flex-row justify-between gap-10 w-full '>
                        <div>
                            <h4 className='mb-3'>Email & Phone</h4>
                            <div className='flex flex-col gap-2'>
                                <Link href="mailto:stevegchuhi03.com" className='flex items-center gap-2'>
                                    <FaEnvelope className='text-2xl w-10 h-10 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                                    <span className='text-neutral-400'>stevegchuhi03.com</span>
                                </Link>
                                <Link href="tel:+254752943240" target='_blank' className='flex items-center gap-2'>
                                    <FaPhoneAlt className='text-2xl w-10 h-10 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                                    <span className='text-neutral-400'>+254 59794221</span>
                                </Link>
                        </div>

                        </div>

                        <div>
                            <h4 className='mb-3'>Socials</h4>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                                <Link href="https://github.com/Just-Steve/" target='_blank' className='flex hover:text-neutral-700 items-center gap-2'>
                                    <FaGithub className='text-2xl w-10 h-10 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                                    <span className='text-neutral-400'>Github</span>
                                </Link>
                                <Link href="#linkin" target='_blank'  className='flex hover:text-neutral-700 items-center gap-2'>
                                    <FaLinkedin className='text-2xl w-10 h-10 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                                    <span className='text-neutral-400'>LinkedIn</span>
                                </Link> 
                                <Link href="#X" target='_blank'  className='flex hover:text-neutral-700 items-center gap-2'>
                                    <RiTwitterXFill className='text-2xl w-10 h-10 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                                    <span className='text-neutral-400'>Twitter</span>        
                                </Link>
                                <Link href="#insta" target='_blank'  className='flex hover:text-neutral-700 items-center gap-2'>
                                    <FaInstagram className='text-2xl w-10 h-10 text-neutral-400 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group'/>
                                    <span className='text-neutral-400'>Instagram</span>
                                </Link>


                            </div>

                        </div>
                    
                    </div>    
                    <p className='text-[12px] md:text-[15px] text-gray-400 flex items-center gap-2 order-1 md:order-1 p-2 lg:-8 rounded-full border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)]  shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group justify-center'>
                        <div className='relative flex items-center justify-center'>
                        <FaCircle  className='animate-pulse text-[16px] text-green-800/70'/>
                        <FaCircle  className='absolute text-[6px] text-green-500 animate-pulse-fast'/>
                        </div>
                        <span>Available for work & Project Contribution</span>
                    </p>
                </div>
                
            </div>
            </div>
        </div>
      
    </section>
  )
}

export default Contact
