import React from 'react'
import Image from 'next/image'
import ben10n from "@/public/assets/images/ben10n.jpeg";
import {FlipWords} from "./ui/FlipWords";
import { ColourfulText } from './ui/ColorfulText'
import Link from 'next/link'
import ButtonBgBlack from './ui/ButtonBgBlack'
import ButtonBgWhite from './ui/ButtonBgWhite'

const Hero = () => {
  return (
    <section className='min-h-[80vh] lg:min-h-screen bg-[url(/assets/images/hero-bg.png)] bg-cover bg-center relative overflow-hidden'>
      <div className="flex flex-col uppercase gap-3 lg:gap-5 justify-center items-center min-h-[80vh] lg:min-h-screen w-full bg-black/20 backdrop-blur-md px-4">
        <div className="flex gap-2 justify-center items-center text-sm border border-white/30 rounded-full pr-2 shadow-md w-fit bg-black-100/20 backdrop-blur-sm">
          <Image
            src={ben10n}
            alt="Project 1 Screenshot"
            width={30}
            height={30}
            className="rounded-full border-2 border-white/30 object-cover"
          />
          <FlipWords words={["Habari, mimi ni Steve Dev ","Hi, I am Steve Dev","Hola, soy Steve Dev","Bonjour, je suis Steve Dev", "Nǐ hǎo, wǒ shì Steve Dev", "Namaste, main Steve Dev hoon"]}/>
          
        </div>
        <h1 className="text-4xl md:text-7xl text-center lg:max-w-[800px] leading-[1.2] lg:leading-[1] mb-3 lg:mb-0 text-neutral-200">Building Scalable & Intelligent Web Solutions</h1>
        <h1 className="flex gap-2 text-3xl md:text-4xl items-center justify-center text-center mb-2 px-16 md:px-0">
          <span>
            <ColourfulText text='with full stack development'/>
          </span>
        </h1>
              {/* <p className="text-lg font-normal dark:text-neutral-400">for scalable, secure and robust web apps.</p> */}

        <div className="flex gap-4 mt-3 lg:mt-0">
          <Link href='/#projects'>
            <ButtonBgWhite text='See My Work'/>
          </Link>
          <Link href='/#contact'>
            <ButtonBgBlack text='Contact Me'/>
          </Link>
      
        </div>
      </div>
    </section>
  )
}

export default Hero