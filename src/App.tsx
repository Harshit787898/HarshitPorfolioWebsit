import Navbar from "@/components/Navbar"

import Hero from "@/sections/Hero"
import About from "@/sections/About"
import Skills from "@/sections/Skills"
import Experience from "@/sections/Experience"
import Projects from "@/sections/Projects"
import Contact from "@/sections/Contact"

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Experience />

        <Projects />

        <Contact />

      </main>

    </div>
  )
}

export default App