import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sum from "./class/Sum.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Sum />
  </StrictMode>,
)
