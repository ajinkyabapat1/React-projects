import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className='text-2xl md:text-6xl font-bold'>{title}</h1>
      <p className='hidden md:inline-block py-6 text-lg w-1/4'>{overview}</p>
      <div className='my-4 md:m-0'>
        <button className=' p-4 px-16 text-xl font-bold  rounded-lg bg-white text-black hover:opacity-50'>▶️Play</button>
        <button className= 'mx-4 p-4 px-16 text-xl font-bold  rounded-lg bg-gray-500 text-white'>❕More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
