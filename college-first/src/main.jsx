import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sum from "./class/Sum.jsx"
import HookDemo from './HookDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HookDemo />
  </StrictMode>,
)
