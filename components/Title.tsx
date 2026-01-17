import React from 'react'
import { Cover } from './ui/Cover'

interface TitleProps {
  text?: string
  coverText?: string
  className?: string
}

const Title = ({ text, coverText, className = '' }: TitleProps) => {
  return (
    <h1
      className={`uppercase text-center text-xl md:text-2xl lg:text-4xl font-semibold
      max-w-7xl mx-auto mt-6 relative z-20 py-6
      bg-clip-text text-transparent bg-gradient-to-b
      from-neutral-800 via-white to-white
      flex gap-2 items-center justify-center ${className}`}
    >
      {text}
      {coverText && <Cover>{coverText}</Cover>}
    </h1>
  )
}

export default Title
