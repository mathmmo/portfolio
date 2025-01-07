import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
// import dynamic from "next/dynamic";
// const BentoGrid = dynamic(() => import("./ui/BentoGrid").then((mod) => mod.BentoGrid), { ssr: false });
// const BentoGridItem = dynamic(() => import("./ui/BentoGrid").then((mod) => mod.BentoGridItem), { ssr: false });
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid className='pb-20'>
            {gridItems.map(({ id, title, description, className, imgClassName, titleClassName, img, spareImg }) => (
                <BentoGridItem 
                    id={id}
                    key={id}
                    title={title}
                    description={description}
                    className={className}
                    img={img}
                    imgClassName={imgClassName}
                    titleClassName={titleClassName}
                    spareImg={spareImg}
                />
            ))}
        </BentoGrid>
    </section>
  )
}

export default Grid