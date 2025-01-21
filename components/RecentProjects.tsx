import { projects } from '@/data'
import React from 'react'
// import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'
import { CardContainer, CardBody, CardItem } from './ui/3d-card'
import Image from 'next/image'
import Link from 'next/link'

const RecentProjects = () => {
  return (
    <div className='pb-20' id='projects'>
        <h1 className='heading'>
            Made with 💜
            {/* A small selection of {' '}
            <span className='text-[#a784f9]'>recent projects</span> */}
        </h1>
        <div className='flex flex-wrap items-center justify-center gap-x-24 gap-y-8 pt-4 mt-8'>
            {projects.map(({id, title, des, img, iconLists, link}) => (
                <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw]'>
                    <Link href={link} target='_blank'>                    
                        <CardContainer>
                            <CardBody className="bg-black-100 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[570px] w-[80vw] h-auto rounded-xl p-6 border border-w/[0.2]">
                                <CardItem translateZ={50} translateY={-5} className='mb-4'>
                                    <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                                </CardItem>
                                <CardItem translateZ={50} className='mb-12'>
                                    <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 md:h-16'>{des}</p>
                                </CardItem>
                                <CardItem
                                    translateZ={100}
                                    // rotateX={40}
                                    // rotateZ={-5}
                                    className="w-full mt-4"
                                    >
                                    <Image
                                        src={img}
                                        height="1000"
                                        width="1000"
                                        className="md:h-80 h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                        alt={img}
                                    />
                                </CardItem>
                                <div className="flex justify-between items-center mt-10">
                                    <CardItem
                                        translateZ={60}
                                        translateX={-10}
                                        className="w-auto mt-4"
                                    >
                                        <div className='flex items-center'>
                                            {iconLists.map((icon, index) => (
                                                <div 
                                                    key={icon} 
                                                    className='border border-w/[0.2] rounded-full bg-black lg:w-12 lg:h-12 w-10 h-10 flex items-center justify-center' 
                                                    style={{
                                                        transform: `translateX(-${5 * index * 2}px)`
                                                    }}
                                                >
                                                    <img src={icon} alt={icon} className='p-2' />
                                                </div>
                                            ))}
                                        </div>
                                    </CardItem>
                                    <CardItem
                                        translateZ={60}
                                        translateX={10}
                                        as="button"
                                        className="w-auto mt-4"
                                    >
                                        <div className='flex items-center justify-center gap-1'>
                                            <p className='flex lg:text-xl md:text-xs text-sm text-[#a784f9] font-bold'>Check Live Site</p>
                                            <FaLocationArrow className='ms-3' color='#a784f9'/>
                                        </div>
                                    </CardItem>
                                </div>
                            </CardBody>
                        </CardContainer>
                    </Link>
                </div>
            ))}
        </div>
    </div>
  )
}

export default RecentProjects