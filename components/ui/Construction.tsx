import React from 'react'

type ConstructionProps = {
    className?: string;
    message?: string;
  };

const Construction = ({ className, message }: ConstructionProps) => {
  return (
    <div className="w-full h-full absolute">
        <img
            src={'/lunar-construction-site.svg'}
            alt={'construction'}
            className='object-cover object-center'
        />
        <div className='relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10'>
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
                {message}
            </div>      
        </div>
    </div>
  )
}

export default Construction