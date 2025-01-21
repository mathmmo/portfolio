'use client'
// import dynamic from "next/dynamic";
import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";

import Lottie from "react-lottie";
import animationData from '@/data/confetti.json'

import { cn } from "@/lib/utils";

import { BackgroundGradientAnimation } from "./GradienteBG";
import { GlobeDemo } from "./GridGlobe";

import MagicButton from "../MagicButton";

import copy from "copy-to-clipboard";

export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    id,
    img,
    imgClassName,
    titleClassName,
    spareImg

}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    header?: React.ReactNode;
    icon?: React.ReactNode;
    id?: number;
    img?: string;
    imgClassName?: string;
    titleClassName?: string;
    spareImg?: string;
}) => {
    const leftLists = ['JavaScript', 'ServiceNow', 'Angular.js']
    const rightLists = ['React.js', 'Next.js', 'TypeScript']


    const [copied, setCopied] = useState(false);

    const defaultOptions = {
        loop: copied,
        autoplay: copied,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    const handleCopy = () => {
        copy("matheusoliveira.jmml@gmail.com");
        setCopied(true);
    };
    return (
        <div
            className={cn(
                "row-span-1 relative overflow-hidden rounded-3xl border group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
                className
            )}
            style={{
                // background: 'rgb(3,1,24)', 
                background: 'radial-gradient(circle, rgba(60,37,150,1) 0%, rgba(3,1,24,1) 100%)',
                // backgroundColor: 'linear-gradient(90deg, rgba(3,1,24,1) 0%, rgba(53,125,139,1) 100%)'
                backgroundColor: 'linear-gradient(0deg, rgba(127,255,212,1) 0%, rgba(3,1,24,1) 8%)'
            }}
        >
            <div className={`${id === 6 && 'flex justify-center'} h-full`}>
                <div className="w-full h-full absolute">
                    {img && (
                        <img
                            src={img}
                            alt={img}
                            className={cn(imgClassName, 'object-cover object-center')}
                        />
                    )}
                </div>
                <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
                    {spareImg && (
                        <img
                            src={spareImg}
                            alt={spareImg}
                            className={'object-cover object-center w-full h-full'}
                        />
                    )}
                </div>
                {id === 6 && (
                    <BackgroundGradientAnimation>
                        {/* <div className="absolute z-50 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-3xl text-center md:text-4xl lg:text-7xl"></div> */}
                    </BackgroundGradientAnimation>
                )}
                <div className={cn(
                    titleClassName,
                    'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'
                )}>
                    <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                        {description}
                    </div>
                    <div
                        className={`font-sans text-lg lg:text-3xl max-w-96 font-bold z-10`}
                    >
                        {title}
                    </div>

                    {id === 2 && <GlobeDemo />}
                    {id === 3 && (
                        <div className="flex gap-1 lg:gap-4 w-fit absolute -right-3 lg:-right-2">
                            {/* tech stack lists */}
                            <div className="flex flex-col gap-3 lg:gap-4 xl:gap-5">
                                {leftLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-3 py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                                <span className="py-4 lg:py-6 px-3 rounded-lg text-center bg-[#10132E] opacity-50"></span>
                            </div>
                            <div className="flex flex-col gap-3 lg:gap-4 xl:gap-5">
                                <span className="py-4 lg:py-6 px-3 rounded-lg text-center bg-[#10132E] opacity-50"></span>
                                {rightLists.map((item, i) => (
                                    <span
                                        key={i}
                                        className="lg:py-3 py-2 px-3 text-xs lg:text-base opacity-50 rounded-lg text-center bg-[#10132E]"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                    {id === 6 && (
                        <div className="mt-5 relative">
                            <div className={`absolute -bottom-5 right-0`}>
                                <Lottie options={defaultOptions}/>
                            </div>
                            <MagicButton 
                                title={copied ? 'Email copied' : 'Hit me up'}
                                icon={<IoCopyOutline />}
                                position="left"
                                otherClasses={`!bg-[#161a31] gap-2`}
                                handleClick={handleCopy}
                            />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};