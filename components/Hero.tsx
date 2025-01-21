"use client";
import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import MagicButton from './MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'

const Hero = () => {
    return (
        <div className="pb-20 pt-36 ">

            <Spotlight
                className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                fill="white"
            />
            <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
            </div>
            <div className='flex justify-left relative my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-6xl lg:max-2-[60vw] flex flex-col items-left justify-left'>
                    <TextGenerateEffect
                        className="text-left text-[40px] md:text-5xl lg:text-6xl mb-4"
                        words='Hi, I&apos;m Matheus'
                    />
                    <p className='text-left md:tracking-wider mb-16 text-md md:text-lg lg:text-2xl'>
                    A Brazilian full-stack developer with 6 years of experience and a serious passion for all things tech. I thrive on building innovative solutions, specializing in ServiceNow and JavaScript frameworks. Let&apos;s turn ideas into reality!
                    </p>
                    <a href="#about">
                        <MagicButton
                            title="About me"
                            icon=""
                            position='right'
                            otherClasses='gap-2'
                        />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero