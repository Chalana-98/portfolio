import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero'
import { AiFillLinkedin, AiOutlineGithub, AiOutlineWhatsApp } from 'react-icons/ai'


export default function Home() {
  return (
    <main className={'bg-blue-100 min-h-screen px-10 md:px-20 lg:px-40'}>
      <Hero />
      <section>
        <div>
          <h2 className='text-5xl py-2 font-bold'>Service I offer</h2>
          <p className='text-sm py-4 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis eum voluptates eveniet suscipit omnis ab unde placeat distinctio nisi necessitatibus, ullam saepe id facilis ipsam molestias nihil neque. Eligendi?</p>

        </div>
        {/* Services cards */}
        <div className=' md:flex lg:flex gap-10 mx-auto'>
          {/* card */}
          <div className=' bg-blue-500 text-center shadow-sm p-5 rounded-xl my-10'>
            <Image
              src="/developer.png "
              alt="cv"
              width={150}
              height={150}
              className=' inline'
            />
            <h2 className='text-2xl font-bold '>Developer</h2>
            <p className='text-sm py-2 text-gray-800 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa magni ad pariatur veniam repudiandae iusto perferendis eaque sapiente officia sint ratione et aperiam cupiditate modi amet non, id illum?</p>
          </div>
          <div className=' bg-blue-500 text-center shadow-sm p-5 rounded-xl my-10'>
            <Image
              src="/uiux-01.png "
              alt="cv"
              width={150}
              height={150}
              className=' inline'
            />
            <h2 className='text-2xl font-bold '>UI/UX Designer</h2>
            <p className='text-sm py-2 text-gray-800 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa magni ad pariatur veniam repudiandae iusto perferendis eaque sapiente officia sint ratione et aperiam cupiditate modi amet non, id illum?</p>
          </div>
          <div className=' bg-blue-500 text-center shadow-sm p-5 rounded-xl my-10'>
            <Image
              src="/designer.png "
              alt="cv"
              width={150}
              height={150}
              className=' inline'
            />
            <h2 className='text-2xl font-bold '>Graphic Design</h2>
            <p className='text-sm py-2 text-gray-800 leading-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus ipsa magni ad pariatur veniam repudiandae iusto perferendis eaque sapiente officia sint ratione et aperiam cupiditate modi amet non, id illum?</p>
          </div>
        </div>
      </section>
      {/* my works */}
      <section>
        <div>
          <h2 className='text-5xl py-2 font-bold'>Portfolio</h2>
          <p className='text-sm py-4 text-gray-600 leading-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit reiciendis eum voluptates eveniet suscipit omnis ab unde placeat distinctio nisi necessitatibus, ullam saepe id facilis ipsam molestias nihil neque. Eligendi?</p>

        </div>
        {/* Images */}
        <div className='flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap'>
          <div className='basis-1/3 flex-1'>
          <Image
            src="/Docpng.png "
            alt="Medicare"
            width={150}
            height={150}
            layout='responsive'
            className='rounded-lg object-cover'

          />
           </div>
           <div className='basis-1/3 flex-1'>
          <Image
            src="/Docpng.png "
            alt="Medicare"
            width={150}
            height={150}
            layout='responsive'
            className='rounded-lg object-cover'

          />
           </div>
           <div className='basis-1/3 flex-1'>
          <Image
            src="/Docpng.png "
            alt="Medicare"
            width={150}
            height={150}
            layout='responsive'
            className='rounded-lg object-cover'

          />
           </div>
           <div className='basis-1/3 flex-1'>
          <Image
            src="/Docpng.png "
            alt="Medicare"
            width={150}
            height={150}
            layout='responsive'
            className='rounded-lg object-cover'

          />
           </div>
           <div className='basis-1/3 flex-1'>
          <Image
            src="/Docpng.png "
            alt="Medicare"
            width={150}
            height={150}
            layout='responsive'
            className='rounded-lg object-cover'

          />
           </div>
           <div className='basis-1/3 flex-1'>
          <Image
            src="/Docpng.png "
            alt="Medicare"
            width={150}
            height={150}
            layout='responsive'
            className='rounded-lg object-cover'

          />
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
