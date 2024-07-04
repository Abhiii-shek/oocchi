import React from 'react'
import {motion} from "framer-motion"

const Marquee = () => {
  return (
    <>
    
    <div className='w-full py-20 rounded-t-lg bg-[#004d43]  '>
      <div className='border-t-2 border-b-2  text-[12vw] uppercase flex gap-10 overflow-hidden whitespace-nowrap'>

       <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:"10s"}}>
        we are ochi
       </motion.h1>
       <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:"10s"}}>
        we are ochi
       </motion.h1>
       <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear",repeat:Infinity,duration:"10s"}}>
        we are ochi
       </motion.h1>
      </div>

       
        
        

    </div>
    </>
  )
}

export default Marquee