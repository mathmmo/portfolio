"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
// import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
// import { TextRevealCard, TextRevealCardDescription, TextRevealCardTitle, } from './ui/TextRevealCard'

const Hero = () => {
    return (
        <div className="pb-20 pt-36 ">
            <div>
                <Spotlight className="-top-40 -left-10 md:-top-20 md:-left-32 h-screen" fill='white' />
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill='white' />
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill='white' />
            </div>
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className='flex justify-center relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-6xl lg:max-2-[60vw] flex flex-col items-center justify-center'>
                    <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Math&apos;s Portfolio</h2>
                    
                    {/* <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl"
                        words="You know the Business"
                    />
                    <TextGenerateEffect
                        className="text-center text-[40px] md:text-5xl lg:text-6xl mt-0 pt-0 mb-6"
                        words="I know the chemistry"
                        textColor='text-[#51E7FA]'
                    /> */}
                    <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
                        Hi, I&apos;m Matheus, a ServiceNow, Angular, React and Next.js developer based in Brazil.
                    </p>
                    <a href="#about">
                        <MagicButton
                            title="Show My Work"
                            icon={<FaLocationArrow />}
                            position='right'
                            otherClasses='gap-2'
                        />
                    </a>
                </div>
            </div>
        </div>
        // <div className="flex flex-col items-center justify-center min-h-screen bg-black-100 text-gray-300 w-full">
        //   <h1 className="text-9xl font-bold mb-4 bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">Hello, World!</h1>
        //   <p className="text-lg">
        //     This portfolio is a <span className="font-semibold text-blue-500">work in progress</span>. Stay tuned!
        //   </p>
        //   <small className="text-gray-500">By: Matheus Oliveira</small>
        // </div>
    )
}

export default Hero