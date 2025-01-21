import { approach } from '@/data'
import React from 'react'
import { Button } from './ui/movingBorder'

const Experience = () => {
  return (
    <div className='pb-20' id='approach'>
        <h1 className='heading'>
            {/* My {' '}
            <span className='text-[#a784f9]'>approach</span> */}
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
            {approach.map((card) => (
                <Button
                    key={card.id}
                    duration={Math.floor(Math.random() * 10000) + 10000}
                    borderRadius='1.75rem'
                    className='group/card flex-1 text-white border-neutral-200 dark:border-slate-800'
                >
                    <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
                        <img src={card.thumbnail} alt={card.thumbnail} className='group-hover/card:scale-125 transition-transform duration-300 lg:w-36 md:w-28 w-20' />
                        <div className='lg:ms-5'>
                            <h1 className='text-start text-xl md:text-2xl font-bold mt-4'>{card.title}</h1>
                            <p className='text-start text-white-100 mt-3 font-semibold'>{card.content}</p>
                        </div>
                    </div>
                </Button>   
            ))}
        </div>  
    </div>
  )
}

export default Experience