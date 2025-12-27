import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from './components/ThemeProvider.jsx'
import CookieConsentBanner from './components/CookieConsent.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
      <CookieConsentBanner />
    </ThemeProvider>
  </StrictMode>,
)
