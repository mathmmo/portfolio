// "use client";
// import React from "react";

// import { AnimatePresence, motion } from "framer-motion";
// import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";

// const Approach = () => {
//     return (
//         <section className="w-full py-20">
//             <h1 className='heading'>
//                 My {' '}
//                 <span className='text-[#a784f9]'>approach</span>
//             </h1>
//             <div className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
//                 <Card title="Planning & Strategy" icon={<AceternityIcon />}>
//                     <CanvasRevealEffect
//                         animationSpeed={5.1}
//                         containerClassName="bg-emerald-900"
//                     />
//                 </Card>
//                 <Card title="Munni is Aditi" icon={<AceternityIcon />}>
//                     <CanvasRevealEffect
//                         animationSpeed={5.1}
//                         containerClassName="bg-sky-900"
//                         colors={[[125, 211, 252]]}
//                     />
//                 </Card>
//                 <Card 
//                     title="Nisha is Munni" 
//                     icon={<AceternityIcon />}
//                 >
//                     <CanvasRevealEffect
//                         animationSpeed={5.1}
//                         containerClassName="bg-rose-900"
//                         colors={[
//                             [236, 72, 153],
//                             [232, 121, 249],
//                         ]}
//                         dotSize={2}
//                     />
//                 </Card>
//             </div>
//         </section>
//     );
// }

// const Card = ({
//     title,
//     icon,
//     children,
// }: {
//     title: string;
//     icon: React.ReactNode;
//     children?: React.ReactNode;
// }) => {
//     const [hovered, setHovered] = React.useState(false);
//     return (
//         <div
//             onMouseEnter={() => setHovered(true)}
//             onMouseLeave={() => setHovered(false)}
//             className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative h-[30rem]"
//         >
//             <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
//             <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
//             <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
//             <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

//             <AnimatePresence>
//                 {hovered && (
//                     <motion.div
//                         initial={{ opacity: 0 }}
//                         animate={{ opacity: 1 }}
//                         className="h-full w-full absolute inset-0"
//                     >
//                         {children}
//                     </motion.div>
//                 )}
//             </AnimatePresence>

//             <div className="relative z-20">
//                 <div className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center">
//                     {icon}
//                 </div>
//                 <h2 className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
//                     {title}
//                 </h2>
//             </div>
//         </div>
//     );
// };

// const AceternityIcon = () => {
//     return (
//         // <svg
//         //     width="66"
//         //     height="65"
//         //     viewBox="0 0 66 65"
//         //     fill="none"
//         //     xmlns="http://www.w3.org/2000/svg"
//         //     className="h-10 w-10 text-black dark:text-white group-hover/canvas-card:text-white "
//         // >
//         //     <path
//         //         d="M8 8.05571C8 8.05571 54.9009 18.1782 57.8687 30.062C60.8365 41.9458 9.05432 57.4696 9.05432 57.4696"
//         //         stroke="currentColor"
//         //         strokeWidth="15"
//         //         strokeMiterlimit="3.86874"
//         //         strokeLinecap="round"
//         //         style={{ mixBlendMode: "darken" }}
//         //     />
//         // </svg>
//         <img src="/test.svg" alt="icon" className="w-16 h-16" />
//     );
// };

// export const Icon = ({ className, ...rest }: any) => {
//     return (
//         <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth="1.5"
//             stroke="currentColor"
//             className={className}
//             {...rest}
//         >
//             <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
//         </svg>
//     );
// };

// export default Approach


import { approach } from '@/data'
import React from 'react'
import { Button } from './ui/movingBorder'

const Experience = () => {
  return (
    <div className='pb-20' id='approach'>
        <h1 className='heading'>
            My {' '}
            <span className='text-[#a784f9]'>approach</span>
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