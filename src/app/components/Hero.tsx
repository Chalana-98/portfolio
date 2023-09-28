"use client"

import React from 'react'
import { BsMoonStarsFill } from 'react-icons/bs'
import Image from 'next/image'
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect'

import { AiOutlineGithub, AiFillLinkedin, AiOutlineWhatsApp, AiOutlineMail } from 'react-icons/ai'

function Hero() {
  return (
    // Navigation and hero
    <section >

      <nav className='py-10 flex justify-between'>
        <h1 className=' text-xl md:text-2xl xl:3xl font-bold'>
          Develop By Chalana
        </h1>
        <ul className=' flex items-center'>
          {/* moon */}

          


          <li>
            <a href="https://drive.google.com/file/d/1X5pZn4mruQuNPYcDUSaU9f8qp8ZMAgzd/view?usp=sharing"
              download={'Chalana CV'}

            >
              <button type="button" className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 
                        focus:ring-4 focus:outline-none focus:ring-blue-300 
                        font-medium rounded-lg text-lg px-5 py-2.5 text-center
                         mr-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800" >Resume</button>

            </a>
          </li>
        </ul>
      </nav>
      {/* Hero */}

      <div className="flex flex-col text-center py-5 sm:flex-row">
        <div className="sm:basis-1/2">
          <h1 className='text-5xl py-10 font-sans font-bold text-blue-900 md:text-6xl lg:text-7xl'>I'm Chalana</h1>
          <h2 className='text-xl md:text-3xl'>
            <Typewriter
              options={{
                strings: ['Mobile App Developer', 'Web Developer', 'UI/UX Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>
         
          <p className='text-sm py-10 text-gray-600 leading-6 md:text-xl'>I am Undergraduate at Sabaragamuwa University of Sri Lanka and am currently pursing a B.Sc (Hons) Computing & Information Systems Degree. I am a fast learner who adapts quickly to change and
            eager to learn new methods and technologies, and work
            as an effective team member. Intend to work smart for
            the advancement of any project that I'm working on.</p>
          {/* social */}
          <div className='text-5xl flex justify-center gap-16 text-gray-700'>
            <a href="https://github.com/Chalana-98">
              <AiOutlineGithub />
            </a>
            <a href="https://www.linkedin.com/in/chalana-shehara/">
              <AiFillLinkedin />
            </a>
            <a href="mailto:chalanashehara19@gmail.com">
              <AiOutlineMail />
            </a>
          </div>
        </div>
        <div className="sm:basis-1/2 mb-20">

        <div className='flex justify-start items-center  bg-gradient-to-b from-blue-800 w-40 h-20 rounded-xl pl-2 pr-2'>
          <img
                src="/android.png "
                alt="cv"
                width={50}
                height={50}
              
               
              />
              <p className='ml-2 text-white'>Mobile App Developer</p>
          </div>

          

          
          
          {/* profile */}
          <motion.div

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}

            whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}

            className=' m-auto'>
            <img
              src="/cvboynew.png "
              alt="cv"
              width={600}
              height={600}
            />
            
          </motion.div>

          <div className='flex justify-end items-end -mt-20 '>
          <div className='flex justify-start items-center  bg-gradient-to-b from-blue-800 w-40 h-20 rounded-xl pl-2 pr-2    '>
          <img
                src="/html.png "
                alt="cv"
                width={50}
                height={50}
              
               
              />
              <p className='ml-2 text-white'>Web Developer</p>
          </div>
          </div>
          
          
          



        </div>

      </div>

    </section>


  )
}

export default Hero