import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ParticlesComponent from "./ParticlesComponent";
import { Analytics } from "@vercel/analytics/react"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='particles-display'>
    <ParticlesComponent />
    </div>
    <App />
    <Analytics></Analytics>
  </StrictMode>,
)
