import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { DarkModeProvider } from './context/DarkModeContext.jsx';
import { LanguageProvider } from './context/LanguageContext.jsx';

createRoot(document.getElementById('root')).render(
  <LanguageProvider>
    <DarkModeProvider>
      <App />
    </DarkModeProvider>
  </LanguageProvider>
  ,
);
