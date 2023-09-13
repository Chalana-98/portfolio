"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import { motion } from "framer-motion"


export default function Home() {
  return (
    <main className={'bg-blue-100 min-h-screen px-10 md:px-20 lg:px-20'}>
      <Hero />
      <section>
        <div>
          <h2 className='text-5xl py-2 font-bold'>Service I offer</h2>
          <p className='text-sm py-4 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis eum voluptates eveniet suscipit omnis ab unde placeat distinctio nisi necessitatibus, ullam saepe id facilis ipsam molestias nihil neque. Eligendi?</p>

        </div>
        {/* Services cards */}
        <div className=' md:flex lg:flex gap-10 mx-auto'>
          {/* card */}
          <motion.div 
          
          whileHover={{ scale: 1.2 }}
  onHoverStart={e => {}}
  onHoverEnd={e => {}}
          className=' bg-blue-500 text-center shadow-sm p-5 rounded-xl my-10'>
            <Image
              src="/developer.png "
              alt="cv"
              width={150}
              height={150}
              className=' inline'
            />
            <h2 className='text-2xl font-bold '>Developer</h2>
            <p className='text-sm py-2 text-gray-800 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa magni ad pariatur veniam repudiandae iusto perferendis eaque sapiente officia sint ratione et aperiam cupiditate modi amet non, id illum?</p>
          </motion.div>

          <motion.div 
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          
          className=' bg-blue-500 text-center shadow-sm p-5 rounded-xl my-10'>
            <Image
              src="/uiux-01.png "
              alt="cv"
              width={150}
              height={150}
              className=' inline'
            />
            <h2 className='text-2xl font-bold '>UI/UX Designer</h2>
            <p className='text-sm py-2 text-gray-800 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa magni ad pariatur veniam repudiandae iusto perferendis eaque sapiente officia sint ratione et aperiam cupiditate modi amet non, id illum?</p>
          </motion.div>


          <motion.div 
          whileHover={{ scale: 1.2 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}

          className=' bg-blue-500 text-center shadow-sm p-5 rounded-xl my-10'>
            <Image
              src="/designer.png "
              alt="cv"
              width={150}
              height={150}
              className=' inline'
            />
            <h2 className='text-2xl font-bold '>Graphic Design</h2>
            <p className='text-sm py-2 text-gray-800 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa magni ad pariatur veniam repudiandae iusto perferendis eaque sapiente officia sint ratione et aperiam cupiditate modi amet non, id illum?</p>
          </motion.div>
        </div>
      </section>
      {/* my works */}
      <section>
        <div>
          <h2 className='text-5xl py-2 font-bold'>Portfolio</h2>
          <p className='text-sm py-4 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis eum voluptates eveniet suscipit omnis ab unde placeat distinctio nisi necessitatibus, ullam saepe id facilis ipsam molestias nihil neque. Eligendi?</p>

        </div>

        {/* Images cards */}
        <div className='flex flex-col gap-10  p-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'>

            <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/Med.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Medi Care Patient Managment System</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Angular | ASP .NET | Group | Ongoing </p>
                <p className=" text-sm mb-3  text-gray-200 dark:text-gray-200">Medicare is a Centralized Patient Details System. It is a
responsive web-based application</p>
              </div>
            </div>

          </div>
          <div className='basis-1/3 flex-1'>

            <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="MyPort.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Personal Portfolio</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Vite | ReactJS | Individual</p>
                <p className=" text-sm mb-3  text-gray-200 dark:text-gray-200">A Web Application for a personal portfolio</p>
              </div>
            </div>

          </div>
          <div className='basis-1/3 flex-1'>

            <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/Tiny.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tiny Care</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Flutter | Laravel | Individual | Ongoing</p>
                <p className=" text-sm mb-3  text-gray-200 dark:text-gray-200">This is a Mobile application for baby health care</p>
              </div>
            </div>

          </div>
          <div className='basis-1/3 flex-1'>

            <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/Docpng.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Doctor Appointment</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Flutter | Laravel | Individual | Ongoing</p>
                <p className=" text-sm mb-3  text-gray-200 dark:text-gray-200">This is a Mobile application for doctor appointment</p>
              </div>
            </div>

          </div>
          <div className='basis-1/3 flex-1'>

            <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="Sripng.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sri Go</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Flutter | Firebase | Google API | Individual | Ongoing</p>
                <p className=" text-sm mb-3  text-gray-200 dark:text-gray-200">Sri Go is a Comprehensive Travel guide App</p>
              </div>
            </div>

          </div>
          <div className='basis-1/3 flex-1'>

            <div className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src="/port.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">NextJS | Tailwind CSS | Individual</p>
                <p className=" text-sm mb-3  text-gray-200 dark:text-gray-200">A Web Application for a personal portfolio</p>
              </div>
            </div>

          </div>

        </div>

      </section>

      {/* footer */}
      <section>
        <footer className='border-t-2 border-black text-sm opacity-70
         flex flex-col gap-5 items-center justify-center py-10 lg:flex-row lg:items-center'>


          <div>
            <h3 className='text-base mb-2'>Contact me for more details</h3>
            <p className='opacity-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ullam recusandae eius voluptatum saepe suscipit tenetur, temporibus quidem iste, autem officia, aliquid illum eos nemo quasi dolore. Neque, facere inventore?</p>
          </div>
          <div>
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
        </footer>

      </section>
    </main>
  )
}
