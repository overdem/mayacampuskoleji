import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Values } from '@/components/Values'
import { Team } from '@/components/Team'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Team />
      </main>
      <Footer />
    </>
  )
}
