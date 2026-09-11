import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// The demo data currently references client image assets that are not yet stored
// in the repository. Replace broken image requests with a polished neutral
// placeholder instead of showing browser broken-image icons.
document.addEventListener('error', (event) => {
  const target = event.target
  if (!(target instanceof HTMLImageElement)) return
  if (target.dataset.fallbackApplied === 'true') return

  target.dataset.fallbackApplied = 'true'
  const label = target.alt?.trim() || 'VIG Auto Accessories'
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 700">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0A0D14"/>
          <stop offset="55%" stop-color="#151A24"/>
          <stop offset="100%" stop-color="#07090D"/>
        </linearGradient>
        <linearGradient id="gold" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#F59E0B"/>
          <stop offset="100%" stop-color="#FBBF24"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="700" fill="url(#bg)"/>
      <circle cx="950" cy="130" r="220" fill="#F59E0B" opacity="0.06"/>
      <circle cx="170" cy="600" r="260" fill="#F59E0B" opacity="0.04"/>
      <path d="M220 470 L310 375 Q345 340 420 330 L760 330 Q825 340 885 390 L970 470 L1015 505 L185 505 Z" fill="#0B0F17" stroke="#F59E0B" stroke-opacity="0.45" stroke-width="4"/>
      <path d="M380 335 L455 270 L700 270 L810 350" fill="#101620" stroke="#FBBF24" stroke-opacity="0.35" stroke-width="3"/>
      <circle cx="340" cy="510" r="58" fill="#07090D" stroke="#F59E0B" stroke-opacity="0.5" stroke-width="5"/>
      <circle cx="340" cy="510" r="23" fill="#161C26"/>
      <circle cx="855" cy="510" r="58" fill="#07090D" stroke="#F59E0B" stroke-opacity="0.5" stroke-width="5"/>
      <circle cx="855" cy="510" r="23" fill="#161C26"/>
      <text x="600" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="34" font-weight="800" fill="url(#gold)">VIG AUTO ACCESSORIES</text>
      <text x="600" y="165" text-anchor="middle" font-family="Arial, sans-serif" font-size="22" fill="#CBD5E1">{label}</text>
      <text x="600" y="620" text-anchor="middle" font-family="Arial, sans-serif" font-size="18" fill="#94A3B8">Client photography will be added before launch</text>
    </svg>`

  target.src = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`
}, true)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
