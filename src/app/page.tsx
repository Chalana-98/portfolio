import Image from 'next/image'
import styles from './page.module.css'
import Hero from './components/Hero'

export default function Home() {
  return (
    <main className={'bg-blue-100 min-h-screen px-10 '}>
    <Hero/>
  </main>
  )
}
