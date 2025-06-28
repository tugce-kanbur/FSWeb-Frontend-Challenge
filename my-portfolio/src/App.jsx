
import './index.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext';
import { DarkModeProvider } from './context/DarkModeContext';
import { ToastContainer } from "react-toastify";
import axios from 'axios';
import { useEffect, useState } from "react";


function App() {
  const [status, setStatus] = useState(null);
  const [content, setContent] = useState(null);

  const API_KEY = "AIzaSyDBvQL98EaJHZDmHvsvceVoSkbGENOQLgk";

  useEffect(() => {
    const postData = {
      name: "Almila",
      job: "Frontend Developer",
    };

    axios
      .post("https://reqres.in/api/workintech", postData, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      })
      .then((response) => {
        setContent(response.data);
        console.log(response.data);
        setStatus("success");
      })
      .catch((error) => {
        console.error("API gönderim hatası:", error);
        setStatus("error");
      });
  }, []);

  return (
    <DarkModeProvider>
      <LanguageProvider>
        <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <Hero />
          <Skills />
          <About />
          <Projects />
          <Footer />
          <ToastContainer position="bottom-right" theme="dark" />
        </div>
      </LanguageProvider>
    </DarkModeProvider>
  )
}

export default App
