import React from 'react'
import { BsArrowUpRightCircle } from "react-icons/bs";

const LandingPage = () => {
  return (
    <>
    <div className='min-h-screen bg-zinc-900 pt-1 text-slate-300'>
        
        <div className=' px-3 mt-40 mb-32 md:mt-40 md:mb-16 '>
            {["We Create" , "Eye Opening" , "Presentation"].map((item,index)=>{
                return  <div className=' '>
                <h1  className={`uppercase leading-12  text-5xl font-semibold md:leading-12 md:text-8xl `}>{item}</h1>
               
            </div>
            })}
            

        </div>
            <div className='border-t-2 border-gray-600 px-4 pt-6 flex  flex-col gap-10 md:flex md:flex-row justify-between md:px-4 md:py-2'>
                {["For public and private companies", "From the first pitch to IPO", "Start the project"].map((item,index)=>{
                    return <div className='flex '>
                        <h2 className={`${index===2 && " border-2 border-gray-500 rounded-full  px-2 md:border-2 hover:bg-slate-300 hover:text-zinc-950 hover:text-lg hover:translate-y-2 md:rounded-full md:px-4"}`}>{item}</h2>
                    </div>
                })}

           

            </div>
    </div>
    </>
  )
}

export default LandingPage