import React from 'react'

const Marquee = () => {
  return (
    <>
    
    <div className='w-full py-10 rounded-t-lg bg-[#004d43] inline-flex whitespace-nowrap crawling-line crawling-line--large font-secondary uppercase'>
        <div className='inline-block align-top animate-[crawling-line_10s_linear_infinite] uppercase ' data-line="0">
            WE are ochi
        </div>
        <div className='inline-block align-top animate-[crawling-line_10s_linear_infinite] uppercase ' data-line="1">
            WE are ochi
        </div>
        <div className='inline-block align-top animate-[crawling-line_10s_linear_infinite] uppercase ' data-line="2">
            WE are ochi
        </div>
        <div className='inline-block align-top animate-[crawling-line_10s_linear_infinite] uppercase ' data-line="3">
            WE are ochi
        </div>

    </div>
    </>
  )
}

export default Marquee