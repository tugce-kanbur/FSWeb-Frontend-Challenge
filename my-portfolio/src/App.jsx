import { useState } from 'react'
import './index.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div>
        <Hero />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <About />
      </div>
      <div>
        <Projects />
      </div>
      <div >
        <Footer />
      </div>
    </div>
  )
}

export default App
