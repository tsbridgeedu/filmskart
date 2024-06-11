import React from 'react';
import { Puff,ThreeDots } from 'react-loader-spinner';
import { motion } from 'framer-motion';
const Viewmoremovie = () => {
  return (
    <div className="lg:px-20 sm:px-16 px-10 mt-10 mb-16 flex flex-col gap-10">
        <div className="flex-row flex w-full max-[590px]:px-0 px-16 justify-center">
        <span className="font-inter text-[32px] font-bold tracking-wide border-b-4 border-red-400">
          View Movies
        </span>
      </div>


      <section className='mx-auto p-4'>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
    <img src="./movie-1.jpg" alt="Image 1" className='w-67 h-72 object-cover' />
    <img src="./movie-13.jpg" alt="Image 1" className='w-67 h-72 object-cover' />
    <img src="./movie-4.jpg" alt="Image 1" className='w-67 h-72 object-cover' />
    <img src="./movie-6.jpg" alt="Image 1" className='w-67 h-72 object-cover' />
    <img src="./movie-19.jpg" alt="Image 1" className='w-67 h-72 object-cover' />
    <img src="./movie-3.jpg" alt="Image 1" className='w-67 h-72 object-cover' />
  </div>
</section>
    </div>
  )
}

export default Viewmoremovie
