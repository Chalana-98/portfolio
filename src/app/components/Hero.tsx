import React from 'react'
import { BsMoonStarsFill } from 'react-icons/bs'
import Image from 'next/image'

import { AiOutlineGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'

function Hero() {
  return (
    // Navigation and hero
    <section >

      <nav className='py-10 flex justify-between'>
        <h1 className=' text-lg md:text-xl lg:xxl font-bold'>
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
              className=' bg-blue-500 text-black px-2 py-2 border-none rounded-2xl'
            >Resume
            </a>
          </li>
        </ul>
      </nav>
      {/* Hero */}

      <div className="flex flex-col text-center p-16 sm:flex-row">
      <div className="sm:basis-1/2">
          <h1 className='text-5xl font-sans font-bold text-blue-900 md:text-6xl lg:text-7xl'>I'm Chalana</h1>
          <h2 className='text-xl md:text-3xl'>Fullstack Developer</h2>
          <p className='text-sm py-4 text-gray-600 leading-6 md:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis eum voluptates eveniet suscipit omnis ab unde placeat distinctio nisi necessitatibus, ullam saepe id facilis ipsam molestias nihil neque. Eligendi?</p>
          {/* social */}
          <div className='text-5xl flex justify-center gap-16 text-gray-700'>
            <a href="">
              <AiOutlineGithub />
            </a>
            <a href="">
              <AiFillLinkedin />
            </a>
            <a href="">
              <AiOutlineWhatsApp />
            </a>
          </div>
        </div>
        <div className="sm:basis-1/2 ">
          {/* profile */}
          <div className=' m-auto'>
            <Image
              src="/cvboynew.png "
              alt="cv"
              width={800}
              height={800}
            />
          </div>
        </div>

      </div>

    </section>
    

  )
}

export default Hero