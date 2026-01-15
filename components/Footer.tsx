import React from 'react'
import { TextHoverEffect } from './ui/TextHooverEffect'
import Link from 'next/link'

import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa"
import { RiTwitterXFill } from "react-icons/ri"
import { FaLocationDot, FaCode } from "react-icons/fa6"
import { HiSparkles } from "react-icons/hi2"

const Footer = () => {
  const date = new Date().getFullYear();
  
  const socialLinks = [
    { 
      href: "https://github.com/Just-Steve/", 
      icon: FaGithub, 
      label: "GitHub",
      color: "hover:text-gray-900 hover:bg-white"
    },
    { 
      href: "#linkedin", 
      icon: FaLinkedin, 
      label: "LinkedIn",
      color: "hover:text-blue-500 hover:border-blue-500/50 hover:shadow-blue-500/20"
    },
    { 
      href: "#twitter", 
      icon: RiTwitterXFill, 
      label: "Twitter/X",
      color: "hover:text-gray-900 hover:bg-white"
    },
    { 
      href: "#instagram", 
      icon: FaInstagram, 
      label: "Instagram",
      color: "hover:text-pink-500 hover:border-pink-500/50 hover:shadow-pink-500/20"
    }
  ];

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <footer className='relative min-h-[40vh] px-4 xl:px-8 text-gray-300 mt-20 overflow-hidden'>
      {/* Background Gradient Effects */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent pointer-events-none'/>
      <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none'/>
      <div className='absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none'/>
      
      <div className='relative z-10'>
        {/* Brand Section with Tagline */}
        <div className='mb-12 text-center md:text-left'>
          <TextHoverEffect text='Steve dev'/>
          <div className='flex items-center justify-center md:justify-start gap-2 mt-4 text-gray-400'>
            <FaCode className='text-purple-400'/>
            <p className='text-sm md:text-base font-light'>
              Crafting digital experiences with passion & precision
            </p>
            <HiSparkles className='text-yellow-400 animate-pulse'/>
          </div>
        </div>

        {/* Main Footer Content Grid */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          
          {/* Column 1: Quick Links */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center gap-2'>
              <div className='w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full'/>
              Quick Links
            </h3>
            <nav className='flex flex-col gap-3'>
              {quickLinks.map((link, index) => (
                <Link 
                  key={index}
                  href={link.href}
                  className='text-gray-400 hover:text-purple-400 transition-all duration-300 hover:translate-x-2 flex items-center gap-2 group w-fit'
                >
                  <span className='w-0 h-px bg-purple-400 group-hover:w-4 transition-all duration-300'/>
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Column 2: Contact Info */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center gap-2'>
              <div className='w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full'/>
              Get In Touch
            </h3>
            <div className='space-y-4'>
              <div className='flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105'>
                <div className='relative'>
                  <FaLocationDot className='text-xl w-9 h-9 text-neutral-400 p-2 rounded-lg border border-neutral-700/50 bg-neutral-800/50 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:text-purple-400 group-hover:border-purple-500/50'/>
                </div>
                <span className='text-sm text-gray-400 group-hover:text-white transition-colors'>
                  Nairobi, Kenya
                </span>
              </div>
              
              <Link href="mailto:stevegchuhi03@gmail.com" className='flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:scale-105'>
                <div className='relative'>
                  <FaEnvelope className='text-xl w-9 h-9 text-neutral-400 p-2 rounded-lg border border-neutral-700/50 bg-neutral-800/50 backdrop-blur-sm shadow-lg transition-all duration-300 group-hover:text-purple-400 group-hover:border-purple-500/50'/>
                </div>
                <span className='text-sm text-gray-400 group-hover:text-white transition-colors'>
                  stevegchuhi03@gmail.com
                </span>
              </Link>
            </div>
          </div>

          {/* Column 3: Social Links with Description */}
          <div className='space-y-4'>
            <h3 className='text-lg font-semibold text-white mb-6 flex items-center gap-2'>
              <div className='w-1 h-6 bg-gradient-to-b from-purple-500 to-blue-500 rounded-full'/>
              Connect With Me
            </h3>
            <p className='text-sm text-gray-400 mb-6'>
              Follow my journey and let's build something amazing together!
            </p>
            <div className='flex flex-wrap items-center gap-3'>
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <Link 
                    key={index}
                    href={social.href} 
                    target='_blank'
                    aria-label={social.label}
                    className='group relative'
                  >
                    <div className='relative'>
                      <Icon className={`text-2xl w-11 h-11 text-neutral-400 p-2.5 rounded-xl border border-neutral-700/50 bg-neutral-800/50 backdrop-blur-sm shadow-lg transition-all duration-300 ${social.color} group-hover:-translate-y-1 group-hover:shadow-xl`}/>
                      <div className='absolute inset-0 rounded-xl bg-purple-500/0 group-hover:bg-purple-500/5 blur-xl transition-all duration-300'/>
                    </div>
                    <span className='absolute -top-12 left-1/2 -translate-x-1/2 px-3 py-1.5 bg-neutral-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap pointer-events-none border border-neutral-700 shadow-xl'>
                      {social.label}
                      <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-neutral-900 border-r border-b border-neutral-700 rotate-45'/>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
   
        {/* Gradient Divider */}
        <div className='relative w-full h-[1px] my-8'>
          <div className='absolute inset-0 bg-gradient-to-r from-transparent via-gray-400 to-transparent'/>
        </div>

        {/* Bottom Bar */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-4 pb-8'>
          <p className='text-xs md:text-sm text-gray-400/80 text-center md:text-left'>
            &copy; {date} stevegchuhi03@gmail.com • All Rights Reserved
          </p>
          
          <div className='flex items-center gap-6 text-xs md:text-sm'>
            <Link href="#privacy" className='text-gray-400 hover:text-purple-400 transition-colors duration-300'>
              Privacy Policy
            </Link>
            <span className='text-gray-600'>•</span>
            <Link href="#terms" className='text-gray-400 hover:text-purple-400 transition-colors duration-300'>
              Terms of Service
            </Link>
          </div>

          <p className='text-xs text-gray-500 flex items-center gap-2'>
            Made with <span className='text-red-500 animate-pulse'>❤</span> using Next.js
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer