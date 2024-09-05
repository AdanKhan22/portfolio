import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ParticlesComponent from "./ParticlesComponent";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='particles-display'>
    <ParticlesComponent />
    </div>
    <App />
  </StrictMode>,
)
