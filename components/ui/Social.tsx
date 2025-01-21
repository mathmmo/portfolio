import Link from 'next/link'
import React from 'react'
import { FaCodepen, FaGithub, FaLinkedin } from 'react-icons/fa6'

const Social = () => {
  return (
    <div className="hidden fixed left-2 top-1/2 transform -translate-y-1/2 z-10 md:flex flex-col gap-2"> 
        <Link href="https://www.linkedin.com/in/mathmmo/" target='_blank'>
            <button className="px-4 py-4 text-[#a784f9] text-sm rounded-full group/social">
                <FaLinkedin size={24} className='transition duration-100 group-hover/social:scale-110 group-hover/social:drop-shadow-glow' />
            </button>
        </Link>
        <Link href="https://github.com/mathmmo" target='_blank'>
            <button className="px-4 py-4 text-[#a784f9] text-sm rounded-full group/social">
                <FaGithub size={24} className='transition duration-100 group-hover/social:scale-110 group-hover/social:drop-shadow-glow' />
            </button>
        </Link>
        <Link href="https://codepen.io/math-dev" target='_blank'>
            <button className="px-4 py-4 text-[#a784f9] text-sm rounded-full group/social">
                <FaCodepen size={24} className='transition duration-100 group-hover/social:scale-110 group-hover/social:drop-shadow-glow' />
            </button>
        </Link>
    </div>
  )
}

export default Social