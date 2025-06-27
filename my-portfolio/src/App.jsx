import { useState } from 'react'
import './index.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { ToastContainer } from "react-toastify";


function App() {
  const [count, setCount] = useState(0);

  return (
    <DarkModeProvider>
      <LanguageProvider>
        <div>
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Footer />
          <ToastContainer position="top-center" />
        </div>
      </LanguageProvider>
    </DarkModeProvider>
  )
}

export default App
