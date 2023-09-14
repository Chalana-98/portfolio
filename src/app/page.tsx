"use client"
import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai'
import { motion } from "framer-motion"


export default function Home() {
  return (
    <main className={'bg-blue-100 min-h-screen px-10 md:px-20 lg:px-20 !scroll-smooth'}>
      <Hero />
      <section id='Service' className='scroll-behavior: smooth;'>
        <div>
          <h2 className='text-5xl py-10 font-bold'>Service I offer</h2>
          <p className='text-m py-4 text-gray-600 leading-6'>With my combined skills as a Full Stack Developer and UI/UX Designer, I bring a holistic approach to digital product development. I am dedicated to creating solutions that not only meet technical requirements but also exceed user expectations in terms of usability and aesthetics. My passion for bridge the gap between design and development.</p>

        </div>
        {/* Services cards */}
        <div className=' md:flex lg:flex gap-10 mx-auto'>
          {/* card */}
          <motion.div

            whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}
            className='bg-opacity-70 backdrop-blur-lg bg-indigo-700 text-center shadow-sm p-5 rounded-xl my-10 shadow-slate-600'>
            <Image
              src="/appdev.png "
              alt="cv"
              width={150}
              height={150}
              className=' inline'
            />
            <h2 className='text-2xl font-bold '>Mobile App Developer</h2>
            <p className='text-sm py-2 text-gray-800 leading-6'>I am a Mobile App Developer proficient in creating cross-platform mobile applications using Flutter. I leverage the power of Android Studio to develop and optimize Android-specific features, ensuring a top-notch user experience. </p>
            <div className=' flex justify-center gap-5 '>

             



              <Image
                src="/flutternew.png"
                alt="cv"
                width={50}
                height={50}
              />

<Image
                src="/android.png "
                alt="cv"
                width={50}
                height={50}
              />




            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}

            className='bg-opacity-70 backdrop-blur-lg bg-indigo-700 text-center shadow-sm p-5 rounded-xl my-10 shadow-slate-600'>
            <Image
              src="/developer.png "
              alt="cv"
              width={150}
              height={150}
              className=' inline'
            />
            <h2 className='text-2xl font-bold '>Web Developer</h2>
            <p className='text-sm py-2 text-gray-800 leading-6'>As a skilled web developer, I specialize in creating dynamic and user-friendly websites that engage and captivate users. With expertise in front-end and back-end technologies, ensuring responsive designs and smooth functionality.</p>
            <div className=' flex justify-center gap-5 '>

              <img
                src="/angular.png "
                alt="cv"
                width={50}
                height={50}
              />

              <img
                src="/reactjs.png "
                alt="cv"
                width={60}
                height={50}
                className=''
              />

              <img
                src="/nextjs.png "
                alt="cv"
                width={50}
                height={50}
              />



            </div>
          </motion.div>


          <motion.div
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}

            className='bg-opacity-70 backdrop-blur-lg bg-indigo-700 text-center shadow-sm p-5 rounded-xl my-10 shadow-slate-600'>
            <img
              src="/uiux-01.png "
              alt="cv"
              width={200}
              height={240}
              className=' inline'
            />
            <h2 className='text-2xl font-bold '>UI/UX Developer</h2>
            <p className='text-sm py-2 text-gray-800 leading-6'>I am a skilled UI/UX Developer with a passion for creating visually stunning and user-friendly digital experiences. My expertise lies in using industry-standard design tools such as Figma, Photoshop, and Illustrator.</p>

            <div className=' flex justify-center gap-5 '>

              <img
                src="/figma.png "
                alt="cv"
               className='w-10 h-10'
              />

            
              <img src="/illust.png" className='w-10 h-10' alt="" />

              <img
                src="/photoshop.png "
                alt="cv"
                className='w-10 h-10'
              />


            </div>
          </motion.div>
        </div>
      </section>
      {/* my works */}
      <section id='Portfolio'>
        <div>
          <h2 className='text-5xl py-10 font-bold'>Portfolio</h2>
        

        </div>

        {/* Images cards */}
        <div className='flex flex-col gap-10  p-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/4 flex-1'>

            <motion.div 
             whileHover={{ scale: 1.2 }}
             onHoverStart={e => { }}
             onHoverEnd={e => { }}
            
            
            className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className=" p-10 rounded-t-lg " src="/Med.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Medi Care </h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400"> Angular | ASP .NET | Group | Ongoing </p>
                <p className=" text-sm mb-3  text-gray-200 dark:text-gray-200">Medicare is a Centralized Patient Details System. It is a
                  responsive web-based application. </p>
              </div>
            </motion.div>

          </div>
          <div className='basis-1/4 flex-1'>

            <motion.div 
             whileHover={{ scale: 1.2 }}
             onHoverStart={e => { }}
             onHoverEnd={e => { }}
            
            className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="p-10 rounded-t-lg" src="MyPort.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Personal Portfolio</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Vite | ReactJS | Individual</p>
                <p className=" text-sm mb-3  text-gray-200 dark:text-gray-200">A Responsive Web Application for a personal portfolio for Me. </p>
              </div>
            </motion.div>

          </div>
          <div className='basis-1/4 flex-1'>

            <motion.div
            
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}
            className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className=" p-10 rounded-t-lg" src="/Tiny.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Tiny Care</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Flutter | Laravel | Individual | Ongoing</p>
                <p className=" text-sm mb-3  text-gray-200 dark:text-gray-200">This is a Mobile application for baby health care Amazing UI things.</p>
              </div>
            </motion.div>

          </div>
          <div className='basis-1/4 flex-1'>

            <motion.div
            
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}
            
            className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className=" p-10 rounded-t-lg" src="/Docpng.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Doctor Appointment</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Flutter | Laravel | Individual | Ongoing</p>
                <p className=" text-sm mb-3  text-gray-200 dark:text-gray-200">This is a Mobile application for doctor appointment Using Laravel Backend .</p>
              </div>
            </motion.div>

          </div>
          <div className='basis-1/4 flex-1'>

            <motion.div
            
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}
            
            className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className=" p-10 rounded-t-lg" src="Sripng.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sri Go</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Flutter | Firebase | Google API | Individual | Ongoing</p>
                <p className=" text-sm mb-3  text-gray-200 dark:text-gray-200">Sri Go is a Comprehensive Travel guide App</p>
              </div>
            </motion.div>

          </div>
          <div className='basis-1/4 flex-1'>

            <motion.div 
            
            whileHover={{ scale: 1.2 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}
            
            
            className="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className=" p-10 rounded-t-lg" src="/port.png" alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Portfolio</h5>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">NextJS | Tailwind CSS | Individual</p>
                <p className=" text-sm mb-3  text-gray-200 dark:text-gray-200">A Responsive Web Application for a personal portfolio Me.</p>
              </div>
            </motion.div>

          </div>

        </div>

      </section>

      {/* footer */}
      <section id='contact'>
        <footer className='border-t-2 border-black text-sm opacity-70
         flex flex-col gap-5 items-center justify-center py-10 lg:flex-row lg:items-center'>


          <div>
            <h3 className=' font-black text-lg mb-2'>Contact me for more details</h3>
            <p className='opacity-40'>Designed & Built by Chalana Shehara</p>
            <p className='opacity-40'>Copyright @ 2023 developByChalana Inc. All rights reserved.</p>
          </div>
          <div>
            <div className='text-5xl flex justify-center gap-16 text-gray-700'>
              <a href="https://github.com/Chalana-98">
                <AiOutlineGithub />
              </a>
              <a href="https://www.linkedin.com/in/chalana-shehara/">
                <AiFillLinkedin />
              </a>
              <a href="https://wa.me/94715605887">
                <AiOutlineWhatsApp />
              </a>
            </div>
          </div>
        </footer>

      </section>
    </main>
  )
}
