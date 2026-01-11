import React from 'react'

interface ButtonProps {
  text: string;
  className?: string;
}

const ButtonBgWhite = ({text}: ButtonProps) => {
  return (
    <button className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-white border border-white dark:border-white text-black rounded-lg font-semibold transform hover:-translate-y-1 transition duration-400 cursor-pointer">
        {text}
    </button>
  )
}

export default ButtonBgWhite
