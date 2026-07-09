import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import Process from '@/components/sections/Process'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects from '@/components/sections/Projects'
import Testimonials from '@/components/sections/Testimonials'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />

      <Hero />

      <About />

      <Services />

      <Process />

      <Skills />

      <Experience />

      <Projects />

      <Testimonials />

      <Contact />

      <Footer />
    </main>
  )
}
