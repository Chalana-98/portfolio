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
        <h1 className=' text-3xl md:text-3xl lg:3xl font-bold'>
          Develop By Chalana
        </h1>
        <ul className=' flex items-center'>
          {/* moon */}
          <li>
            <BsMoonStarsFill className={'cursor-pointer text-xl mx-5'} />
          </li>
          <li>
            <a href="https://drive.google.com/file/d/11YtBLUntv3yXo3lBgL6ew7plo-4_kjEl/view?usp=sharing"
              download={'Chalana CV'}
              className=' bg-blue-500 text-black px-4 py-2 border-none rounded-xl'
            >Resume
            </a>
          </li>
        </ul>
      </nav>
      {/* Hero */}

      <div className="flex flex-col text-center p-16 sm:flex-row">
        <div className="sm:basis-1/2">
          <h1 className='text-5xl font-sans font-bold text-blue-900 md:text-6xl lg:text-7xl'>I'm Chalana</h1>
          <h2 className='text-xl md:text-3xl'>
            <Typewriter
              options={{
                strings: ['Mobile App Developer', 'Web Developer'],
                autoStart: true,
                loop: true,
              }}
            />
            </h2>
          <p className='text-sm py-4 text-gray-600 leading-6 md:text-xl'>I am a fast learner who adapts quickly to change and
            eager to learn new methods and technologies, and work
            as an effective team member. Intend to work smart for
            the advancement of any project that I'm working on.</p>
          {/* social */}
          <div className='text-5xl flex justify-center gap-16 text-gray-700'>
            <a href="">
              <AiOutlineGithub />
            </a>
            <a href="">
              <AiFillLinkedin />
            </a>
            <a href="">
              <AiOutlineMail />
            </a>
          </div>
        </div>
        <div className="sm:basis-1/2 ">
          {/* profile */}
          <motion.div

            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}

            className=' m-auto'>
            <Image
              src="/cvboynew.png "
              alt="cv"
              width={700}
              height={700}
            />
          </motion.div>
        </div>

      </div>

    </section>


  )
}

export default Hero